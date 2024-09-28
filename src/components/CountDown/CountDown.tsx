import React , {useEffect , useState} from 'react'  ;  
import './CountDown.css'


interface CountDownProp {
    targetDate : string ;  
} 

const CountDownTimer : React.FC<CountDownProp> = ({targetDate}) =>{

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [timeLeft]);
    
    return(
      <div className="countdown-timer">

      <div className="date">
       <div className="date-unit">Days</div>  
       <div className="date-value">{timeLeft.days.toString().padStart(2, "0")}  </div>
      </div>  

      <div className="colon">:</div>

      <div className="date">
       <div className="date-unit">Hours</div>  
       <div className="date-value">{timeLeft.hours.toString().padStart(2, "0")}</div>
      </div>   

      <div className="colon">:</div>

      <div className="date">
       <div className="date-unit">Minutes</div>  
       <div className="date-value">{timeLeft.minutes.toString().padStart(2, "0")}</div>
      </div>  

      <div className="colon">:</div>

      <div className="date">
       <div className="date-unit">Seconds</div>  
       <div className="date-value">{timeLeft.seconds.toString().padStart(2, "0")}</div>
      </div> 
      
      
      </div> 
       );  

};  

export default CountDownTimer; 



