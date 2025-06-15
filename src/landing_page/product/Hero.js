import React from 'react'

function Hero() {
  const handleClick = () => {
    alert('Navigate to investment offerings');
  };

  return ( 
   <div className='container'>
    <div className='row mt-5'>
      <h1 className='text-center fs-1 mt-5'>Zerodha Products</h1>
      <h4 className='text-center mt-2 text-muted'>Sleek, modern, and intuitive trading platforms</h4>
      <p className='text-center mt-2'>
        Check out our <button 
          style={{ 
            background: 'none', 
            border: 'none', 
            padding: 0, 
            font: 'inherit', 
            color: 'blue', 
            cursor: 'pointer', 
            textDecoration: 'none' 
          }} 
          onClick={handleClick}
        >
          investment offerings →
        </button>
      </p>
    </div>
   </div>
   );
}

export default Hero;
