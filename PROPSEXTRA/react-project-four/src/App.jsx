import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/button';



function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  

  return (
    <div>
      <Button handleClick={handleClick} 
      text="Click me">
        <h1>{count}</h1>
        </Button>
      {/* <Card name="rashi vish">
        <h1>Best WEB DEV courese</h1>
        <p>Trying to be consistent in this</p>
        <p>will complete the course</p>
      </Card>
      <Card children="mai ek young children hu">
        Hello jee, kaise ho saare
      </Card> */}
    </div>

  
  )
}

export default App
