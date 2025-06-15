import React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}>
          Go to Home Page
        </button>
      </Link>
    </div>
  );
}

export default Notfound;
