import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

interface AnimateHighlightProps {
  children: React.ReactNode;
}

const AnimateHighlight: React.FC<AnimateHighlightProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const lines = container.querySelectorAll('.highlight-line');

      lines.forEach((line) => {
        gsap.to(line, {
          backgroundSize: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div ref={containerRef} style={{ whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
      {typeof children === 'string'
        ? children.split('\n').map((line, index) => (
            <div key={index} className="highlight-line">
              {line}
            </div>
          ))
        : React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              const textContent = child.props.children?.toString() ?? '';

              return textContent.split('\n').map((line: string, subIndex: number): JSX.Element => (
                <div key={`${index}-${subIndex}`} className="highlight-line">
                  {line}
                </div>
              ));
            }
            return null;
          })}
    </div>
  );
};

export default AnimateHighlight;
