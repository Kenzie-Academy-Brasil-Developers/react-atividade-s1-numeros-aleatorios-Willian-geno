import './App.css';
import "./styles.css"
import {useState} from 'react';

function App() {
  const [Number, serNumber] = useState(Math.round(Math.random()*100))

  function randomNumber (serNumber) {
    serNumber(Math.round(Math.random()*100))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className = "number" > 
        {Number}
        </div>
      <button onClick={() => randomNumber(serNumber)}>Numero aleatorio</button>
      </header>
    </div>
  );
}

export default App;
