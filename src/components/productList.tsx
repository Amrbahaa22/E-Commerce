import React from "react";  
import {useState , useEffect} from 'react' ; 
import {Product} from './product' 
import ProductCard from './productCard' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 



const ProductList : React.FC = () =>{

    const [products , setProducts] = useState<Product[]>([]) ;  

    useEffect(()=>{
      fetch('./Products.json')
      .then(response =>response.json()) 
      .then(data => setProducts(data)) 
      .catch(error => console.error('error fetching data:', error))
    },[]); 
    
    return(  
        <>
        <nav className ='navbar'> 
        <div className="logo">MyWebsite</div>
          <div className='nav-links'>
            <a href='/'>Home</a> 
            <a href='/'>Products</a>
            <a href='/'>Offers</a> 
          </div> 
          <a href="#cart" className="cart"> <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#1445c1"/></a>
        </nav> 
        
        <div className = 'product-list'> 
          {
            products.map(prod =>   <ProductCard key ={prod.id} product={prod} />)
          }
        </div> 

        <div><footer className='footer'>@copyRights</footer></div>
        </> 
        
    );
} 

export default ProductList; 