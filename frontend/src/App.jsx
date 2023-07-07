import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="px-4">
        <Outlet />
      </div>
    </>
  )
}

export default App
