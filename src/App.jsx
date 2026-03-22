import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Haldi from './pages/Haldi';
import Mehndi from './pages/Mehndi';
import Sangeet from './pages/Sangeet';
import Wedding from './pages/Wedding';
import Reception from './pages/Reception';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/haldi" element={<Haldi />} />
        <Route path="/mehndi" element={<Mehndi />} />
        <Route path="/sangeet" element={<Sangeet />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/reception" element={<Reception />} />
      </Routes>
    </>
  );
}