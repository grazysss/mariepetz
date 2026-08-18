function PaginaInicial({ setTela }) {
    return (
        <div className="logo">
            <img src="src/assets/gatinhamarie_logo.png" alt="MariePetz" />
            <div className='init' onClick={() => setTela('dados')}>
                <h1>CALCULE</h1>
            </div>
        </div>
    )
}

export default PaginaInicial