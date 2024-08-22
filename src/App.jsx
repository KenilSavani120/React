import { useState } from 'react'

import './App.css'
import HelloWorldClass from '../components/class'
import HelloWorldFunction from '../components/function'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorldClass/>
      <HelloWorldFunction/> 
      <h1>Hello from Kenil Savani</h1>
    </>
  )
}

export default App
