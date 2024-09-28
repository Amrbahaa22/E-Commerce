import React from "react";  
import {useState , useEffect} from 'react' ; 
import {Product} from './product' 
import { Link } from 'react-router-dom';
import '../assets/productList.css'  
import '../App.css';   



const ProductList : React.FC = () =>{

    const [products , setProducts] = useState<Product[]>([]) ;  

    useEffect(()=>{
      fetch('./Products.json')
      .then(response =>response.json()) 
      .then(data => setProducts(data)) 
      .catch(error => console.error('error fetching data:', error))
    },[]);  


    const prod_card = (prod: Product): JSX.Element => {
      return(
        <div className ='product-card'> 
        <img  src={prod.image}alt={prod.name} className="product-image" />
       <h3 className ='product-title'>{prod.name}</h3>  
       <p className='product-details'>{prod.description}</p>  
       <div className='product-price'>{prod.price.value}{prod.price.currancy}</div>      
       <div>
           <button >Add to Cart</button>
       </div>
       </div>
       
      );
    }
    
    return(  
        <>
        <div className = 'product-list'> 
          {
            products.map(prod =>  
            <Link to={`/product/${prod.id}`} key={prod.id}>
             {prod_card(prod)}
            </Link>) 
           
          }
        
        </div> 
        </> 
        
    );
} 

export default ProductList; 