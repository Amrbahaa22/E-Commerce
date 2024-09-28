import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Product } from '../components/product';
import Button from '@mui/material/Button';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductsSection: React.FC = () => {  
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
  };

  return (
    <>  
      <div className="relative w-[95%] h-[750px] left-[85px] top-[700px] border-b-[0.5px] border-solid border-[#D9D9D9]">
        <img className="absolute top-0 left-0" src="/images/todays.png" alt="Today's Sale" /> 
        <span className="relative top-[60px] left-[8px] text-[#050505] font-inter font-bold text-[36px] leading-[48px]">
          Explore Our Products
        </span> 
        <div className="absolute top-[150px] w-[95%] ml-[28px] ">
          <Slider {...settings} focusOnSelect={true}>
            {products.map(product => (
              <div key={product.id} className="col-span-1 row-span-1">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div> 
        <Button variant="contained"
            sx={{
              backgroundColor: '#DB4444',  
              color: '#fff', 
              width: '234px' ,
              height: '56px' ,           
              padding: '16px 48px',  
              left: '550px',
              top: '650px',    
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

export default ProductsSection;
