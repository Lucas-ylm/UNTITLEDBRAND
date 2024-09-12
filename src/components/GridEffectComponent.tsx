import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import vertexShader from '../shaders/gridVertexShader.glsl';
import fragmentShader from '../shaders/gridFragmentShader.glsl';

const EffectComponent: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mountRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 10000);
      camera.position.z = 101;
  
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
  
      const geometry = new THREE.PlaneGeometry(400, 400, 300, 300);
  
      const uniforms = {
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        time: { value: 0.0 },
        radius: { value: 0.135 }
      };
  
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        wireframe: true,
        depthTest: true,
        depthWrite: true 
      });
  
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
  
      const animate = () => {
        requestAnimationFrame(animate);
        uniforms.time.value += 0.035;
  
        // Random value of radius 
        uniforms.radius.value = 0.175 + 0.05 * Math.sin(uniforms.time.value);
  
        renderer.render(scene, camera);
      };
      animate();
  
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
    }
  }, []);
  
  return <div ref={mountRef} />;
};

export default EffectComponent;