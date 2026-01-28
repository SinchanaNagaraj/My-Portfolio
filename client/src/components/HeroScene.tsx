import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Stars } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import { LayerMaterial, Depth, Noise } from "lamina";

function GeometricShapes() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const materials = useMemo(() => new THREE.MeshPhysicalMaterial({
    roughness: 0,
    metalness: 0.8,
    color: "#CCFF00",
    emissive: "#CCFF00",
    emissiveIntensity: 0.2,
    wireframe: true
  }), []);

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[2, 0, 0]} material={materials}>
          <icosahedronGeometry args={[1.5, 0]} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.5}>
        <mesh position={[-2, 1, -1]} material={materials}>
          <octahedronGeometry args={[1, 0]} />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[0, -2, 1]} material={materials}>
          <torusGeometry args={[1, 0.4, 16, 100]} />
        </mesh>
      </Float>
    </group>
  );
}

function Fallback() {
  return null;
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(204,255,0,0.1)_0%,_transparent_70%)]" />
      <Suspense fallback={<Fallback />}>
        <Canvas 
          dpr={[1, 2]} 
          gl={{ antialias: true, alpha: true }}
          onError={(e) => console.error("WebGL Error:", e)}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#FF00FF" intensity={2} />
          <pointLight position={[-10, -10, -10]} color="#00FFFF" intensity={2} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <GeometricShapes />
          <fog attach="fog" args={['#050505', 5, 20]} />
        </Canvas>
      </Suspense>
    </div>
  );
}
