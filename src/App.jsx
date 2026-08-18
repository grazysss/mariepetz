import { useState } from 'react'
import PaginaInicial from './components/PaginaInicial'
import PaginaDados from './components/PaginaDados'
import './App.css'

function App() {
  const [tela, setTela] = useState('pagina-inicial')

  return (
    <div className="App">
      {tela === 'pagina-inicial' && (
        <PaginaInicial setTela={setTela} />
      )}
      {tela === 'dados' && <PaginaDados />}

    </div>
  )
}

export default App

// #FFF4F4
// #F9A5B7