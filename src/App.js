import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Carro from "./views/Carrito";
import NotFound from "./views/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Pizza from "./views/PizzaView";

function App() {

  const [menu, setMenu] = useState([]);
  const [total, setTotal] = useState(0);
  const [seleccionadas, setSeleccionadas] = useState([]);


  
  async function fetchlist() {
        
        const response = await fetch(`${process.env.PUBLIC_URL}/lista.json`);
        const data = await response.json();
        setMenu(data);
    }

  useEffect(() => {
    fetchlist();
  }, []);


 
  const globalState = { menu, setMenu, total, setTotal,seleccionadas, setSeleccionadas};
  console.log("Seleccionadas: ", seleccionadas);
  return (
    <div>
      <Context.Provider value={globalState}>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito/" element={<Carro />} />
            <Route path="/pizza/:id/" element={<Pizza/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
