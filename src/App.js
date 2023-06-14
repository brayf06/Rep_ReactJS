import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Homepage"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { createContext, useState } from 'react';
import { CartContextProvider } from './context/cartContext';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destino/:id" element={<ItemDetailContainer />} />
          <Route path="/continente/:idCategoria" element={<HomePage />} />
          <Route path="*" element={<h4>Error 404: Page not found</h4>} />
       </Routes>
     </BrowserRouter>
     </CartContextProvider>
  );
}

export default App;
