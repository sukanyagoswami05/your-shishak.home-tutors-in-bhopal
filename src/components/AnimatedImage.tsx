
import React from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const AnimatedImage = ({ src, alt, className = "", fallbackSrc }: AnimatedImageProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc) {
      e.currentTarget.src = fallbackSrc;
    }
  };

  return (
    <div className="animated-image-container">
      <img 
        src={src}
        alt={alt}
        className={`animated-image ${className}`}
        onError={handleError}
      />
    </div>
  );
};

export default AnimatedImage;
