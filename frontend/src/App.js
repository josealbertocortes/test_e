import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import { Estadisticas } from "./components/Estadisticas";
import { Home } from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
const App =()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estadisticas" element={<Estadisticas />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
