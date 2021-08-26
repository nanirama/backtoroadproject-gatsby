import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import FormsControler from './FormsControler'

import Aos from "aos"
import "aos/dist/aos.css"


const HomeSlider = ({data}) => {
  const [infiniteValue, setInfiniteValue] = useState(false);
  //const SlidesCount = 
  useEffect(() => {
      Aos.init({});
  }, [])
  const settings = {
    customPaging: function(i) {
      return (
        <a>1</a>
      );
    },
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: "slick-dots slick-thumb",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: infiniteValue,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
    ]

  };
  const afterChangeHandler = (currentSlide)=> {
    if(data.edges.length==currentSlide+1)
    {
      setInfiniteValue(true)
    }
    else{
      setInfiniteValue(false)
    }
  }
    return(
        <div className="container-fluid padding-0 overflow-hidden">
          <div className="row position-relative"> 
          <div className="col-md-12 col-sm-12 main-slider">
                <div className="col-lg-6 col-md-6 slider_form_above slider_form_desktop">                          
                      <div className="slider_form">
                        <FormsControler/> 
                      </div>                         
                 </div>
          <Slider {...settings} afterChange={afterChangeHandler}>
          {data.edges.map(({node}, index) => {
          if(index<data.edges.length && node.img)
          {
            return (
              <div key={index} className="slide-item d-flex justify-content-center">           
                  <div className="s_txt_outer d-flex flex-column justify-content-end align-items-center">
                    <div className="container">
                        <div className="row d-flex align-items-center first-col">
                          <div className=" col-md-12 col-xs-12 col-lg-6 first-col">
                            <div className="s_txt">
                              <h2 className="text-uppercase mb-4">{node.title}</h2>
                              <div dangerouslySetInnerHTML={{ __html: node.content }} ></div> 
                              { node.eimg && (
                                    <div className="w-100 float-left eimg_icon"
                                      data-aos="zoom-in-up"
                                      data-aos-delay="50"
                                      data-aos-duration="1000"
                                    >
                                        <GatsbyImage
                                          alt={node.eimg.imgalt}
                                          image={getImage(node.eimg.img)} 
                                          width={node.eimg.width}
                                          height={node.eimg.height}
                                          className="slider-eimg"
                                        />                                    
                                    </div>
                              )}
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <GatsbyImage
                      alt={node.imgalt}
                      image={getImage(node.img)} 
                      className="slider-img"
                    />
                </div> 
              )
          }          
          })}              
          </Slider>
        </div>  
          <div className="slider_form mob_form">
              <FormsControler/>
          </div> 
        </div>  
        
      </div>
    )
}
export default HomeSlider