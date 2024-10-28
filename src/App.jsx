
import './App.css'
import LineChart from './conponents/LineChart/LineChart'
import ManChart from './conponents/ManChart/ManChart'
import Navbar from './conponents/Navbar/Navbar'
import Phones from './conponents/Phones/Phones'
import PriceOptions from './conponents/PriceOptions/PriceOptions'

// import Daisynav from './conponents/DaisyNav/Daisynav'

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <Daisynav></Daisynav> */}
      <h1 className='text-xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <ManChart></ManChart>
      <Phones></Phones>
    </>
  )
}

export default App
