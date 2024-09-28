import React from 'react';


interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow-right`}
      style={{ ...style, display: 'block', right: '25px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow-left`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
