import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";




const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    btnName:"shop Now",
    url:
      "https://static.wixstatic.com/media/303f84_2289ab5754584e3da88f40be5354ecf5f000.jpg/v1/fill/w_967,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/303f84_2289ab5754584e3da88f40be5354ecf5f000.jpg"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://static.wixstatic.com/media/303f84_2289ab5754584e3da88f40be5354ecf5f000.jpg/v1/fill/w_967,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/303f84_2289ab5754584e3da88f40be5354ecf5f000.jpg"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://static.wixstatic.com/media/303f84_d26b9bcd94b3470bb603822fa3976eb5f000.jpg/v1/fill/w_967,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/303f84_d26b9bcd94b3470bb603822fa3976eb5f000.jpg"
  },
 
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt} className="">
    <img src={image.url} alt={image.alt} />
<button className={`${image.btnName && 'relative px-12 py-4 bg-white text-[#2A7C6F] border-2 border-[#2A7C6F] bottom-36 left-44 hover:bg-[#2A7C6F] hover:text-white'}`}>{image.btnName}</button>
    {/* <p className="legend top-[50%] bottom-[30%] flex justify-center items-center text-xl bg-gray-300 ">{image.label}</p> */}
  </div>
));

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div>
      <h1 className="flex justify-center items-center text-5xl font-bold text-[#2A7C6F] mt-12 mb-6 "> YOU ALWAYS DESIREs!</h1>
      <div className="flex justify-center items-center h-[100vh]">
      <Carousel
        showArrows={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="max-w-[750px]"
      >
        {renderSlides}
      </Carousel>
    </div>
    </div>
  );
}