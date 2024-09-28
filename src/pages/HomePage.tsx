import React , {useState , useEffect}from 'react';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'; 
import {Header} from '../components/Header/components/Header';  
import Footer from '../components/Footer/Footer';
import CTA from '../components/CTA/CTA' ;
import ctaImages from '../CtaImages' ;  
import SaleSection from '../components/SaleSection/SaleSection'; 
import SideBar from '../components/SideBar/SideBar';




const HomePage: React.FC =()=> {

   
   return (
     
     <div className="relative w-full min-h-screen"> 
     
     <SideBar></SideBar>
     <CTA images={ctaImages}></CTA> 
     {/* <SaleSection></SaleSection> */}

     </div>

       
   );
}

export default HomePage;



