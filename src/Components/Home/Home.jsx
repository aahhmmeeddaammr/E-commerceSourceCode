import React ,{useContext, useEffect}from 'react'
import imga1 from "../../images/banner-4.jpeg"
import imga2 from "../../images/blog-img-1.jpeg"
import imga3 from "../../images/blog-img-2.jpeg"
import imga4 from "../../images/grocery-banner-2.jpeg"
import imga5 from "../../images/grocery-banner.png"
import Slider from "react-slick";
import CategioriesSlider from '../CatergoriesSlider/CategioriesSlider'
import Products from '../Products/Products'
export default function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    fade: true,
    arrows:false
  };
  window.scrollTo(0, 0)
  return (
    <div className='overflow-hidden px-5 '>
        <div className="p-5">
        <Slider {...settings}>
            <img src={imga1} height="300px" alt="" />
            <img src={imga2} height="300px" alt="" />
            <img src={imga3} height="300px" alt="" />
            <img src={imga4} height="300px" alt="" /> 
            <img src={imga5} height="300px" alt="" />
        </Slider>
        </div>
        <h3 className=' overflow-hidden px-5 py-3 '>Shop Popular Categories</h3>
        <div className="  p-5  overflow-hidden ">
        <CategioriesSlider/>
        </div>
        <Products pagination={false}/>
    </div>
  )
}
