import { useState } from 'react';
import './App.css';

// const arrayExample = ['Diego', 'Malu', 'Alany', 'Vinicius', 'Primo'];
// console.log(arrayExample);

// const [,menina1,menina2,,] = arrayExample;
// console.log(menina1);
// console.log(menina2);
// const [one,two,three,four,five] = arrayExample;
// console.log(four);

function App() {
   const [flamengoScore, setFlamengoScore] = useState(0);
   const [botafogoScore, setBotafogoScore] = useState('teste');

   function handleIncreaseFlamengo() {
      setFlamengoScore(flamengoScore + 1);
   }
   function handleIncreaseBotafogo() {
      setBotafogoScore(botafogoScore + 1);
   }
  return (
    <div className="App">
      <header className="App-header">
         <div style={{ display: 'flex' }}>
            <div>
               <button
                  onClick={handleIncreaseFlamengo}
               >
                  Flamengo
               </button>
               <p>{flamengoScore}</p>            
            </div>
            <div>
               <button
                  onClick={handleIncreaseBotafogo}
               >
                  Botafogo
               </button>
               <p>{botafogoScore}</p>            
            </div>
         </div>
      </header>
    </div>
  );
}

export default App;
