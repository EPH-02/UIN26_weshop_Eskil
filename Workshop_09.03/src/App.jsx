import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Layout from './components/Layout'


function App() {
  const apiUrl = "https://rickandmortyapi.com/api/character"
  return (
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/characters/:id' element={<Character />} />
        </Routes>
    </Layout>
  )
}

export default App



