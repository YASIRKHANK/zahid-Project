import React from 'react'
import Slider from "react-slick";
import { sliderData } from '../config/Data';
const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='flex bg-red-300' >
          <Slider {...settings}>
          <div className='border flex '>
            {
             sliderData.map((it)=>(
                <div>
                    <img src={it.img} className='h-36 w-36'/>
                    <p>{it.title}</p>
                    <p>{it.desc}</p>
                </div>
             ))
            }
          </div>
        </Slider>
      
    </div>
  )
}

export default SlickSlider
