import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HowitWorks = ({ data }) => {
    return(
            <div className="how_work_blk w-100 float-left text-center">
                <div className="container">
                <h2 className="tlt text-center text-uppercase">How It Works</h2>
                <div className="row">
                {data.edges.map(({node}, index) => {
                    return (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <div className="work_box w-100 float-left text-center">
                                <div className="icon mb-4">
                                    <GatsbyImage
                                        alt={node.iconalt}
                                        image={getImage(node.newicon)} 
                                        width={70}
                                        height={72}
                                      />  
                                    {/* <img className="w-auto" src={item.newicon} alt={item.iconalt} width="70" height="72" /> */}
                                </div>
                                <h3>{node.title}</h3>
                                <p className="mb-0">{node.desc}</p>
                            </div>
                        </div>
                    )
                    })}  
                </div>
                </div>
            </div>
    )
}

export default HowitWorks