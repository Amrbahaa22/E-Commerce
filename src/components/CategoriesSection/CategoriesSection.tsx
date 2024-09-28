import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Category } from '../Categories'; 
import CategoryDisplay from '../CategoryDisplay';

const CategoriesSection: React.FC = () => {  
  const [categories, setCategories] = useState<Category[]>([]); 

  useEffect(() => {
    fetch('/categories.json')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>  
      <div className="relative px-0 w-[95%] h-[150px] left-[85px] top-[700px] border-b border-gray-300">
        <img className="absolute top-0 left-0" src="/images/categories.png" alt="categories" />
        <span className="relative top-[60px] left-[8px] w-[211px] h-[48px] font-inter font-bold text-[36px] leading-[48px] text-[#050505]">
          Browse By Category
        </span>
        <div className='relative top-[400px] w-[95%] left-[28px] border-8px border-solid'>
          <Slider
           {...settings} 
           focusOnSelect={true}>
            {categories.map(category => (
              <div key={category.id}>
                <CategoryDisplay category={category} />
              </div>
            ))}
          </Slider>
        </div> 
      </div>
    </>
  );
}

export default CategoriesSection;
