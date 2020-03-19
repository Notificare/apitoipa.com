import React from 'react';
import { Button, Container } from "react-bootstrap"
import {injectIntl} from "gatsby-plugin-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageFluid from "./image-fluid"

function HybridSlider ({intl, content}) {

    return (
      <div className={`hybrid-slider`}>
        <Container>
          <Slider {...{
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            edgeFriction: 2
          }}>
            {content.sliders.map((slide, i) => {
              return(
                <div className={`slide`} key={i}>
                  <div className={`image-wrapper`}>
                    <div className={`image`}>
                      <ImageFluid alt={``} filename={slide.image}/>
                    </div>
                  </div>
                  <div className={`text`} dangerouslySetInnerHTML={{__html: slide.text}}></div>
                  {slide.button &&
                  <div className={`link`}>
                    <Button variant={`secondary`} size={`lg`} onClick={() => {
                      window.location = slide.button.url;
                    }}>{slide.button.label}</Button>
                  </div>
                  }
                </div>
              )
            })}
          </Slider>
        </Container>
      </div>
    )

}

export default injectIntl(HybridSlider)
