import React from 'react';
import './App.css';  
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'; 
import {useState , useEffect} from 'react' ; 
import ProductList from './components/productList' 
import ProductDetails from './components/productDetails';   
import {Product} from './components/product'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 



function App() {

  const [products , setProducts] = useState<Product[]>([]) ;  

    useEffect(()=>{
      fetch('./Products.json')
      .then(response =>response.json()) 
      .then(data => setProducts(data)) 
      .catch(error => console.error('error fetching data:', error))
    },[]); 
  return (  
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
      
    <Router> 
      <Routes>
      <Route path="/" element={ <ProductList/>}/>
      <Route path="/product/:productId" element={ <ProductDetails products={products}/>}/>
      </Routes>
    </Router> 

    <div><footer className='footer'>@copyRights</footer></div>
    </>
  );
}

export default App;
