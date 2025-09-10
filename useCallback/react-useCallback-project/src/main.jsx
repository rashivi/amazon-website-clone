import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpensiveComponent from './components/ExpensiveComponent';

createRoot(document.getElementById('root')).render(

    <App />
  
)
