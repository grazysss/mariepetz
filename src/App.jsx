import { useState } from 'react'
import PaginaInicial from './components/PaginaInicial'
import PaginaDados from './components/PaginaDados'
import PaginaResultados from './components/PaginaResultados'
import './App.css'

function App() {
  const [tela, setTela] = useState('pagina-inicial')
  const [dadosPet, setDadosPet] = useState(null)

  return (
    <div className="App">
      

      {tela === 'pagina-inicial' && (<PaginaInicial 
        setTela={setTela} />
      )}
      {tela === 'dados' && <PaginaDados 
        setTela={setTela}
        setDadosPet={setDadosPet} 
        />}
      {tela === 'resultados' && (<PaginaResultados 
        dadosPet={dadosPet} 
        />)}
    </div>
  )
}

export default App

// #FFF4F4
// #F9A5B7