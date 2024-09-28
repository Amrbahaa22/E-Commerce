import "tailwindcss/tailwind.css";
import React  , { useState }from 'react'; 
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './SideBar.css';



const SideBar: React.FC = () =>{

    
    return (   

    <>
    <div className="hidden top-[85px] absolute md:flex left-[85px] w-[250px] h-[384px] pt-[16px] border-r border-gray-300"> 
    
    <ul className="flex flex-col m-0 pt-4  text-black font-poppins font-normal text-[16px] leading-[24px] gap-4 list-none">
   
    <li><a href="/#" className="relative link-arrow">Women's Fashion</a></li>
    <li><a href="/#" className="relative link-arrow">Men's Fashion</a></li>
    <li><a href="/#" className="relative link-arrow">Electronics</a></li>
    <li><a href="/#" className="relative link-arrow">Home and Lifestyle</a></li>
    <li><a href="/#" className="relative link-arrow">Medicine</a></li>
    <li><a href="/#" className="relative link-arrow">Sports & Outdoor</a></li>
    <li><a href="/#" className="relative link-arrow">Baby's & Toy's</a></li>
    <li><a href="/#" className="relative link-arrow">Pets</a></li>
    <li><a href="/#" className="relative link-arrow">Health & Beauty</a></li>

    </ul> 
</div>

 </>
    ) ;
} 

export default SideBar; 