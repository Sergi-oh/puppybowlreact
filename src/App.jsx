import './App.css'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'

function App() {


  return (
      <div>
        <h1>Puppy Bowl</h1>
        <Nav/>
        <Routes>
          <Route path = '/' element = {<Homepage/>} />
          <Route path = '/players' element = {<AllPlayers/>} />
          <Route path = '/players/:id' element = {<SinglePlayer/>}/>
        </Routes>
      </div>
      
  )
}

export default App
