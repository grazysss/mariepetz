// calculos.js
// Funções puras de cálculo nutricional/financeiro da ração.
// Cada função recebe um valor e devolve outro — sem mexer em tela ou estado.

// 4. MER = RER * fator da fase * fator da atividade
export function calcularMER(rer, fatorFase, fatorAtividade) {
  return rer * fatorFase * fatorAtividade
}

// 5. Ração diária (g/dia) = (MER / energia da ração em kcal/kg) * 1000
// Dividir MER pela energia dá kg/dia; multiplicar por 1000 converte pra gramas.
export function calcularRacaoDiaria(mer, energiaRacao) {
  return (mer / energiaRacao) * 1000
}

// 6. Consumo mensal (kg/mês) = ração diária (g) * 30 dias / 1000
export function calcularConsumoMensal(racaoDiariaG) {
  return (racaoDiariaG * 30) / 1000
}

// 7. Custo mensal (R$/mês) = consumo mensal (kg) * preço por kg
export function calcularCustoMensal(consumoMensalKg, precoRacao) {
  return consumoMensalKg * precoRacao
}

// 8. Custo anual (R$/ano) = custo mensal * 12
export function calcularCustoAnual(custoMensal) {
  return custoMensal * 12
}

// 9. Sacos por ano = kg consumidos no ano / tamanho do saco (kg)
export function calcularSacosAno(consumoAnualKg, tamanhoSacoKg) {
  return consumoAnualKg / tamanhoSacoKg
}

