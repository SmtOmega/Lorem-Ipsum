
import { useState } from 'react';
import './App.css';
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [texts, setTexts] = useState([])
  console.log(data.length)
  const handleSubmit = (e) => {
    e.preventDefault()

    let amount = parseInt(count)
    if(count <= 0){
      amount = 1
    }
    if(count > 8){
      amount = 8
    }
    setTexts(data.slice(0, amount))
    
  }
  return (
    <div className="App">
      <h3>Tired of Boring Lorem Ipsum</h3>
      <form>
        <label htmlFor="amount">
          Paragraph:
        </label>
        <input type="number" name="amount" id="amount" value={count} 
          onChange={(e)=>{ setCount(e.target.value)}}
        />
        <button onClick={handleSubmit}>generate</button>
      </form>
      <div className="paragraph">
        {texts.map((text, index) => {
          return <p key={index}>{text}</p>
        })}
      </div>
    </div>
  );
}

export default App;
