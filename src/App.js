import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Herosection from './Component/Herosection';
import Navbar from './Component/Navbar';
import Falcon9 from './Pages/Falcon9'
import Falconheavy from './Pages/Falconheavy';
import Dragon from '../src/Pages/Dragon';
import Starship from '../src/Pages/Starship';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Herosection />} />
    <Route path="/falcon9" element={<Falcon9 />} />
    <Route path="/falconheavy" element={<Falconheavy />} />
    <Route path="/dragon" element={<Dragon />} />
    <Route path="/starship" element={<Starship />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
