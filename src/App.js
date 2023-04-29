import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer texto="Bienvenido al proyecto ReactJS"/>
    </>
  );
}

export default App;
