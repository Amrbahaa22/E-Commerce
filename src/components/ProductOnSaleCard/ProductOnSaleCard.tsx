import React from 'react';  
import './ProductOnSaleCard.css';    
import {Product} from  '../product' 
import ProductRating from '../ProductRating/ProductRating'



const ProductOnSaleCard : React.FC<{ product: Product }> = ({ product })  =>{ 
    
    const oldPrice = product.price.value ;  
    const nwPrice =  product.price.value*(product.salePercent/100.0) ; 

    return (  
        <> 
        <div className ='product-card'>  
            <div className="absolute z-10 px-2.5 py-0 text-center leading-[26px] gap-2.5 w-[55px] h-[26px] left-[12px] top-[12px] text-white bg-[#DB4444] rounded-md">-{product.salePercent}%</div>
            <div className="absolute w-[270px] h-[250px] bg-[#F5F5F5] rounded-sm">
            <img  className="absolute w-[172px] h-[152px]"
                 style={{ left: 'calc(50% - 86px)', top: 'calc(50% - 76px)' }}src= {product.image} alt={product.name}/> 
            <div className="absolute top-[8%] right-[10%] w-[34px] h-[34px] rounded-full bg-white "> 
                <img className="absolute left-[2.67%] top-[5.83%] w-full h-full" src="/images/Wishlist.png" alt="liked"/>
            </div>
            </div>
        <h3 className ="absolute top-[258px] w-[201px] h-[24px] text-black font-medium text-[16px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}>{product.name}</h3>  

        <div className="absolute top-[295px] flex flex-row ?-between items-center gap-[16px]">
        <div className='font-poppins font-medium text-[16px] text-custom-red'>{product.price.currancy}{nwPrice.toFixed(2)}</div>
        <div className="prod-old-priceont-medium text-[16px] text-[#040404] opacity-50"
  style={{ fontFamily: 'Poppins, sans-serif', textDecorationLine: 'line-through' }}>{product.price.currancy}{oldPrice.toFixed(2)}</div>  
        </div>
        
        <div className="absolute bottom-[50px]">
        <ProductRating rating={product.rating}></ProductRating>
        </div>     
        
        </div>
        </>

    ); 
}


export default ProductOnSaleCard;











