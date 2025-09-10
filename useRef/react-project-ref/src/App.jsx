import { useState, useEffect, useRef } from 'react';
import './App.css'

function App() {
//   const [count, setCount] = useState(0);
//   let val = useRef(0);

//   let btnRef = useRef();

//   function handleIncrement(){
//     val.current = val.current + 1;
//     val = val + 1;
//     console.log("value of val: ", val.current);
//     setCount[count +1];
//   }
// //it runs on every render
//   useEffect(() => {
//     console.log("main ferse render hogya hu")
    
//   })
//    function changeColor(){
//     btnRef.current.style.backgroundColor = "red";

//    }

const [time, setTime] = useState(0);

let timeRef = useRef(null);

function startTimer(){
 timeRef.current = setInterval(() => {
    setTime(time => time+1)
  }, 1000);
}
function stopTimer(){
  clearInterval(timeRef.current);
  timeRef.current = null;

}
function resetTimer(){
  stopTimer();
  setTime(0);
}

  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br/> <br/>

      <button onClick={stopTimer}>
        Stop
      </button>
      <br/><br/>

      <button onClick={resetTimer}>
        Reset
      </button>


{/* <div>
/*     
{/* 
    <button 
  //   ref={btnRef}
  //    onClick={handleIncrement}>
  //     Increment
  //   </button>
  //   <br/>
  //   <br/>
  //   <button>
  //     Change Color of 1st Button
  //   </button>
  //   <br/>058/

  //   <div>
  //      Count: {count}
  //   </div>
 
<div/>  */}



</div>
  )
  }


export default App
