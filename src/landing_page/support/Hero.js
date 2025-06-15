import React from 'react';

function Hero() {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <div
        className="row"
        style={{
          backgroundColor: '#387ed1',
          color: 'white',
          padding: '40px',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {/* Left Section */}
        <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
          <h2 style={{ marginTop: 0, marginBottom: '20px', fontWeight: '500' }}>
            Support Portal
          </h2>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.5', maxWidth: '400px' }}>
            Search for an answer or browse help topics to create a ticket
          </p>
          <div style={{ marginTop: '30px', maxWidth: '500px' }}>
            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '4px',
                border: 'none',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              maxWidth: '500px',
            }}
          >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'white',
                  textDecoration: 'underline',
                  fontSize: '1rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
                type="button"
              >
                Track account opening
              </button>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'white',
                  textDecoration: 'underline',
                  fontSize: '1rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
                type="button"
              >
                Track segment activation
              </button>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'white',
                  textDecoration: 'underline',
                  fontSize: '1rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
                type="button"
              >
                Intraday margins
              </button>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'white',
                  textDecoration: 'underline',
                  fontSize: '1rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
                type="button"
              >
                Kite user manual
              </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: '0 1 300px',
            color: 'white',
            fontSize: '1rem',
            lineHeight: '1.5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '20px',
          }}
        >
          <div style={{ alignSelf: 'flex-end' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                margin: 0,
                color: 'white',
                textDecoration: 'underline',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
              type="button"
            >
              Track tickets
            </button>
          </div>
          <h3 style={{ marginTop: 0, fontWeight: '600' }}>Featured</h3>
          <ol style={{ paddingLeft: '20px', marginTop: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a
                href="#"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                Surveillance measure on scrips - June 2025
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                Rights Entitlements listing in June 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
