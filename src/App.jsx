// src/App.jsx

import React from 'react';
import VantaBackground from './VantaBackground';

function App() {
  return (
    <div>
      <VantaBackground />
      <div style={{ position: 'relative', zIndex: 1, color: '#fff', textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to My Vanta.js Background!</h1>
        <p>Enjoy the animated background effect.</p>
      </div>
    </div>
  );
}

export default App;