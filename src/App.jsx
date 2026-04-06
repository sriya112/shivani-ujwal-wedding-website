import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Haldi from './pages/Haldi';
import Sangeet from './pages/Sangeet';
import Wedding from './pages/Wedding';
import Accommodations from './pages/Accommodations';
import Registry from './pages/Registry';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sangeet" element={<Sangeet />} />
        <Route path="/haldi" element={<Haldi />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/registry" element={<Registry />} />
      </Routes>
    </>
  );
}