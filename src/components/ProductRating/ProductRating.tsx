import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './ProductRating.css'

interface StarRatingProps {
  rating: number;
}

const ProductRating: React.FC<StarRatingProps> = ({ rating }) => {
 
  const yellowStars = Math.floor(rating);

  const hasHalfStar = rating - yellowStars >= 0.5;

  const emptyStars = 5 - yellowStars - (hasHalfStar ? 1 : 0);

  const createStars = (count: number, filled: boolean) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<i className={`fa fa-star${filled ? '' : '-o'}`} key={i}></i>);
    }
    return stars;
  };

  return ( 
       <>
       <div className="star-rating">
      {createStars(yellowStars, true)}
      {hasHalfStar && <i className="fa fa-star-half-o"></i>}
      {createStars(emptyStars, false)} 
      <span className="prod-rating">({rating})</span>
    </div> 
    
       </>
    
  );
};

export default ProductRating;
