import React from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import {Container, Button, FormControl, Form} from 'react-bootstrap';
import { createEmailContact } from "../../request";

class SimpleMailingList extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            email: "",
            honeyPot: null,
            tags: ["tag_newsletter"],
            emailError: false,
            serverError: false,
            success: false
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;

        this.setState({
            email: value
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
            emailError: false,
            serverError: false
        });

        if (!this.state.email) {

            this.setState({
                emailError: true
            });

            this.clearErrors();

        } else if (!this.validateEmail(this.state.email)) {

            this.setState({
                emailError: true
            });

            this.clearErrors();

        } else {

            if (!this.state.honeyPot) {

                createEmailContact({email: this.state.email, tags: this.state.tags}).then(() => {

                    this.setState({
                        email: "",
                        success: true,
                        serverError: false
                    });

                }).catch((e) => {

                    this.setState({
                        success: false,
                        serverError: true
                    });

                    this.clearErrors();
                });

            } else {

                this.setState({
                    success: false,
                    serverError: true
                });

                this.clearErrors();

            }

        }
    }

    clearErrors = () => {
        setTimeout(() => {
            this.setState({
                emailError: false,
                serverError: false
            });
        }, 8000);
    }

    validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        return (
            <div className={`simple-mailing-list`}>
                <Container>
                    <div className={`form`}>
                        <Form className={`form-area`} onSubmit={this.handleSubmit}>
                            <div className={`title`}><FormattedMessage id="components.mailingList.title" /></div>
                            <FormControl type="text" value={this.state.email} placeholder={this.props.intl.formatMessage({ id: "components.mailingList.email.placeholder" })} className="form-field" onChange={this.handleInputChange} />
                            <div style={{position: "absolute", left: "-9999px", overflow: "hidden"}} aria-hidden="true">
                                <input className="form-field" placeholder={this.props.intl.formatMessage({ id: "components.mailingList.email.placeholder" })} type="text" onChange={this.handleHoneyPotChange} />
                            </div>
                            <Button className={`button`} variant="primary" type="submit"><FormattedMessage id="components.mailingList.email.button" /></Button>
                        </Form>

                        {this.state.emailError === true && <div className={`form-feedback`}><FormattedMessage id="components.mailingList.email.error" /></div>}
                        {this.state.serverError === true && <div className={`form-feedback`}><FormattedMessage id="components.mailingList.email.serverError" /></div>}
                        {this.state.success === true && <div className={`form-feedback`}><FormattedMessage id="components.mailingList.email.success" /></div>}

                    </div>
                </Container>
            </div>
        )
    }
}

export default injectIntl(SimpleMailingList)
