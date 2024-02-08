const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento de aplicativos móveis",
        "Um framework popular para desenvolvimento web",
        "Uma linguagem de programação usada para criar interatividade em páginas web",
      ],
      correta: 2
    }, 
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "let myVar = 10;",
        "const myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes não é um tipo de dado em JavaScript?",
      respostas: [
        "Number",
        "String",
        "Boolean",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de igualdade (valor e tipo)",
        "Atribuição de valor",
        "Comparação de igualdade (apenas valor)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é chamada automaticamente quando uma condição é satisfeita",
        "Uma função que é passada como argumento para outra função e é chamada de volta mais tarde",
        "Uma função que retorna um valor booleano",
      ],
      correta: 1
    },
    {
      pergunta: "Como se referencia o primeiro elemento de um array em JavaScript?",
      respostas: [
        "array[0]",
        "array.first()",
        "array.getFirst()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um modelo de dados que descreve a estrutura de um documento HTML",
        "Uma linguagem de programação para criar páginas web",
        "Um conjunto de estilos pré-definidos para páginas web",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar o primeiro elemento no documento que corresponde a um seletor CSS especificado",
        "Adicionar um evento de clique a um elemento HTML",
        "Selecionar todos os elementos no documento que correspondem a um seletor CSS especificado",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São equivalentes, ambos indicam a ausência de valor",
        "'null' indica ausência de valor atribuído, enquanto 'undefined' indica que a variável não foi inicializada ou não existe",
        "'undefined' indica ausência de valor atribuído, enquanto 'null' indica que a variável não foi inicializada ou não existe",
      ],
      correta: 1
    },
   ];
   
   const quiz = document.querySelector('#quiz')
   const template = document.querySelector('template')
   
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
   // loop ou laço de repetção
   for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
   
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
   
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     } 
     
       quizItem.querySelector('dl').appendChild(dt)
   }
   
   quizItem.querySelector('dl dt').remove()
    
    
    // coloca a pergunta na tela  
    quiz.appendChild(quizItem)  
   }