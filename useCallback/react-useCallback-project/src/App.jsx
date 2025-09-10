import { useCallback, useState } from 'react'
import './App.css'
import ChildComponents from './components/ChildComponents';
import ExpensiveComponent from './components/ExpensiveComponent';

// function App() {
//   const [count, setCount] = useState(0);

 
//   const handleClick =  useCallback(() => {
//     setCount(count+1);
//   }, [count]);


  return (
    <div>
      <ExpensiveComponent />
    </div>
    // <div>
    //   <div>
    //     Count: {count}
    //   </div>
    //   <br/>
    //   <div>
    //     <button onClick={handleClick}>Increment</button>
    //   </div>
    //   <br/> <br/>
    //   <div>
    //     <ChildComponents buttonName="Click me2"
    //     handleClick={handleClick}
        
    //     />
    //   </div>
    // </div>

  )


export default App
