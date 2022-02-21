import logo from './logo.svg';
import './App.css';
import Swipper from './Swipper';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FadeEffect from './components/FadeEffect';
import CubeEffect from './components/CubeEffect';
import CoverflowEffect from './components/CoverflowEffect';
import FlipEffect from './components/FlipEffect';
import CardsEffect from './components/CardsEffect';
import CreativeEffect from './components/CreativeEffect';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fade" element={<FadeEffect />} />
      <Route path="/cube" element={<CubeEffect />} />
      <Route path="/coverflow" element={<CoverflowEffect />} />
      <Route path="/flip" element={<FlipEffect />} />
      <Route path="/cards" element={<CardsEffect />} />
      <Route path="/creative" element={<CreativeEffect />} />
      <Route path='/swiper' element={<Swipper />} />
    </Routes>
  );
}

export default App;
