import React from 'react';     
import {Category} from  '../components/Categories' 


const CategoryDisplay : React.FC<{ category: Category }> = ({ category })  =>{

    return (  
    
        <a href="/mmm" className= "relative flex flex-row w-[170px] h-[145px] left-[85px] top-[700px] border border-solid border-gray-300 rounded-md content-center items-center group group transition-all duration-300 ease-in-out hover:bg-custom-red">
        <div className="absolute w-14 h-14 left-1/2 transform -translate-x-1/2 top-6  group-hover:text-white">
          <img src={category.image} alt={category.category} />
        </div>
  
        <span className="absolute fw-[101px] h-6 left-1/2 transform -translate-x-1/2  bottom-6 text-black text-[16px] leading-6 font-normal">
          {category.category}
        </span>
      </a>   

    ); 
}  






  
  






export default CategoryDisplay;











