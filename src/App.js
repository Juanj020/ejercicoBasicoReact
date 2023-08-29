import Gaseosa from './Componentes/Gaseosa';
import Productos from './productData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Deliciosas gaseosas, Cuantas vas a llevar?</h1>
        <Gaseosa items={Productos}></Gaseosa>
      </header>
    </div>
  );
}

export default App;
