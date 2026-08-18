function PaginaDados() {
    return (
        <div className="pagdados">
            <div className="top">
                <img src="src/assets/gatinhamarie_logo.png" alt="MariePetz" />
            </div>

            <div className="container-forms">
                <div className="nome">
                    <label htmlFor="">Nome do pet</label>
                    <input type="text" />
                </div>

                <div className="peso">
                    <label htmlFor="">Peso do animal</label>
                    <br />
                    <input type="range" name="Peso" id="pesoanimal" /><br />
                </div>

                <div className="fase da vida">
                    <label htmlFor="">Fase da vida</label><br />
                    <select name="fase" id="">
                        <option value="filhote">Filhote (até 1 ano)</option>
                        <option value="adulto">Adulto (1 a 7 anos)</option>
                        <option value="idoso">Idoso (7+ anos)</option>
                    </select><br />
                </div>

                <div className="nivelatv">
                    <label htmlFor="">Nível de atividade</label>
                    <br />
                    <input type="radio" name="Baixo" id="" />
                    <input type="radio" name="Moderado" id="" />
                    <input type="radio" name="Alto" id="" /><br />
                </div>

                <div className="preco">
                    <label htmlFor="">Preço da ração por kg</label><br />
                    <input type="text" placeholder="R$/kg"/>
                </div>
            </div>
        </div>

    )
}

export default PaginaDados