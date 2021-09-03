import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { HomeJourneySoFarData } from "../../data/HomeJourneySoFar"
import journeyIcon from '../../assets/images/landing/jicon.png'

import IconOne from '../../assets/images/landing/cog-icon.png'
import IconTwo from '../../assets/images/landing/loc-icon.png'
import IconThree from '../../assets/images/landing/star-icon.png'
import IconFour from '../../assets/images/landing/compass-icon.png'

const HomeJourneySoFar = ()=>{
    return (
        <div style={{ display: "grid" }} className="journey_blk  pt-1 mb-0 pb-0 w-100 float-left text-center">
          <StaticImage
            style={{
              gridArea: "1/1",
            }}
            layout="fullWidth"
            aspectRatio={3 / 1}
            alt=""
            src={
              "../../assets/images/landing/journey_bg.jpg"
            }
            formats={["auto", "webp", "avif"]}
          />
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              placeItems: "center",
              display: "grid",
            }}
          >
            <JourneyDiv className="container">
            <h2
                     className="tlt text-white text-center text-uppercase"
                 >Our Journey So Far</h2>
            <div
                    className="row d-flex align-items-center justify-content-center align-items-center "                                     
                >
                    {HomeJourneySoFarData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="col-md-3 col-sm-6 col-xs-6 d-flex align-items-center justify-content-center"
                            >
                                <div
                                    className="count_blk w-100 text-center d-flex align-items-center justify-content-center flex-column align-self-stretch"
                                >
                                    <JourneyIcon img={journeyIcon} className="icon d-flex align-items-center justify-content-center flex-row"  itemprop="image">
                                        {item.newicon==='cog' && <StaticImage src="../../assets/images/landing/cog-icon.png" width={60} height={60}  /> }
                                        {item.newicon==='loc' && <StaticImage src="../../assets/images/landing/loc-icon.png" width={60} height={60} /> }
                                        {item.newicon==='star' && <StaticImage src="../../assets/images/landing/star-icon.png" width={60} height={60}/> }
                                        {item.newicon==='compass' && <StaticImage src="../../assets/images/landing/compass-icon.png" width={60} height={60}  /> }
                                    </JourneyIcon>
                                    <h3 className="mb-0">{item.title}</h3>
                                    <p className="mb-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}   
                </div>  
            </JourneyDiv>
          </div>
        </div>
      )
}
const JourneyIcon = styled.div`
     
`;
const JourneyDiv = styled.div`
     padding: 1rem !important;
    @media (max-width: 767px) {
        padding: 3rem 1rem !important;
    }
 `;
export default HomeJourneySoFar