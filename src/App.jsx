import axios from 'axios'
import { useQuery } from 'react-query'
import './App.css'
import SearchForm from './SearchForm'
import Gallery from './Gallery'
function App() {
  return (
    <>
      <SearchForm />
      <Gallery />
    </>
  )
}

export default App
