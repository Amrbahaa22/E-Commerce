import React, { useState , useEffect} from "react";
import Slider from "react-slick";
import  { NextArrow, PrevArrow } from '../CTA/CustomArrows';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountDown from '../CountDown/CountDown';
import './SaleSection.css'; 
import {Product} from '../product' ;
import ProductOnSaleCard from '../ProductOnSaleCard/ProductOnSaleCard';
import Button from '@mui/material/Button';

const SaleSection : React.FC = () => {  

const [products, setProducts] = useState<Product[]>([]); 


useEffect(() => {
    fetch('/Products.json')
      .then(response => response.json())
      .then(data => {
        const saleProducts = data.filter((product: Product) => product.salePercent > 0);
        setProducts(saleProducts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 5,  
    slidesToScroll: 1,
    nextArrow: <NextArrow />,    
    prevArrow: <PrevArrow />, 
    
  };

 const targetDate = "2024-08-31T23:59:59";  

    return(
        <>  
        <div className=" absolute top-[300px] w-[95%] h-[750px] left-[85px] border-b-[0.5px] border-[#D9D9D9]">

        <img src="/images/todays.png" alt="todays"></img> 

        <span className="flash-sale">Flash Sales</span>
        <CountDown targetDate={targetDate}></CountDown>  
        <div className='image-container'>
        <Slider {...settings} 
        slidesToShow={5}
        focusOnSelect={true}
        >
        {products.map(product => (
          <div key={product.id}>
            <ProductOnSaleCard product={product} />
          </div>
        ))}
      </Slider>
        </div> 
        <Button variant="contained"
            sx={{
              backgroundColor: '#DB4444',  // Customize background color
              color: '#fff', 
              width: '234px' ,
              height: '56px' ,             // Customize text color
              padding: '16px 48px',  
              left: '900px',
              top: '550px',      // Customize padding
              borderRadius: '4px',   
              fontSize: '16px',   
              fontStyle : 'normal',
              fontWeight: '500' , 
              fontFamiliy :'Poppins , sans-serif' ,
              alignItem : 'center', 
              justifyConent: 'center' , 
              textTransform : 'none' ,   
              display : 'flex-start' , 
              flexDirection : 'row' , // Customize border radius
              '&:hover': {
                backgroundColor: '#B83636',  // Customize hover background color
              },
            }}>View All Products</Button>

        </div>  
        

        </>


    );

} 


export default SaleSection ; 
