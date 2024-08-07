// src/components/ThreeScene.js
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const Box = () => {
  const mesh = useRef();
  const { viewport } = useThree();
  const [position, setPosition] = useState([0, 0, 0]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.x = position[0];
      mesh.current.position.y = position[1];
    }
  });

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setPosition([x * viewport.width / 2, y * viewport.height / 2, 0]);
  };

  return (
    <mesh ref={mesh} onPointerMove={handleMouseMove}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

export default ThreeScene;
