import { useState } from 'react'
import './App.css'
import RegistrarOrganizacion from './Componentes/RegistrarOrganizacion/RegistrarOrganizacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegistrarOrganizacion />
    </>
  )
}

export default App
