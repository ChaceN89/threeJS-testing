// src/components/Box.js
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = () => {
  const mesh = useRef();
  const [position, setPosition] = useState([-2, 0, 0]);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (event) => {
    if (isDragging) {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setPosition([x * 5, y * 5, 0]);
    }
  };

  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.set(...position);
    }
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

export default Box;
