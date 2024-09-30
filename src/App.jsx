import './App.css'
import Add from './assets/Add'
import Division from './assets/Division'
import Sup from './assets/Sup'
import Multiplication from './Multiplication'

function App() {

  return (
    <>

    <div class="w-full  h-screen flex justify-evenly items-center  bg-gray-500">
    <Add/>
    <Sup/>
    <Multiplication/>
    <Division/>
    </div>
   
    </>
  )
}

export default App
