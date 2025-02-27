import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../../../assets/Header_Pic/img1.jpg'
import pic2 from '../../../assets/Header_Pic/img2.jpg'
import pic3 from '../../../assets/Header_Pic/img3.jpg'
import pic4 from '../../../assets/Header_Pic/img4.jpg'
import pic5 from '../../../assets/Header_Pic/img5.jpg'
import pic6 from '../../../assets/Header_Pic/img6.jpg'
import pic7 from '../../../assets/Header_Pic/img7.jpg'
import pic8 from '../../../assets/Header_Pic/img8.jpg'
import pic9 from '../../../assets/Header_Pic/img9.jpg'
import pic10 from '../../../assets/Header_Pic/img10.jpg'
import pic11 from '../../../assets/Header_Pic/img11.jpg'
import pic12 from '../../../assets/Header_Pic/img12.jpg'

const IndexHeader = () => {

  const sliderData = [
    {
      id: 1,
      img: pic1,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 2,
      img: pic2,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 3,
      img: pic3,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 4,
      img: pic4,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 5,
      img: pic5,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 6,
      img: pic6,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 7,
      img: pic7,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 8,
      img: pic8,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 9,
      img: pic9,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 10,
      img: pic10,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 11,
      img: pic11,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
    {
      id: 12,
      img: pic12,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, magni velit blanditiis dolor saepe omnis alias obcaecati, reiciendis quod enim quos qui. Voluptatum eos ut expedita voluptate dolores eius'
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className=' w-full bg-[#222] pb-20 sm:pb-16 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8'>
      <div className='px-4 py-4 md:py-10 lg:py-10'>
        <h1 className='text-white text-center text-3xl font-semibold md:text-4xl lg:text-5xl'>
          Welcome to <span className='text-4xl font-bold text-indigo-600 underline md:text-5xl lg:text-6xl'>KOSHISH</span>
        </h1>
        <p className='w-full md:w-3/4 lg:w-1/2 my-2 sm:mt-8 text-gray-400 text-center mx-auto text-sm sm:text-base px-4'>
          <span className='font-bold'>KOSHISH</span> is a social initiative dedicated to empowering marginalized communities, promoting education, fostering equality, and creating sustainable opportunities.
        </p>
      </div>
      
      <div className='mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-4/5 xl:w-3/4 2xl:w-[70%]'>
        <Slider {...settings} >
          {sliderData.map((data) => (
            <div key={data.id} className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <div className='relative pt-[56.25%]'>
                <img 
                  src={data.img} 
                  alt={`Slide ${data.id} - ${data.about.slice(0, 20)}...`} 
                  className='absolute top-0 left-0 w-full h-full object-cover rounded-xl'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default IndexHeader