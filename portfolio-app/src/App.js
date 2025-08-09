import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./pages/MainPage"
import DevicesPage from "./pages/DevicesPage"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/devices' element={<DevicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;