import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mousePosition = useMousePosition();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotation de base
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    
    // Interaction avec la souris
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      mousePosition.x * 0.5,
      0.1
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      mousePosition.y * 0.5,
      0.1
    );
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <meshPhongMaterial
        color="#4338ca"
        wireframe
        shininess={100}
      />
    </Sphere>
  );
}