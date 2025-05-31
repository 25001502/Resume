import React, { useState, useEffect } from 'react';
import './App.css';
import Resume from './Resume.jsx';


function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.className = lightMode ? 'light' : '';
  }, [lightMode]);

  return (
    <>
      <button
        className="toggle-mode"
        style={{
          padding: '10px 24px',
          borderRadius: '24px',
          border: 'none',
          background: lightMode
            ? 'linear-gradient(90deg, #fceabb 0%, #f8b500 100%)'
            : 'linear-gradient(90deg, #232526 0%, #414345 100%)',
          color: lightMode ? '#333' : '#fff',
          fontWeight: 'bold',
          fontSize: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          transition: 'background 0.3s, color 0.3s',
          margin: '24px 0',
        }}
        onClick={() => setLightMode((prev) => !prev)}
        aria-label="Toggle light/dark mode"
      >
        {lightMode ? '🌞 Light' : '🌙 Dark'}
      </button>
      <Resume />
      
    </>
  );
}

export default App;

