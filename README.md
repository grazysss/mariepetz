# 🐾 MariePetz

**Calculadora de alimentação e custos para pets**

O **MariePetz** é uma aplicação web desenvolvida para auxiliar tutores de cães e gatos a estimarem suas necessidades energéticas e o consumo de ração, além de calcular os custos mensais e anuais relacionados à alimentação do animal.

O projeto foi desenvolvido com **React** e **Vite**, utilizando uma interface simples e intuitiva para que o usuário possa informar os dados do pet e receber os resultados dos cálculos de forma organizada.

> 🚧 Projeto acadêmico em desenvolvimento.

---

## ✨ Funcionalidades

* 🐱 Cadastro das informações básicas do pet
* ⚖️ Informar o peso do animal
* 🎂 Selecionar a fase de vida
* 🏃 Informar o nível de atividade
* 🍚 Informar o preço da ração
* 🔥 Informar a energia da ração em kcal/kg
* 🧮 Cálculo do **RER — Resting Energy Requirement**
* 📊 Cálculo da necessidade energética diária (**MER**)
* 🍽️ Estimativa da quantidade de ração necessária por dia
* 📦 Estimativa do consumo mensal de ração
* 💰 Cálculo do custo mensal
* 📅 Cálculo do custo anual
* 🛍️ Estimativa da quantidade de sacos de ração necessários por ano
* 📋 Exibição dos resultados em uma tela dedicada

---

## 🧮 Cálculos realizados

O sistema utiliza as informações fornecidas pelo usuário para realizar uma sequência de cálculos relacionados à alimentação do animal.

### 1. RER

O **RER (Resting Energy Requirement)** representa a necessidade energética de repouso do animal.

```text
RER = 70 × peso^0,75
```

O resultado é apresentado em **kcal/dia**.

### 2. Fator da fase de vida

A fase de vida do animal influencia sua necessidade energética.

O sistema considera fatores específicos para diferentes fases, como:

* Filhote
* Adulto
* Idoso

### 3. Fator de atividade

O nível de atividade do animal também influencia sua necessidade energética.

### 4. MER

O **MER (Maintenance Energy Requirement)** é calculado a partir do RER e dos fatores definidos pelo projeto.

```text
MER = RER × fator
```

### 5. Ração diária

A necessidade energética é convertida para a quantidade de ração necessária por dia, considerando a energia fornecida pela ração.

### 6. Consumo mensal

A partir do consumo diário, o sistema estima a quantidade de ração consumida durante um mês.

### 7. Custo mensal

O custo mensal é calculado considerando:

```text
Consumo mensal × preço por kg
```

### 8. Custo anual

O custo anual é obtido a partir do custo mensal:

```text
Custo anual = custo mensal × 12
```

### 9. Sacos por ano

O sistema também estima quantos sacos de ração serão necessários ao longo de um ano, considerando o tamanho do saco utilizado.

---

## 🖥️ Telas

### Página inicial

Apresenta o projeto e permite iniciar o cálculo.

### Página de dados

Nesta etapa, o usuário informa os dados necessários para os cálculos:

* Nome do pet
* Peso
* Fase da vida
* Nível de atividade
* Preço da ração
* Energia da ração

### Página de resultados

Após o processamento dos dados, são apresentados os principais resultados da alimentação do pet, incluindo consumo e custos estimados.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia      | Utilização                          |
| --------------- | ----------------------------------- |
| ⚛️ React        | Desenvolvimento da interface        |
| ⚡ Vite          | Ambiente de desenvolvimento e build |
| 🟨 JavaScript   | Lógica da aplicação                 |
| 🎨 CSS          | Estilização da interface            |
| 📦 npm          | Gerenciamento de dependências       |
| 🐙 Git/GitHub   | Versionamento do projeto            |
| 🚀 GitHub Pages | Publicação da aplicação             |

O projeto utiliza atualmente **React 19** e **Vite**, com scripts para desenvolvimento, build, lint e deploy.

---

## 📁 Estrutura do projeto

```text
mariepetz/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── PaginaInicial.jsx
│   │   ├── PaginaDados.jsx
│   │   └── PaginaResultados.jsx
│   ├── utils/
|   |   |---calculos.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

A organização atual separa os componentes das páginas e mantém uma pasta `utils` para funções auxiliares e cálculos.

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/grazysss/mariepetz.git
```

### 2. Entre na pasta

```bash
cd mariepetz
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Depois, acesse o endereço apresentado pelo Vite no terminal.

---

## 🔨 Outros comandos

### Gerar build de produção

```bash
npm run build
```

### Visualizar o build

```bash
npm run preview
```

### Executar o lint

```bash
npm run lint
```

### Deploy

O projeto possui configuração para publicação utilizando **GitHub Pages**:

```bash
npm run deploy
```

Os scripts de build e deploy estão definidos no `package.json` do projeto.

---

## 🌐 Aplicação

A versão publicada do projeto está disponível em:

**https://grazysss.github.io/mariepetz/**

O próprio repositório informa o GitHub Pages como homepage do projeto.

---

## 👩‍💻 Desenvolvimento

O MariePetz foi desenvolvido como um projeto acadêmico, envolvendo conceitos de:

* Desenvolvimento Web
* React
* Componentização
* JavaScript
* Manipulação de estados com `useState`
* Validação de formulários
* Funções matemáticas
* Git e GitHub
* Trabalho colaborativo
* Organização de tarefas e branches

O desenvolvimento foi dividido entre as funcionalidades de **entrada e processamento inicial dos dados** e as funcionalidades de **cálculo final e apresentação dos resultados**.

---

## 📌 Status do projeto

**Em desenvolvimento.**

O projeto possui a estrutura principal da aplicação e as telas de entrada e resultados implementadas. Novas melhorias e ajustes podem ser realizados conforme a evolução do projeto.

---

## 📚 Objetivo acadêmico

O projeto tem como objetivo aplicar, de maneira prática, conhecimentos de desenvolvimento de software, desde a construção da interface até a implementação da lógica de negócio e organização do código utilizando Git.

---

## 👥 Autoras

**Grazy**
Desenvolvimento da aplicação, interface e implementação dos cálculos iniciais.

**Yonara**
Desenvolvimento dos cálculos finais e implementação da tela de resultados.

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.