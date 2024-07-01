import React from 'react' ;  
import { useParams } from 'react-router-dom';  
import {Product} from './product' ; 
import StarRating from './starRating'
import '../App.css';   

interface productDeailsProp {
    products : Product[] ; 
}
const ProductDetails : React.FC<productDeailsProp> = ({products})=>{

    const {productId } = useParams()  ; 
    const product = products.find(p => p.id === productId)  
      
     if(!product) 
        {return (<div>Product not found</div>)} 
    
     return(
      <> 
      <div className ='product-details-container'> 
      <img  src= {product.image} alt={product.name} className="product-details-image" />
      <div className="product-info">
       <h3 className ='product-detials-title'>{product.name}</h3>  
       <p className='product-details-desc'>{product.description}</p>  
       <div className='product-details-price'>{product.price.value}{product.price.currancy}</div>      
       <StarRating rating={product.rating}></StarRating>
          <button className="add-to-cart-button">Add to Cart</button>
      </div>
      </div>
      </>
     )

}

export default ProductDetails ; 