import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      const vanta = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 600.0,
        minWidth: 600.0,
        scale: 1.0,
        scaleMobile: 1.0,
      });
      setVantaEffect(vanta);
    }

    const changeColors = () => {
      if (vantaEffect) {
        const randomColor1 = Math.floor(Math.random() * 0xffffff);
        const randomColor2 = Math.floor(Math.random() * 0xffffff);
        vantaEffect.setOptions({
          color: randomColor1,
          color2: randomColor2,
        });
      }
    };

    document.addEventListener('click', changeColors);

    return () => {
      document.removeEventListener('click', changeColors);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ height: '100vh', width: '100%' }} />;
};

export default VantaBackground;