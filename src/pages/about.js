import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import SEO from "../components/seo"
import Image from '../components/LandingPage/image'
import HomeWhychoosebtr from '../components/LandingPage/HomeWhychoosebtr'
import LandingBanner from '../components/LandingPage/LandingBanner'

import '../components/LandingPage/css/about.css'
const About = (props) => {
  const {site, BannerImage, pageBanner, pageBannerM, aboutImg1 } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        BannerImage: file(relativePath: { eq: "landing/ban_img.png" }) {
          childImageSharp {
              gatsbyImageData(
                  width: 300
              )
          }
        }
        pageBanner: file(relativePath: {eq: "about-banner.jpg"}) {
          childImageSharp {
            fluid(quality: 100, webpQuality: 100, maxWidth: 1920) {
              srcWebp
            }
          }
        }
        pageBannerM: file(relativePath: { eq: "about-banner-m.jpg" }) {
          childImageSharp {
            fluid(quality: 100, webpQuality: 100, maxWidth: 768) {
              srcWebp
            }
          }
        }
        aboutImg1: file(relativePath: {eq: "aboutimg.png"}) {
          childImageSharp {
            gatsbyImageData(width: 1200, layout: CONSTRAINED, quality: 100)
          }
        }  
      }
    `
  )
  const pageBimg = pageBanner.childImageSharp.fluid.srcWebp
  const pageMimg = pageBannerM.childImageSharp.fluid.srcWebp
  const siteURL = site.siteMetadata.siteUrl 
  return(
  <Layout pdata={props}>
    <SEO
        title="About Us | BackToRoad Auto Parts"
        description="BackToRoad Auto Parts Is Your One-Stop Shop For High Quality Used OEM Auto Parts. We're a Used Auto Parts Dealer With 17+ Locations Across USA & Canada."
        cpath = {props.location.pathname}
    />
    <PageBannerDiv className="w-100 float-left text-center page-header" img={pageBimg} mimg={pageMimg}>
      <div className="container">
        <h1 className="page-title text-uppercase text-white">WHY BUY FROM US?</h1>
        <div className="breadcrumb w-100 float-left border-0 p-0">
          <ol className="d-flex" itemscope itemScope itemtype="https://schema.org/BreadcrumbList">
            <li
                itemprop="itemListElement"                
                itemScope
                itemtype="https://schema.org/ListItem"
            >
              <Link
                        itemprop="item" 
                        to={siteURL}                                               
                    ><span itemprop="name">Home</span></Link>
                    <meta itemprop="position" content={1} />
            </li>
            <li className="text-uppercase"
                itemprop="itemListElement"
                itemscope
                itemScope
                itemtype="https://schema.org/ListItem"
            >
              <span itemprop="name">WHY BUY FROM US?</span>
              <meta itemprop="position" content={2} />                        
            </li>
          </ol>
        </div>
      </div>
    </PageBannerDiv>
    <div className="about_blk w-100 float-left bg-white">
      <div className="container">
        <div className="row">
          
          <div className="col-md-12 col-xs-12">
          <div className="col-md-6 about-img float-left col-xs-12 mb-2">
            <div className="w-100 float-left position-relative">
              <Image img={aboutImg1} imgalt="BackToRoad auto parts warehouse staff at work"  alt="BackToRoad auto parts warehouse staff at work" width={497} height={559}/>              
            </div>
          </div>
            <p>BackToRoad Auto Parts is your one-stop-shop for high-quality used OEM auto parts and accessories. We sell high-quality and genuine used parts at affordable prices so our customers have a seamless experience when shopping with us. We know that you’ll need to get your car back on the road as quickly as possible so we provide free and fast shipping for our products all over the United States and Canada.</p>
            <p>Our goal is to provide our customers with used OEM auto parts that are reliable and which do not pale in comparison to brand-new auto parts. You can hand over your requirements to us and we will help you locate those hard-to-find parts and ship them directly to your home, business, or your mechanic in no time at all. Our live inventory is updated on a real-time basis, so you can trust that we will be able to provide you with the used part you need when you need it. And if you can’t find the used auto part you need, you can let us know and our parts locator tool will locate it for you from our network of salvage yards and junkyards around the country. </p>
            <p>BackToRoad Auto Parts guarantees that our used car parts are of ‘A' grade quality, come with a standard 30-day warranty, and are completely affordable. We also provide nationwide shipping and delivery for our auto parts either to you directly or to your mechanic. Our devoted customer service team also ensures that all of our clients receive personalized attention, answering all of your questions and ensuring that your vehicle is up and running in no time.</p>
          
            <p>Give us a call today at 1-800-608-3868 to speak to our Auto Parts Specialists and place your order.</p>
            <a href="tel:866-293-3731" className="btn3"><span class="icon">
    <svg viewBox="0 0 500 500">
      <path d="M128,21q40,75,53,91.5q10,15.5-2,27.5c-10,13-38,32-45,40c-10,9-12,15-3,32q54,105,158,156c18,10,20,5,32-5c8-8,20-27,35-41c10-11,20-12,32-3q14,11,88,51c9,5,11,8,9,27q-7,40-22,51q-67,53-133,29c-180-55-286-195-315-336q-4-62,36-105q10-13,30-17c35-11,42-6,47,2z" />
    </svg>
  </span>(866) 293-3731</a> </div>
      
            </div>
      </div>      
    </div>
    <HomeWhychoosebtr/> 
    <LandingBanner bannerImage={BannerImage}/>
  </Layout>
)
}
const PageBannerDiv = styled.div`    
    @media (max-width: 767px) {
        background-image: url(${props => props.mimg});
        background-size: 100% 100% !important;
        padding:16vw 0;
    }
    @media (min-width: 767px) {
      background-image: url(${props => props.img});
      padding:120px 0;
      background-size: cover;
    }    
    background-repeat:no-repeat;
    background-position:left center;    
`;
export default About
