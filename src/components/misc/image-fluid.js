import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ImageFluid = props => (
  <StaticQuery
    query={graphql`
            query {
                images: allFile(
                    filter: {
                        childImageSharp: { 
                            internal: {
                                type: { eq: "ImageSharp" }
                            }
                        }
                    }
                ) {
                    nodes {
                        relativePath
                        name
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: NONE)
                        }
                    }
                }
            }
        `}
    render={data => {
      const image = data.images.nodes.find(node => {
        return node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }
      return <GatsbyImage alt={props.alt} image={getImage(image)} />;
    }}
  />
);

export default ImageFluid;
