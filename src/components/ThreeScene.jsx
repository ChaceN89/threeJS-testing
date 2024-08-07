// src/components/ThreeScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import Chair from './Chair';

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <Chair />
    </Canvas>
  );
};

export default ThreeScene;
