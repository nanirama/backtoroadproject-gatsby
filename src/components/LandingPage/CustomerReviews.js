import React, { useRef } from "react"
import useIntersectionObserver from '@react-hook/intersection-observer'
import Slider from "react-slick";
import Image from './image'
import { FaStar } from 'react-icons/fa';
const CustomerReviews = ({gImage}) => { 
  const containerRef5 = useRef()
    const lockRef5 = useRef()
    let { isIntersecting } = useIntersectionObserver(containerRef5)    
    if (isIntersecting && !lockRef5.current) {
        lockRef5.current = true
    }
  let iconStyles = { color: "#FFC93E", fontSize: "1.2em", marginRight:"5px" };
  const ReviewsData = [
    {
          "title": "William Edwards",
          "content": "Wow!! Backtoroad saved me 700 dollars with purchasing the transfer case i needed for my ford truck.It took a week to get it..but well worth the wait.It is in and works great.Much appreciation mike.",
          "rating": "5"
      },
    {
          "title": "Daniel Peacher",
          "content": "Friendly guys who made me the perfect abs up on the spot,I gave Darren my vehicle details he gave me a great price and I had my abs the next day, to easy. I recommend this trader to everyone.",
          "rating": "5"
      },
    {
          "title": "Roger Sanders",
          "content": "Best in the business I'm 78 years old and they treat me so nice. I was very hesitant to buy something of the web cause I was afraid of getting the wrong computer module. Called these folks, they said all they needed is the VIN number to my car and they got me the right part. Works like a charm. Excellent trustworthy service",
          "rating": "5"
      },
    {
          "title": "Kevin Davis",
          "content": "Part came in a reasonable time and looks like a good abs assembly ,saved money too. I would recommend backtoroad auto.",
          "rating": "5"
      },
    {
          "title": "Chris Higgins",
          "content": "I had trouble with local wrecking yards and their service. Phillips hooked me up today, so he gets his name in this. Well be returning again to find the piece that cannot be found. A real relief from the shoddy places down west. Got more than what i expected, ordered through phone, feels good.",
          "rating": "5"
      },
    {
          "title": "Victoria Steinfield",
          "content": "The front lower control arms on my 05 4Runner were so rusted/seized that it made an alignment impossible. Staff was friendly and knowledgeable and had the part I needed for cheaper than I thought. Great business. Highly recommend!!! ",
          "rating": "5"
      },
    {
          "title": "Benita Monroe",
          "content": "I ordered an ABS Assembly for my Toyota camry. It came very quickly and was in wonderful condition. They kept me updated through the entire process. From the order all the way through the delivery. I am beyond pleased with my experience with Joe.Thank you Backtoroad auto!!",
          "rating": "5"
      },
    {
          "title": "Chester Brown",
          "content": "I purchased some parts for 2004 land cruiser and I was getting ready to make the payment then the dude gave me a discount and dropped the price without me asking for a better deal. Professional and respectful. I usually call them if I need parts even though I live in Utah. ",
          "rating": "5"
      },
    {
          "title": "Patrick Burgois",
          "content": "They are helpful and knowledgeable. I called to get a window for my car right as they were about to close. Instead of being grumpy about it, they helped me in getting it..",
          "rating": "5"
      },
    {
          "title": "Jeremy Franklin",
          "content": "We received the abs computer and wanted to say thank you working fine",
          "rating": "5"
      },
    {
          "title": "Michelle Davis",
          "content": "As a Dodge owner this is the first place I check for parts and knowledge great staff and always helpful in all things DodgeðŸ'",
          "rating": "5"
      },
    {
          "title": "Michael Smith",
          "content": "certainly not the cheapest  but not the highest as well. i love my supra and they got me a good tranny runs great",
          "rating": "5"
      },
    {
          "title": "Ramirez Lopez",
          "content": "They had the part I need woohooo",
          "rating": "5"
      }
  ]    

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          initialSlide: 0,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          initialSlide: 0,
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <>
    <div ref={containerRef5}>
                {lockRef5.current && (
                    <div className="tm_blk w-100 float-left" id="reviews">
                    <div className="container">
                      <h2 className="tlt text-center text-uppercase">Customer Reviews</h2>
                        
                        <Slider {...settings}>
                        {ReviewsData.map((item, index) => {
                          return (
                              <div className="col-md-12 col-xs-12" key={index}>
                                  <div className="tm_box w-100 float-left">
                                  <p className="reviewcontentheight">{item.content}</p>
                <   div className="bottom w-100 float-left">
                                <div className="author_info float-left">
                                  <div className="text w-auto float-left pl-3">
                                    <h3 className="tm-sub-heading float-left mb-0">{item.title}</h3>
                                    <div className="rating w-100 float-left">
                                      <FaStar style={iconStyles} />
                                      <FaStar style={iconStyles} />
                                      <FaStar style={iconStyles} />
                                      <FaStar style={iconStyles} />
                                      <FaStar style={iconStyles} />
                                    </div>
                                </div>
                                </div>
                                <div className="google float-right">
                                <Image img={gImage} imgalt={`Google Review ${index}`}/>
                                </div>
                                </div>
                                  </div>
                                  
                              </div>
                          )
                        })}
                        </Slider>
                    </div>
                    </div>
    )}
    </div>
    </>
    
  )
}

export default CustomerReviews