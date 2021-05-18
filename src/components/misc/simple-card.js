import React from "react"
import {Card, Button} from "react-bootstrap";
import { injectIntl } from "gatsby-plugin-react-intl";

function SimpleCard ({ intl, content }) {
  return(
    <div className={`simple-card`}>
      <Card>
        {content.header &&
        <Card.Header>{content.header}</Card.Header>
        }
        {content.url &&
        <div className={`card-image`}>
          <img alt={content.title} src={content.url} />
        </div>
        }
        <Card.Body>
          {content.title &&
          <Card.Title>{content.title}</Card.Title>
          }
          {content.subtitle &&
          <Card.Subtitle className="mb-2 text-muted">{content.subtitle}</Card.Subtitle>
          }
          {content.description &&
          <Card.Text dangerouslySetInnerHTML={{__html: content.description}}></Card.Text>
          }
          {content.button && content.button.label &&
          <Button variant="primary">{content.button.label}</Button>
          }
        </Card.Body>
        {content.footer &&
        <Card.Footer className="text-muted">{content.footer}</Card.Footer>
        }
      </Card>
    </div>
  )
}

export default injectIntl(SimpleCard)
