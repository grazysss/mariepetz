import { useState } from "react";

function PaginaDados({ setTela }) {
    const [nome, setNome] = useState('')
    const [peso, setPeso] = useState(0)
    const [fase, setFase] = useState('')
    const [atividade, setAtividade] = useState('')
    const [preco, setPreco] = useState('')
    const [energia, setEnergia] = useState('')

    const pesos = [0, 5, 10, 15, 20];

    function validarDados() {
        if (nome.trim() === '') {
            alert('Digite o nome do pet.')
            return false
        } else if (peso <= 0) {
            alert('Informe um peso válido.')
            return false
        } else if (fase === '') {
            alert('Selecione a fase da vida.')
            return false
        } else if (atividade === '') {
            alert('Selecione um modo de atividade')
            return false
        } else if (preco === '' || isNaN(preco) || preco <= 0) {
            alert('Insira o preço da ração por KG')
            return false
        } else if (energia === '' || isNaN(energiaNumero) || energiaNumero <= 0) {
            alert('Insira as kcal/kg da ração')
            return false
        }

        return true
    }

    function calcular() {
        const dadosValidos = validarDados();
        if (!dadosValidos) {
            return;
        }

        // Altera a tela no componente pai
        setTela('resultados');
        }

    return (
        <div className="pagdados">
            <div className="top">
                <img src="src/assets/gatinhamarie_logo.png" alt="MariePetz" />
            </div>

            <div className="container-forms">
                <div className="nome">
                    <label htmlFor="">Nome do pet</label>
                    <input 
                        type="text" name="nome" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}    
                    />
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
                    <select name="fase"
                        value={fase}
                        onChange={(e) => setFase(e.target.value)}>
                        <option value="">Selecione uma fase</option>
                        <option value="filhote">Filhote (até 1 ano)</option>
                        <option value="adulto">Adulto (1 a 7 anos)</option>
                        <option value="idoso">Idoso (7+ anos)</option>
                    </select>
                </div>

                <div className="nivelatv">
                    <label htmlFor="">Nível de atividade</label>
                    <div className="options">
                        <div className="baixo">
                            <input type="radio" name="atv" value="baixo" 
                            onChange={(e) => setAtividade(e.target.value)} />
                            <label htmlFor="">Baixo</label>
                        </div>
                        
                        <div className="moderado">
                            <input type="radio" name="atv" value="moderado" 
                            onChange={(e) => setAtividade(e.target.value)} />
                            <label htmlFor="">Moderado</label>
                        </div>
                        <div className="alto">
                            <input type="radio" name="atv" value="alto" 
                            onChange={(e) => setAtividade(e.target.value)} />
                            <label htmlFor="">Alto</label>
                        </div>
                    </div>
                </div>

                <div className="preco">
                    <label htmlFor="">Preço da ração por kg</label>
                    <input type="number" placeholder="R$/kg" value={preco} 
                    onChange={(e) => setPreco(e.target.value)}/>
                </div>

                <div className="energia">
                    <label htmlFor="">Energia da ração</label>
                    <input type="number" placeholder="kcal/kg" 
                    value={energia}
                    onChange={(e) => setEnergia(e.target.value)}/>
                </div>
            </div>
            <br />
            <div className="init" onClick={calcular}>
                <h1>CALCULE</h1>
            </div>
        </div>
    )
}

export default PaginaDados