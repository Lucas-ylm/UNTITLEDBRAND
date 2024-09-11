import React from 'react';
import { Link } from 'react-router-dom';
import transition from '../transition';
import CanvasComponent from './CanvasComponent';
import EffectComponent from './GridEffectComponent';
import P5Wrapper from './P5Wrapper';

const Home: React.FC = () => {
  return (
    <div className="container">
      {/* <P5Wrapper /> */}
      <EffectComponent />
      <CanvasComponent />
      <div className="grid-image">
        <div>
          <Link to="/image/product1">
            <img src="/images/product1.jpg" alt="Image 1" />
          </Link>
        </div>
      </div>
      <div className="grid-image">
        <div></div>
        <div>
          <Link to="/image/product2">
            <img src="/images/product2.jpg" alt="Image 2" />
          </Link>
        </div>
        <div>
          <Link to="/image/product3">
            <img src="/images/product3.jpg" alt="Image 3" />
          </Link>
        </div>
      </div>
      <div className="grid-image">
        <div></div>
        <div>
          <Link to="/image/product4">
            <img src="/images/product4.jpg" alt="Image 4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default transition(Home);