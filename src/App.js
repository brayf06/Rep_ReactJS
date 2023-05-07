import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer texto="Bienvenido al proyecto ReactJS"/>
    </>
  );
}

export default App;
