import React from 'react' ;
const Footer : React.FC = ()=>{
return(
<footer className="  flex flex-col bottom-0  w-full justify-between p-x-3 p-y-3 bg-black"> 
    <div className="flex flex-col md:flex-row flex-start p-12 w-[85%]  justify-between text-white">

    <div className="flex flex-row md:flex-col mb-3">
    <img src="/images/Logo-white.png" alt="logo" className="md:w-[130px] md:h-[30px]" /> 
    </div> 

    <div className="flex flwx-row md:flex-col mt-4">
    <div className="w-[81px] h-[28px] font-poppins font-medium text-lg md:text-xl leading-[28px] text-[#FAFAFA] ">Support</div> 
    
    </div>  

    <div className="flex flex-row md:flex-col gap-4 mb-4 mt-4 md:mt-6">
    <div className="text-sm"><a href="/">exclusive@gmail.com</a></div> 
    <div><a href="/" className="text-sm " >+20 100458974</a></div>
    </div> 

    <div className="flex flwx-row md:flex-col  mt-4">
    <div  className=" md: hidden w-[81px] h-[28px] font-poppins font-medium text-lg md:text-xl leading-[28px] text-[#FAFAFA] ">Account</div> 
    </div>  

    <div className="flex flex-row md:flex-col gap-4 mb-4 mt-4 md:mt-6">
    <div><a href="/" className="whitespace-nowrap text-sm ">My Account</a></div>
    <div><a href="/" className="whitespace-nowrap text-sm ">Login / Register</a></div>
    <div><a href="/" className="text-sm ">Cart</a></div>
    <div><a href="/" className="text-sm ">Wishlist</a></div>
    </div>  

    <div className="flex flwx-row md:flex-col mt-4">
    <div  className="w-[81px] h-[28px] font-poppins font-medium text-lg md:text-xl leading-[28px] text-[#FAFAFA] whitespace-nowrap">Quick Link</div> 
    </div>    

    <div className="flex flex-row md:flex-col gap-4 mb-4 mt-4 md:mt-6">
    <div><a href="/" className="whitespace-nowrap text-sm ">Privacy Policy</a></div>
    <div><a href="/" className="whitespace-nowrap text-sm ">Our Terms</a></div>
    <div><a href="/" className="text-sm ">FAQ</a></div>
    <div><a href="/" className="text-sm ">Contacts</a></div>
    </div>   
    </div> 
    <div className="flex flex-row justify-center mb-[10px] text-[16px] text-gray-600">© Copyright Rimel 2022. All right reserved </div>
</footer>
);
} 

export default Footer ; 






