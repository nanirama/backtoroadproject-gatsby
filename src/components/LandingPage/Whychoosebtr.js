import React, { useRef } from "react"
import useIntersectionObserver from '@react-hook/intersection-observer'
import { StatsData } from "../../data/StatsData"
const Whychoosebtr = () => {
    const containerRef3 = useRef() 
    const lockRef3 = useRef()
    let { isIntersecting } = useIntersectionObserver(containerRef3)
    if (isIntersecting && !lockRef3.current) {
        lockRef3.current = true
    }
    return(
            <div className="why_choose_blk w-100 float-left text-center" id="whychoose" ref={containerRef3}>
                {lockRef3.current && (
                <div className="container">
                <h2 className="tlt text-center text-uppercase">Why Choose BTR?</h2>
                <div className="row d-flex flex-row">
                {StatsData.map((item, index) => {
                return (
                    <div key={index} className="col-lg-3 col-sm-6 col-xs-6">
                    <div className="sub_box w-100 float-left text-center">
                        <div className="icon mb-4">
                            <img className="w-auto" src={item.newicon} alt={item.title} width="61" height="60" />
                        </div>
                        <h3 className="mb-4">{item.title}</h3>
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

export default Whychoosebtr