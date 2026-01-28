import { HashRouter, Routes, Route } from "react-router";
import MainPage from "./pages/MainPage"
import DevicesPage from "./pages/DevicesPage"
import WhoopsPage from "./pages/WhoopsPage"
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/devices' element={<DevicesPage />} />
        <Route path='/unfound' element={<WhoopsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;