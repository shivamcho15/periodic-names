import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Names from './Names.jsx'
import Ptable from './Ptable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 id="header">Periodic names</h1>
    <Names />

    <Ptable />


  </StrictMode>,
)
