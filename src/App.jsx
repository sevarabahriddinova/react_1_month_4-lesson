import { useState } from 'react'
import './App.css'
import Hero from './routes/hero/Hero'
import Banner from './routes/banner/Banner'
import Arrivals from './routes/arrivals/Arrivals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Banner/>
      <Arrivals/>
    </>
  )
}

export default App
