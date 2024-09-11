import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import sketch from './p5Sketch';

const P5Wrapper: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvasContainer = canvasRef.current;
    if (canvasContainer) {
      // Create a new p5 instance
      const p5Instance = new p5(sketch, canvasContainer);

      // Cleanup p5 instance on component unmount
      return () => {
        p5Instance.remove(); // Removes the canvas and stops the sketch
      };
    }
  }, []);

  return <div ref={canvasRef} />;
};

export default P5Wrapper;
