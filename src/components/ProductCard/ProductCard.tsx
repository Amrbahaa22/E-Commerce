import React from 'react';  
import './ProductCard.css';    
import {Product} from  '../product' 
import ProductRating from '../ProductRating/ProductRating'



const ProductCard : React.FC<{ product: Product }> = ({ product })  =>{

    return (  
        <> 
         <div className ='product-card'>  
           
            <div className="absolute w-[270px] h-[250px] bg-[#F5F5F5] rounded-sm">
            <img  className="absolute w-[172px] h-[152px]"
                 style={{ left: 'calc(50% - 86px)', top: 'calc(50% - 76px)' }}src= {product.image} alt={product.name}/> 
            <div className="absolute top-[8%] right-[10%] w-[34px] h-[34px] rounded-full bg-white "> 
                <img className="absolute left-[2.67%] top-[5.83%] w-full h-full" src="/images/Wishlist.png" alt="liked"/>
            </div>
            </div>
        <h3 className ="absolute top-[258px] w-[201px] h-[24px] text-black font-medium text-[16px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}>{product.name}</h3>  

        <div className='absolute top-[295px] font-poppins font-medium text-[16px] text-custom-red'>{product.price.currancy}{product.price.value.toFixed(2)}</div>
        
        <div className="absolute bottom-[50px]">
        <ProductRating rating={product.rating}></ProductRating>
        </div>     
        
        </div>
        
        </>

    ); 
}


export default ProductCard;











