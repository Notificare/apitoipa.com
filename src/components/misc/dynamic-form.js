import React from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import {Button, FormControl, Form, Modal, Spinner} from 'react-bootstrap';
import { submitForm, loadForm } from "../../request";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class DynamicForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            title: null,
            description: null,
            honeyPot: null,
            fields: [],
            button: null,
            errors: [],
            showModal: false,
            isProcessing: false,
            fieldsError: false,
            serverError: false,
            finished: false
        };
    }

    componentDidMount() {
        loadForm(this.props.type).then((result) => {
            let fields = result.data.fields.map((f) => {
                f.value = "";
                return f;
            });

            this.setState({
                title: result.data.title,
                description: result.data.description,
                fields: fields,
                button: result.data.button_text
            });
        }).catch((e) => {

        });
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;

        this.state.fields.forEach((f) => {
            if (f.name === target.name) {
                f.value = value;
            }
        });

        this.setState({
            errors: [],
            fieldsError: false
        });

    }

    handleHoneyPotChange = event => {
        const target = event.target;
        const value = target.value;

        this.setState({
            honeyPot: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        this.setState({
            isProcessing: true,
            errors: [],
            showModal: false,
            fieldsError: false,
            serverError: false,
            finished: false
        });

        let errors = [], data = {};
        this.state.fields.forEach((f) => {
            if (!f.value && f.required) {
                errors.push({
                    [f.name]: true
                });
            }
            data[f.name] = f.value;
        });

        if (this.props.defaultValues) {
            for (let key in this.props.defaultValues) {
                data[key] = this.props.defaultValues[key];
            }
        }

        if (errors && errors.length > 0) {
            this.setState({
                errors: errors,
                isProcessing: false,
                showModal: true,
                fieldsError: true
            });
        } else {

            if (!this.state.honeyPot) {
                submitForm(this.props.type, data).then(() => {

                    this.setState({
                        isProcessing: false
                    });

                    this.state.fields.forEach((f) => {
                        f.value = "";
                    });

                    if (this.props.redirect) {
                        window.location.href = this.props.redirect;
                    } else {
                        this.setState({
                            showModal: true,
                            finished: true
                        });
                    }

                }).catch(() => {
                    this.setState({
                        isProcessing: false,
                        showModal: true,
                        serverError: true
                    });
                });
            } else {
                this.setState({
                    isProcessing: false,
                    showModal: true,
                    serverError: true
                });
            }
        }

    }

    handleClose = () => {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <div className={`dynamic-form`}>

                {this.state.title &&
                <div className={`title`}>{this.state.title}</div>
                }

                {this.state.description &&
                <div className={`text`}>{this.state.description}</div>
                }

                <Form className={`form-area`} onSubmit={this.handleSubmit}>

                    {this.state.fields.map((field, i) => {

                        if (field.type === "text") {
                            return (
                                <div className="form-field-group" key={i}>
                                    <Form.Label>{field.label}</Form.Label>
                                    <FormControl type={`text`} value={field.value} name={field.name} className="form-field" onChange={this.handleInputChange} />
                                    {this.state.errors.map((f, k) => {
                                        if (f[field.name]) {
                                            return (
                                                <div key={k}>
                                                    <div className={`feedback-text error`}><FormattedMessage id="components.dynamicForm.alerts.required" /></div>
                                                    <div className={`feedback-icon error`}><FontAwesomeIcon size={`lg`} icon="exclamation-circle" /></div>
                                                </div>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            )
                        }

                        if (field.type === "textarea") {
                            return (
                                <div className="form-field-group" key={i}>
                                    <Form.Label>{field.label}</Form.Label>
                                    <FormControl as={`textarea`} value={field.value} className="form-field" rows={10} name={field.name} onChange={this.handleInputChange} />
                                    {this.state.errors.map((f, k) => {
                                        if (f[field.name]) {
                                            return (
                                                <div key={k}>
                                                    <div className={`feedback-text error`}><FormattedMessage id="components.dynamicForm.alerts.required" /></div>
                                                    <div className={`feedback-icon error`}><FontAwesomeIcon size={`lg`} icon="exclamation-circle" /></div>
                                                </div>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            )
                        }

                        if (field.type === "select") {
                            return (
                                <div className="form-field-group" key={i}>
                                    <Form.Label>{field.label}</Form.Label>
                                    <div className={`select-container`}>
                                        <FormControl as={`select`} value={field.value} name={field.name} className="form-field" onChange={this.handleInputChange}>
                                            {field.options.map((option, j) => {
                                                return (

                                                    <option key={j} value={option}>{option}</option>

                                                )
                                            })}
                                        </FormControl>
                                    </div>
                                    {this.state.errors.map((f, k) => {
                                        if (f[field.name]) {
                                            return (
                                                <div key={k}>
                                                    <div className={`feedback-text error`}><FormattedMessage id="components.dynamicForm.alerts.required" /></div>
                                                    <div className={`feedback-icon error`}><FontAwesomeIcon size={`lg`} icon="exclamation-circle" /></div>
                                                </div>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            )
                        }

                        if (field.type === "hidden") {
                            return (
                              <FormControl key={i} type={`hidden`} name={field.name} className="form-field" onChange={this.handleInputChange} />
                            )
                        }

                        return null;

                    })}

                    <div style={{position: "absolute", left: "-9999px", overflow: "hidden"}} aria-hidden="true">
                        <input className="form-field" placeholder={this.props.intl.formatMessage({ id: "components.dynamicForm.alerts.titles.success" })} type="text" onChange={this.handleHoneyPotChange} />
                    </div>

                    {this.state.button &&
                    <Button className={`form-button`} disabled={this.state.isProcessing} variant="secondary" type="submit" block>
                        {this.state.isProcessing &&
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        }
                        {this.state.button}
                    </Button>
                    }

                </Form>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.state.fieldsError === true &&
                            <>
                                <FontAwesomeIcon size={`lg`} style={{marginRight: "15px"}} icon="exclamation-triangle" />
                                <FormattedMessage id="components.dynamicForm.alerts.titles.warning" />
                            </>
                            }
                            {this.state.serverError === true &&
                            <>
                                <FontAwesomeIcon size={`lg`} style={{marginRight: "15px"}} icon="exclamation-circle" />
                                <FormattedMessage id="components.dynamicForm.alerts.titles.error" />
                            </>
                            }
                            {this.state.finished === true &&
                            <>
                                <FontAwesomeIcon size={`lg`} style={{marginRight: "15px"}} icon="check-circle" />
                                <FormattedMessage id="components.dynamicForm.alerts.titles.success" />
                            </>
                            }
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={`text-center m-3`}>
                            {this.state.fieldsError === true &&
                            <FormattedMessage id="components.dynamicForm.alerts.error" />
                            }
                            {this.state.serverError === true &&
                            <FormattedMessage id="components.dynamicForm.alerts.serverError" />
                            }
                            {this.state.finished === true &&
                            <FormattedMessage id="components.dynamicForm.alerts.success" />
                            }
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default injectIntl(DynamicForm)
