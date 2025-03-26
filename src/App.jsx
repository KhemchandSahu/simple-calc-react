import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calc from './components/calc.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calc/>
    </>
  )
}

export default App
