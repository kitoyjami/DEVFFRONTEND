import '../styles/App.css'
import SearchBar from '../components/SearchBar'
import { Outlet } from 'react-router-dom'

function App () {
  return (
    <>
      <SearchBar />
      <div className='App container py-5'>
        <Outlet />
      </div>
    </>
  )
}

export default App
