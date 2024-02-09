const perguntas = [
    { //Um assey dentro do assey. Primeiro pega a pergunta item.pergunta. Depois usa uma 
    //chamada com o valor da assey de respostas sendo a ordem 0,1,2. Chamada uma assey dentro assey
      pergunta: "Qual é a sintaxe correta para comentar uma linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação de valor e tipo",
        "Concatenação de strings",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'console.log()' faz em JavaScript?",
      respostas: [
        "Exibe uma mensagem de alerta",
        "Registra informações no console do navegador",
        "Cria um novo elemento HTML",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Seleciona elementos por classe",
        "Seleciona elementos por ID",
        "Seleciona elementos por tag",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um valor fixo que não pode ser alterado",
        "Um elemento HTML",
        "Um nome simbólico para armazenar dados",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma função em JavaScript?",
      respostas: [
        "function minhaFuncao() {}",
        "let minhaFuncao = function() {}",
        "const minhaFuncao = () => {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "*",
        "&",
      ],
      correta: 0
    },
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Data Object Model",
        "Document Order Method",
        "Document Object Model",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o evento 'onclick' em JavaScript?",
      respostas: [
        "Um evento que ocorre quando o mouse é clicado em um elemento",
        "Um evento que ocorre quando o teclado é pressionado",
        "Um evento que ocorre quando a página é carregada",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string em um número inteiro",
        "Arredondar um número para o inteiro mais próximo",
        "Converter um número em uma string",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length //soma dos itens
  const mostrarTotal = document.querySelector('#acertos span')//Tag pai e filha
  
  //loop de repetição
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  // comentário como funciona
   for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  //comentário como funciona
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta //valor buliano comparando valores ==, === comparação do tipo de variáveis
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' +  totalDePerguntas //funcionou, erro em uma letra
  
    }
  
    quizItem.querySelector('dl').appendChild(dt)
   }
  
    quizItem.querySelector('dl dt').remove()
  
   //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  
