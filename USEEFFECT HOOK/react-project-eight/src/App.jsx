
import './App.css'
import { useEffect, useState } from 'react'
import LoggerComponents from './assets/components/LoggerComponents'
import TimerComponents from './assets/components/TimerComponents'
import DataFetcher from './assets/components/DataFetcher'
import ResizeComponents from './assets/components/ResizeComponents'
import MultiEffectComponents from './assets/components/MultiEffectComponents'

function App(){
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  //first -> side -effect function
  //second -> clean-up function
  //third -> comma separated dep list

  //variation:1
  //runs on every render
  //useEffect(() => {
    // alert("I will run on each render")
    //})

  //   //variation: 2
  //   //that runs on only first render
  // useEffect(() => {
  //   alert("I will run on only 1st render");

  // }, [])


  // variation: 3
      //  useEffect(() =>{
      //   alert("I will run every time when count is update");
      //  }, [count])


      //variation: 4
      // //multiple dependencies
      // useEffect(() => {
      //  alert("I will run every time when count/total is update");
      // },[count, total])

      

      //variation: 5
      // //iss baar let's add a cleanup function 
      // useEffect(() => {
      //  alert("Count is updated");

      //   return () => {
      //     alert("Count is uncounted form UI");
      //   }
      // }, [count])


  // function handleClick(){
  //   setCount(count+1);

  // }
  // function handClickTotal(){
  //   setTotal(total+1);
  // }
  return (
    <div>
      {/* <LoggerComponents/> */}
      {/* <TimerComponents/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponents/> */}
       <MultiEffectComponents/>

      {/* <button onClick={handleClick}>
        update Count
      </button>
      Count is: {count}

      <br>
      <button onClick={handleClick}>
        update Count
      </button>
      </br>
      Total  is: {total} */}
    </div>
  )
}

export default App
