'use client';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// @ts-expect-error filepath is correct but for some reason there is an error
import vertexShader from '@/shaders/morph/vertex.glsl';
// @ts-expect-error filepath is correct but for some reason there is an error
import fragmentShader from '@/shaders/morph/fragment.glsl';

const getScreenSizeInInches = (): number => {
  const screenWidth = window.screen.width;
  return screenWidth;
};

const getDynamicSegments = (screenWidth: number, minWidth = 200, maxWidth = 2560, minSegments = 30, maxSegments = 90): number => {
  const clampedWidth = Math.max(minWidth, Math.min(maxWidth, screenWidth));

  const scale = (clampedWidth - minWidth) / (maxWidth - minWidth);
  return Math.round(minSegments + scale * (maxSegments - minSegments));
};

const MorphEffect: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mountRef.current) return;

    mountRef.current.innerHTML = '';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 10000);
    camera.position.z = 90;

    const renderer = new THREE.WebGLRenderer({ alpha: true, powerPreference: 'high-performance', antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const screenWidth = getScreenSizeInInches();

    const segments = getDynamicSegments(screenWidth);


    console.log('segments', segments);
    const geometry = new THREE.PlaneGeometry(100, 100, segments, segments);

    const uniforms = {
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      time: { value: 0.0 },
      radius: { value: 0.135 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      wireframe: true,
      depthTest: true,
      depthWrite: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const animate = () => {
      requestAnimationFrame(animate);
      uniforms.time.value += 0.035;
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

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default MorphEffect;