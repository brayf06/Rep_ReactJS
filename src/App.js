import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Homepage"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
     <BrowserRouter>
     <NavBar/>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h4>Error 404: Page not found</h4>} />
       </Routes>
     </BrowserRouter>
   // <ItemDetailContainer/>
  );
}

export default App;
