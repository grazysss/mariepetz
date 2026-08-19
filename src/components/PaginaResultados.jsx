function PaginaResultados({ dados }) {
    // valores de segurança, caso a página seja aberta antes do cálculo terminar
    const {
        nomePet = 'Nome do pet',
        consumoMensal = '0',
        custoMensal = '0,00',
        custoAnual = '0,00',
        sacosPorAno = '0',
    } = dados || {}

    return (
        <div className="resultados">
            <div className="top">
                <img src="src/assets/gatinhamarie_logo.png" alt="MariePetz" />
            </div>

            <div className="container-resultados">
                <h2 className="titulo-pet">{nomePet}</h2>

                <div className="grid-resultados">
                    <div className="card-resultado">
                        <span className="label-resultado">Consumo mensal</span>
                        <span className="valor-resultado">{consumoMensal} Kg</span>
                    </div>

                    <div className="card-resultado">
                        <span className="label-resultado">Custo mensal</span>
                        <span className="valor-resultado">R$ {custoMensal}</span>
                    </div>

                    <div className="card-resultado">
                        <span className="label-resultado">Custo anual</span>
                        <span className="valor-resultado">R$ {custoAnual}</span>
                    </div>

                    <div className="card-resultado">
                        <span className="label-resultado">Sacos por ano</span>
                        <span className="valor-resultado">{sacosPorAno} sacos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaResultados
