// src/components/Chair.js
import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Chair = () => {
  const mesh = useRef();
  const [position, setPosition] = useState([2, 0, 0]); // 20 pixels apart assuming scale is similar
  const [isDragging, setIsDragging] = useState(false);
  const gltf = useGLTF('/chair.glb');

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
    <primitive
      object={gltf.scene}
      ref={mesh}
      position={position}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    />
  );
};

export default Chair;
