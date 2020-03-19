import React from 'react';
import { Container } from "react-bootstrap"
import {injectIntl} from "gatsby-plugin-intl";
import ImageFluid from "./image-fluid"

function Instructions ({intl, content}) {

    return (
      <div className={`instructions`}>
        <Container>
          {content.instructions.map((instruction, i) => {
            if (instruction.type === "header") {
              return(
                <div className={`instruction block`} key={i}>
                  <h1>{instruction.title}</h1>
                  <div className={`text`} dangerouslySetInnerHTML={{__html: instruction.text}}></div>
                </div>
              )
            } else {
              return(
                <div className={`instruction image`} key={i}>
                  <h2>{instruction.title}</h2>
                  <div className={`screenshot`}>
                    <ImageFluid alt={``} filename={instruction.image}/>
                  </div>
                </div>
              )
            }
          })}
        </Container>
      </div>
    )

}

export default injectIntl(Instructions)
