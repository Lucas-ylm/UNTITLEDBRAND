import React from 'react';
import { useParams } from 'react-router-dom';
import CanvasComponent from './CanvasComponent'; // Make sure to import this component
import transition from '../transition';

const images = {
  'product1': '/images/product1.jpg',
  'product2': '/images/product2.jpg',
  'product3': '/images/product3.jpg',
  'product4': '/images/product4.jpg',
};

const ImagePage: React.FC = () => {
    const { imageId } = useParams<{ imageId: string }>();
  
    const imageSrc = images[imageId as keyof typeof images];
  
    if (!imageSrc) {
      return <div>No Image Found.</div>;
    }
  
    return (
      <div className='container'>
        <CanvasComponent />
        <div className='grid'>
          <img className='col-5' src={imageSrc} alt={`Image ${imageId}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
      </div>
    );
};

export default transition(ImagePage);
