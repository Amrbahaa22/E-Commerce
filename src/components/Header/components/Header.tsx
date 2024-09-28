import "tailwindcss/tailwind.css" ; 
import './Header.css' ;   
import '@fontsource/poppins';
import React , {useState} from 'react' ;  
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase'; 
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search'; 
import {HeaderSideNav} from './HeaderSideNav';

const Search = styled('div')(({ theme }) => ({
    borderRadius: '4px',       
    backgroundColor: '#F5F5F5', 
    display: 'flex',
    alignItems: 'center',
    width: '243px',              
    height: '38px',            
    gap: '34px',        
  '&:hover': {
    backgroundColor: alpha('#e0e0e0', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
   
  },
}));


const StyledInputBase = styled(InputBase)({
    color: 'inherit', // Account for padding and icon
    width: '153px',  
    fontSize : '12px' ,
    height: '24px' ,
  });



export const Header: React.FC = () =>{
 
   const location = useLocation(); 
   const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

    return (   
      <> 

      <header className="fixed top-0  flex w-full md:h-auto  bg-white  h-20  z-[20] border-b-2 border-gray-300">
        <div className="relative flex flex-row items-center md:justify-between md:item-end bg-white text-black 
            top-0 md:w-[90%]  w-[95%] left-[10px] md:left-[85px] pb-[10px] pt-[30px] ">
       <div className="md:hidden">
       <HeaderSideNav/>
      </div>
        <div>
          <a href="/"> 
          <img src="/images/Logo.png" alt="logo" className="item-center gap-20px md:left-0 width-[24px] cursor-pointer hover:animate-waving  duration-900 ease-in-out"/> 
          </a>
        </div>

    <ul className=" hidden md:flex stretch flex-grow-1 list-none p-0 m-0 left-[135px] top-[88px] gap-[48px]">
      <li className={location.pathname==='/' ? 'mr-[20px] w-auto font-poppins font-normal text-[16px] leading-[24px] border-b-2 border-black' : "mr-[20px] w-auto font-poppins font-normal text-[16px] leading-[24px]"}><a className="no-underline whitespace-nowrap text-black"href="/mmm">Home</a></li> 
      <li className="mr-[20px] w-auto font-poppins font-normal text-[16px] leading-[24px]"><a className="no-underline whitespace-nowrap text-black" href="/mmm">Conact</a></li>
      <li className="mr-[20px] w-auto font-poppins font-normal text-[16px] leading-[24px]"><a className="no-underline whitespace-nowrap text-black"href="/mmm">About</a></li> 
      <li className="mr-[20px] w-auto font-poppins font-normal text-[16px] leading-[24px]" > <a className="no-underline whitespace-nowrap text-black"href='/mmm'>Sign Up</a></li>
    </ul>   

    <ul className="ml-8 md:ml-0 flex strech flex-grow-1 list-none items-center md:justify-between w-[347px] h-[38px] p-0 m-0 md:left-[135px] top-[88px] md:gap-[24px]  gap-1"> 
      <li className="flex flex-row justify-center items-center p-[7px_12px_7px_20px] gap-[10px] md:w-[243px] w-[233px] h-[38px] bg-[#F5F5F5] rounded-[4px]  flex-grow">
      <Search>
      <StyledInputBase
        placeholder="What are you looking for ?"
        inputProps={{ 'aria-label': 'search' }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            console.log('Search:', event.currentTarget.value);
            // You can add your search logic here
          }
        }}
      /> 
        <SearchIcon />
      
    </Search>
    <li/>
    
      </li>
      <li className="md:w-[32px] md:h-[32px] "><a href="/mmm"><img src="/images/Wishlist.png" alt="wishlist" /></a></li> 
      <li className="md:w-[32px] md:h-[32px]"><a href="/mmm"><img src="/images/cart.png" alt="cart" /></a></li>
     
    </ul>  
  </div> 

  <aside className={`absolute md:hidden top-0 z-50 min-h-screen min-w-full bg-custom-red text-whit overflow-y-hidden ${isOpen? 'translate-x-0' : '-translate-x-full'} duration-200 ease-in-out} `}>
  <div className="flex flex-col py-10 px-5">
    <div className='w-full flex justify-end'>
    <div className="w-4/6 flex justify-between"> 
     <img src="/images/Logo.png" alt="logo" className="h-16 w-16"/>  

     
    </div>
    </div>
  </div>
  </aside>
</header>

      </>
      
      
    
    ) ;
} 


