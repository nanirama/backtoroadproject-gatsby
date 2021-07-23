import React, { useRef } from "react"
import useIntersectionObserver from '@react-hook/intersection-observer'
import { HowItWorksData } from "../../data/HowItWorksData"

const HowitWorks = ({ background }) => {
    const containerRef4 = useRef() 
    const lockRef4 = useRef()
    let { isIntersecting } = useIntersectionObserver(containerRef4)
    if (isIntersecting && !lockRef4.current) {
        lockRef4.current = true
    }
    return(
            <div className="how_work_blk w-100 float-left text-center" id="howitworks" ref={containerRef4}>
                {lockRef4.current && (
                <div className="container">
                <h2 className="tlt text-center text-uppercase">How It Works</h2>
                <div className="row">
                {HowItWorksData.map((item, index) => {
                    return (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <div className="work_box w-100 float-left text-center">
                                <div className="icon mb-4">
                                    <img className="w-auto" src={item.newicon} alt={item.title} width="70" height="72" />
                                </div>
                                <h3>{item.title}</h3>
                                <p className="mb-0">{item.desc}</p>
                            </div>
                        </div>
                    )
                    })}  
                </div>
                </div>
                )}
            </div>
    )
}

export default HowitWorks