import React, { useRef } from "react"
import useIntersectionObserver from '@react-hook/intersection-observer'
import Slider from "react-slick";
import Image from './image'

import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const HomePopularMakes = ({data}) => {
  const containerRefh3 = useRef() 
    const lockRefh3 = useRef()
    let { isIntersecting } = useIntersectionObserver(containerRefh3)
    if (isIntersecting && !lockRefh3.current) {
        lockRefh3.current = true
    }

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaLongArrowAltLeft className="arr"/>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaLongArrowAltRight className="arr"/>
    </button>
  );
    const settings = {
        dots: false,
        arrows: true,
        rows: 2,
        slidesPerRow: 2,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        centerMode: false,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              dots: false,
              arrows: true,
              infinite: true,
              initialSlide: 0,
              rows: 2,
              slidesPerRow: 2,
              slidesToShow: 2,
              slidesToScroll: 2,
              prevArrow: <SlickArrowLeft />,
              nextArrow: <SlickArrowRight />
            }
          },
          {
            breakpoint: 991,
            settings: {
              dots: false,
              arrows: true,
              infinite: true,
              initialSlide: 0,
              rows: 2,
              slidesPerRow: 3,
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: <SlickArrowLeft />,
              nextArrow: <SlickArrowRight />
            }
          },
          {
            breakpoint: 767,
            settings: {
              initialSlide: 0,
              infinite: true,
              rows: 1,
              slidesPerRow: 2,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
              prevArrow: <SlickArrowLeft />,
              nextArrow: <SlickArrowRight />
            }
          },
        ]
    
      };
  return (
    <div className="logos_blk w-100 float-left mb-5" ref={containerRefh3}>
      {lockRefh3.current && (
    <div className="container">
      <h2 className="text-uppercase mb-5 pb-2">Popular Makes</h2>
      <Slider {...settings}>
      {data.edges.map(({node}, index) => {
            return(
              <div className="col-lg-12 col-sm-12">
                <div
                  className="client-logos w-100 float-left bg-white mb-4 p-2 d-flex justify-content-center align-items-center"
                >
                  <Image img={node.img} imgalt={node.imgalt} alt={node.imgalt} width="150"/>
                </div>
              </div>
            )
      })} 
      </Slider>
    </div>
    )}
  </div>
  )
}

export default HomePopularMakes