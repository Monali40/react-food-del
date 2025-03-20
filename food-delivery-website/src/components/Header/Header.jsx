import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>Choose from Food-Del and enjoy a delicious meal delivered right to your doorstep. From sizzling pizzas to mouth-watering desserts, we have something for everyone!</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
