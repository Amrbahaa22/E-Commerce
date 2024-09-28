import React, { useRef, useState , useEffect} from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CTA.css";  
import  { NextArrow, PrevArrow } from './CustomArrows';


interface ProductCarouselProps {
  images: string[];
}

const CustomPaging = (src: string, index: number) => {
	return (
		<a href="not">
			<img src={src} alt={`Product ${index + 1}`} />  
		</a>
	);
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
  const [nav, setNav] = useState<Slider | undefined>(undefined);

  let sliderRef = useRef<Slider | null>(null); 

  useEffect(() => {
	if (sliderRef?.current) {
		setNav(sliderRef.current);
	}
	
}, [sliderRef]);

  const settings = {
    CustomPaging: (index: number) => CustomPaging(images[index], index),
    dots: true,
    dotsClass: "slick-dots ",
    arrows: true,
    infinite: true,
    speed: 5,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,        
    autoplaySpeed: 3000,  
    cssEase: "ease-in-out", 
    nextArrow: <NextArrow />,    
    prevArrow: <PrevArrow />, 
  }; 

  return (
    <div className="absolute  w-[95%] top-[64px] md:top-[100px] left-[30px] md:left-[400px] md:w-[892px] md:h-[344px] overflow-hidden">
      
      <Slider  {...settings} arrows slidesToShow={1} asNavFor={nav}  ref={(slider) => (sliderRef.current = slider)}>
				{images.map((image, index) => (
					<div key={uuidv4()} className="min-w-full flex-shrink-0 transition-opacity ease-in-out duration-500">
						<img src={image} alt={`Product ${index + 1}`} className="w-[95%] md:w-[892px]  md:h-[344px] block rounded-[10px]"/>
					</div>
				))}
			</Slider> 

	  <span className="absolute w-[190px] md:w-[294px] md:h-[120px] left-[40px] md:left-[64px]  top-[50px] md:top-[127px] font-inter font-semibold text-[24px] md:text-[48px] md:leading-[60px] md:tracking-[0.04em] text-white">Up to 10% off Voucher</span> 
	  <button className="cta-button top-[120px] md:top-[269px]">Shop Now</button> 
 
    </div>
  );
};

export default ProductCarousel;

