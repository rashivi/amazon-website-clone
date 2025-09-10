
import { useState } from 'react'
import './App.css'
import LogoutBtn from './assets/components/LogoutBtn';
import LoginBtn from './assets/components/LoginBtn';

function App() {
  const[isLoggedIn, setloggedIn] = useState(false);


  if(!isLoggedIn){
    return(
      <LoginBtn />
    )
  }

  return(
    <div>
      <h1>Welcome Everyone to Codehelp Web dev course</h1>
      <div>
       {isLoggedIn && <LogoutBtn />}

    </div>
    </div>
  )

  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )
  
  // if(isLoggedIn){
  //   return(
  //     <LogoutBtn/>
  //   )

  // }else{
  //   return(
  //      <LoginBtn/>
  //   )
    

  // }
}

export default App
