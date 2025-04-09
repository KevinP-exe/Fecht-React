import {BrowserRouter as Router, Routes, Route} 
from 'react-router'
import RickandMorty from './pages/RickandMorty'
import DragonBall from './pages/DragonBall'
import Nav from './components/Nav'

function App() {
 

  return (
    <>
   <Router>
|    <Nav />
      <Routes>
        <Route path="/" element={<DragonBall />} />
        <Route path="/RickandMorty" element={<RickandMorty />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
