import React from "react"
import { graphql} from "gatsby"
import LandingTemplate from '../components/LandingPage/LandingTemplate'

const MakePartTemplate = (props) => {
  console.log('My Props', props.data.PageData.id)
  const { siteUrl } = props.data.site.siteMetadata;
    const bcrumb = [
      {'name':'Home', 'link':siteUrl},
      {'name':props.data.PageData.title, 'link':null}
    ]
    return (
      <LandingTemplate data={props} cpath={props.location.pathname} bcrumb={bcrumb} />   
    )
}

export const query = graphql`
query($id : String){  
  site {
    siteMetadata {
      siteUrl
    }
  } 
  PageData : wpPart(id: {eq: $id}) {
    seo {
      title
      metaDesc
      focuskw
      metaKeywords
      metaRobotsNoindex
      metaRobotsNofollow              
      schema {
          articleType
          pageType
          raw
      }
  }
    content
    id
    slug
    title
    featuredImage {
    node {
        localFile {
        publicURL
        childImageSharp {
            gatsbyImageData(
                width: 500
              )
        }
        }
    }
    }
    makemodels {
    nodes {
        id
        name
        slug
    }
    }
    morecontent {
    popularUsedPartsTitle
    popularUsedPartsSubTitle
    popularUsedParts
    popularUsedModelPartsTitle
    popularUsedModelPartsSubTitle
    popularUsedModelParts
    aboutContent
    aboutTitle
    aboutImage {
        altText
        localFile {
        childImageSharp {
            gatsbyImageData(
                width: 500
              )
        }
        }
    }
    summaryAboveTitle
    summaryTitle
    summaryContent
    summaryImage {
      altText
      localFile {
      childImageSharp {
          gatsbyImageData(
              width: 500
            )
      }
      }
  }
    benefitsTopContent
    benefitsListingContent
    benefitsBottomContent
    benefitsTitle
    benefitsImage{
        altText
        localFile {
            childImageSharp {
                gatsbyImageData(
                    width: 500
                  )
            }
        }
    }
    whyBackroad
    whyBackroadTopContent
    whyBackroadBottomContent
    wnyBackroadImage{
        altText
        localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
        }
    }
    recentArrivalsTitle
    recentArrivals {
        ... on WpRarrival {
          id
          title
          itemprice {
            itemPrice
          }
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 600, quality: 100, height: 600)
                }
              }
            }
          }
        }
      }
      faqTitle
      faqSubTitle
      faqs {
          ... on WpFaq {
          id
          content
          title
          }
      }
      slides {
          ... on WpSlide {
          id
          title
          content
          featuredImage {
              node {
              altText
              localFile {
                  childImageSharp {
                    gatsbyImageData(height: 1100, width: 2000)
                    }
                  
              }              
              }
          }
          }
      }
      }
}
} 
` 
export default MakePartTemplate
  