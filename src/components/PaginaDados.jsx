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
                    <input 
                        type="range" name="Peso" id="pesoanimal" 
                        min="0" max="20"
                        step="1"
                        list="tickmarks"/>

                    <datalist id="tickmarks">
                        <option value="0" label="0 kg" />
                        <option value="5" label="5 kg" />
                        <option value="10" label="10 kg" />
                        <option value="15" label="15 kg" />
                        <option value="20" label="20 kg" />
                    </datalist>
                </div>

                <div className="fasevida">
                    <label htmlFor="">Fase da vida</label><br />
                    <select name="fase" id="">
                        <option value="filhote">Filhote (até 1 ano)</option>
                        <option value="adulto">Adulto (1 a 7 anos)</option>
                        <option value="idoso">Idoso (7+ anos)</option>
                    </select>
                </div>

                <div className="nivelatv">
                    <label htmlFor="">Nível de atividade</label>
                    <div className="options">
                        <input type="radio" name="Baixo" id="" />
                        <label htmlFor="">Baixo</label>
                        <input type="radio" name="Moderado" id="" />
                        <label htmlFor="">Moderado</label>
                        <input type="radio" name="Alto" id="" />
                        <label htmlFor="">Alto</label>
                    </div>
                </div>

                <div className="preco">
                    <label htmlFor="">Preço da ração por kg</label>
                    <input type="text" placeholder="R$/kg"/>
                </div>
            </div>
        </div>

    )
}

export default PaginaDados