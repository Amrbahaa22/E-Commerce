import React from "react"; 
import '../App.css';   
import {Product} from './product' 
import '../assets/productList.css'


const ProductCard : React.FC<{ product: Product }> = ({ product })  =>{

    return (  
        <> 
        <div className ='product-card'> 
        <img  src= {product.image} alt={product.name} className="product-image" />

        <h3 className ='product-title'>{product.name}</h3>  
        <p className='product-details'>{product.description}</p>  
        <div className='product-price'>{product.price.value}{product.price.currancy}</div>      
        <div>
            <button >Add to Cart</button>
        </div>
        </div>
        </>

    ); 
}


export default ProductCard;








