'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import Scroll from '@/lib/scroll';

const AnimateScroll: FC = () => {
  const scrollRef = useRef<Scroll | null>(null);

  useEffect(() => {
    scrollRef.current = new Scroll();

    const render = () => {
      if (scrollRef.current) {
        requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      scrollRef.current = null;
    };
  }, []);

  return null;
};

export default AnimateScroll;
