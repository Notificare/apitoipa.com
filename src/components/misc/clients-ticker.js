import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {Container} from 'react-bootstrap';
import {injectIntl} from "gatsby-plugin-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TickerSlider = () => (
    <StaticQuery
        query={graphql`
          query clientsTickerImagesQuery {
            source: allFile(filter: { absolutePath: { regex: "/clients-logos/" } }) {
              edges {
                node {
                  name
                  publicURL
                }
              }
            }
          }
        `}
        render={data => {
            let  settings =  {
                dots: false,
                arrows: false,
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 3
                        }
                    }
                ]
            }
            return (
                <Slider {...settings}>
                    {data.source.edges.map(({ node }, i) => {
                        return(
                            <div key={i}>
                                <img src={node.publicURL} width={100} height={100} alt={node.name} />
                            </div>
                        )
                    })}
                </Slider>
            )
        }}
    />
);

const ClientsTicker = ({intl, content}) => (

    <div className={`clients-ticker`}>
        <Container>
            {content.title &&
            <div className={`title`}>{content.title}</div>
            }
            {content.subtitle &&
            <div className={`subtitle`}>{content.subtitle}</div>
            }
            <div className={`ticker-area`}>
                <TickerSlider />
            </div>
        </Container>
    </div>

)

export default injectIntl(ClientsTicker)
