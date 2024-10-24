import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeBook = () => {
    const filteredData = list.filter((data) => data.category === 'Free')

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
        ]
      }
      return (
       <>
       <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
                <h1 className='text-xl font-semibold pb-2'>Free offered courses</h1>
            <p className='text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum beatae dolor, ipsum asperiores consectetur deleniti vitae! Provident veritatis architecto veniam ratione vero eaque officia? Quae enim nostrum itaque mollitia a, excepturi debitis aperiam harum. Quidem in soluta illo cupiditate incidunt.
            </p>
        </div>
      
       
       <div>
            <Slider {...settings}>
              {filteredData.map((item)=>(
                
                <Cards item={item} key={item.id}/>
              ))}
            </Slider>
       </div>
       </div>
       </>
  )
}

export default FreeBook