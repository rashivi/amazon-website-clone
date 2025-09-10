import React, {useState, useEffect} from 'react';

function MultiEffectComponents(){
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log('Count changed:', count);
    }, [count]);
    // side-effect logic will run  only count is changed
    useEffect(() => {
        const intervalid = setInterval(() => {
            console.log("SetInterval Started");
            setSeconds(prevSeconds => prevSeconds+1);
        }, 1000);

        return () => clearInterval(intervalid);
    }, []);
    // it will run only on first render

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>
            Increment Count
        </button>
        <h2>Seconds: {seconds}</h2>
    </div>
  );
}

export default MultiEffectComponents