import Home from './Pages/Home'
import Info from './Pages/Info'
import Spelers from './Pages/Spelers/Spelers'
import Spellen from './Pages/Spel/Spellen'
import Top from './Top'
import { Route, Routes } from 'react-router-dom'
import './stylesheets/App.css'
import Datumprikker from './Pages/Tickets/Datumprikker'
import Tickets from './Pages/Tickets/Tickets'
import Submitted from './Pages/Tickets/Submitted'
import { createContext, useState } from 'react'
import Reserveringen from './Admin/Reserveringen'

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.qr-code-generator.com/
export const AdminContext = createContext()
function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <>
    <h1>App is loaded</h1>
      <AdminContext.Provider value={{
        isAdmin,
        setIsAdmin
      }}>
        <div className="Everything">
          <Top />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/spelers" element={<Spelers />} />
            <Route path="/spellen" element={<Spellen />} />
            <Route path="/date" element={<Datumprikker />} />
            <Route path="/tickets" element={<Tickets />} />

            <Route path="/tickets/:dateId" element={<Tickets />} />
            <Route path="/submitted" element={<Submitted />} />
            <Route path="/reserveringen/:id" element={<Reserveringen />} />

            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>

        </div>
      </AdminContext.Provider>
    </>
  )
}

export default App
