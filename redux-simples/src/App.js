import logo from './logo.svg';
import './App.css';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux(Simples)</h1>
      <div className='linha'>
        <Intervalo title="Card 1" purple>
          X
        </Intervalo>
        
      </div>
      <div className='linha'>
        <Media />
        <Soma />
        <Sorteio />
      </div>
      
    </div>
  );
}

export default App;
