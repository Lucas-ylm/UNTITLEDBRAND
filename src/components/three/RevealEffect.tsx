"use client";

import React, { useEffect, useRef } from 'react';
import Canvas from '@/lib/canvas';
import Scroll from '@/lib/scroll';

const RevealEffect: React.FC = () => {
  const canvasRef = useRef<Canvas | null>(null);
  const scrollRef = useRef<Scroll | null>(null);

  useEffect(() => {
    scrollRef.current = new Scroll();
    canvasRef.current = new Canvas(scrollRef.current);

    const render = () => {
      if (canvasRef.current && scrollRef.current) {
        const s = scrollRef.current.getScroll();
        canvasRef.current.render(s);
        requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      canvasRef.current = null;
      scrollRef.current = null;
    };
  }, []);

  return <canvas id="webgl" />;
};

export default RevealEffect;