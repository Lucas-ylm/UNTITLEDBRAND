import './styles/App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import ImagePage from './components/ImagePage.tsx';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='/image/:imageId' element={<ImagePage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;