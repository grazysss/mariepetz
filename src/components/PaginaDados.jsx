import { useState } from "react";

function PaginaDados() {
    const [peso, setPeso] = useState(0)

    const pesos = [0, 5, 10, 15, 20];

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
                        value={peso}
                        onChange={(e) => setPeso(Number(e.target.value))}/>

                    <div className="range-labels">
                        {pesos.map((valor) => (
                            <span className={peso === valor ? "selecionado" : ""}>
                                {valor} kg
                            </span>
                        ))}
                    </div>
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
                        <div className="baixo">
                            <input type="radio" name="Baixo" id="" />
                            <label htmlFor="">Baixo</label>
                        </div>
                        
                        <div className="moderado">
                            <input type="radio" name="Moderado" id="" />
                            <label htmlFor="">Moderado</label>
                        </div>
                        <div className="alto">
                            <input type="radio" name="Alto" id="" />
                            <label htmlFor="">Alto</label>
                        </div>
                    </div>
                </div>

                <div className="preco">
                    <label htmlFor="">Preço da ração por kg</label>
                    <input type="text" placeholder="R$/kg"/>
                </div>
            </div>
            <br />
            <div className="init">
                <h1>CALCULE</h1>
            </div>
        </div>

    )
}

export default PaginaDados