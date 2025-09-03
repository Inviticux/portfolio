import { HashRouter, Routes, Route } from "react-router";
import MainPage from "./pages/MainPage"
import DevicesPage from "./pages/DevicesPage"
import './App.css';

function App() {
  return (
    <MainPage />
    // <HashRouter>
    //   <Routes>
    //     <Route path='/' element={<MainPage />} />
    //     <Route path='/devices' element={<DevicesPage />} />
    //   </Routes>
    // </HashRouter>
  );
}

export default App;