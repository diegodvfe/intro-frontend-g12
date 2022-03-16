import './App.css';
// 1) Importar el componente
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 2) Mandar a llamar al componente */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
