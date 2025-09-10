
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './src/assets/compontents/ChildA';

// step1:create Context
// const UserContext = createContext();
//step2: Wrap all the Child inside a provider
//step3: pass value
//step4: consumer k andar jaake consume karlo

const ThemeContext = createContext();


function App() {
  const [user, setUser] = useState({name:"Love"});
  const [theme, setTheme] = useState("light");

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{theme,setTheme}}>

      <div id='container' style={{backgroundColor:theme==='light'?"beign":"black"}}>
          <ChildA/>
      </div>
    </ThemeContext.Provider>

    </UserContext.Provider>


  //  <>
  //  <UserContext.Provider value={user}> 
  //  <ChildA />
  //  </UserContext.Provider>

  //  </>
  )
}

export default App
 export {UserContext}
export {ThemeContext}
