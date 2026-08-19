import {
    calcularRER,
    calcularFatorFase,
    calcularFatorAtividade,
    calcularMER,
    calcularRacaoDiaria,
    calcularConsumoMensal,
    calcularCustoMensal,
    calcularCustoAnual,
    calcularSacosAno
} from './calculos.js'


// ========================================
// DADOS DE TESTE
// ========================================

const dadosPet = {
    nome: 'Marie',
    peso: 10,
    fase: 'adulto',
    atividade: 'moderado',
    preco: 20,
    energia: 3500
}


console.log('==============================')
console.log('       TESTE DO SISTEMA')
console.log('==============================')


// ========================================
// 1. RER
// ========================================

const rer = calcularRER(dadosPet.peso)

console.log('\n--- RER ---')
console.log('Peso:', dadosPet.peso, 'kg')
console.log('RER:', rer.toFixed(2), 'kcal/dia')


// ========================================
// 2. FATOR DA FASE
// ========================================

const fatorFase = calcularFatorFase(dadosPet.fase)

console.log('\n--- FATOR DA FASE ---')
console.log('Fase:', dadosPet.fase)
console.log('Fator:', fatorFase)


// ========================================
// 3. FATOR DA ATIVIDADE
// ========================================

const fatorAtividade = calcularFatorAtividade(
    dadosPet.atividade
)

console.log('\n--- FATOR DA ATIVIDADE ---')
console.log('Atividade:', dadosPet.atividade)
console.log('Fator:', fatorAtividade)


// ========================================
// 4. MER
// ========================================

const mer = calcularMER(
    rer,
    fatorFase,
    fatorAtividade
)

console.log('\n--- MER ---')
console.log('MER:', mer.toFixed(2), 'kcal/dia')


// ========================================
// 5. RAÇÃO DIÁRIA
// ========================================

const racaoDiaria = calcularRacaoDiaria(
    mer,
    dadosPet.energia
)

console.log('\n--- RAÇÃO DIÁRIA ---')
console.log('Energia da ração:', dadosPet.energia, 'kcal/kg')
console.log('Ração diária:', racaoDiaria.toFixed(2), 'g/dia')


// ========================================
// 6. CONSUMO MENSAL
// ========================================

const consumoMensal = calcularConsumoMensal(
    racaoDiaria
)

console.log('\n--- CONSUMO MENSAL ---')
console.log(
    'Consumo:',
    consumoMensal.toFixed(2),
    'kg/mês'
)


// ========================================
// 7. CUSTO MENSAL
// ========================================

const custoMensal = calcularCustoMensal(
    consumoMensal,
    dadosPet.preco
)

console.log('\n--- CUSTO MENSAL ---')
console.log(
    'Preço da ração:',
    dadosPet.preco,
    'R$/kg'
)

console.log(
    'Custo mensal:',
    custoMensal.toFixed(2),
    'R$/mês'
)


// ========================================
// 8. CUSTO ANUAL
// ========================================

const custoAnual = calcularCustoAnual(
    custoMensal
)

console.log('\n--- CUSTO ANUAL ---')
console.log(
    'Custo anual:',
    custoAnual.toFixed(2),
    'R$/ano'
)


// ========================================
// 9. SACOS POR ANO
// ========================================

// Vamos considerar um saco de 10 kg
const tamanhoSaco = 10

const consumoAnual = consumoMensal * 12

const sacosAno = calcularSacosAno(
    consumoAnual,
    tamanhoSaco
)

console.log('\n--- SACOS POR ANO ---')
console.log('Tamanho do saco:', tamanhoSaco, 'kg')
console.log(
    'Consumo anual:',
    consumoAnual.toFixed(2),
    'kg'
)
console.log(
    'Sacos por ano:',
    sacosAno.toFixed(2)
)


// ========================================
// RESUMO
// ========================================

console.log('\n==============================')
console.log('          RESUMO')
console.log('==============================')

console.log('Pet:', dadosPet.nome)
console.log('Peso:', dadosPet.peso, 'kg')
console.log('Fase:', dadosPet.fase)
console.log('Atividade:', dadosPet.atividade)

console.log('RER:', rer.toFixed(2), 'kcal/dia')
console.log('Fator fase:', fatorFase)
console.log('Fator atividade:', fatorAtividade)
console.log('MER:', mer.toFixed(2), 'kcal/dia')

console.log(
    'Ração diária:',
    racaoDiaria.toFixed(2),
    'g/dia'
)

console.log(
    'Consumo mensal:',
    consumoMensal.toFixed(2),
    'kg/mês'
)

console.log(
    'Custo mensal:',
    custoMensal.toFixed(2),
    'R$/mês'
)

console.log(
    'Custo anual:',
    custoAnual.toFixed(2),
    'R$/ano'
)

console.log(
    'Sacos por ano:',
    sacosAno.toFixed(2)
)