import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import vertexShader from '../shaders/gridVertexShader.glsl';
import fragmentShader from '../shaders/gridFragmentShader.glsl';

const EffectComponent: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mountRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 100;

      // Set renderer with alpha for transparency
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.PlaneGeometry(200, 200, 100, 100);

      const uniforms = {
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        time: { value: 0.0 },
        radius: { value: 0.23 }
      };

      // Use ShaderMaterial for custom shaders
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
        uniforms.time.value += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
      });
    }
  }, []);

  return <div ref={mountRef} />;
};

export default EffectComponent;