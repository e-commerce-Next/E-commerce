import React, { useState } from 'react';

const Zoom = () => {
  const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0';
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  const handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <figure
      onMouseMove={handleMouseMove}
      style={{ backgroundImage: `url(${src})`, backgroundPosition }}
    >
      <img src={src} alt="Zoomed Image" />
    </figure>
  );
};

export default Zoom;