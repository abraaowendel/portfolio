const projetos = [

    { title: "eSneakers", 
      description: "eSneakers é uma loja virtual que veio revolucionar o mercado de tênis. Quem usa não se decepciona.", 
      link:"https://abraaowendel.github.io/eSneakers/"
    },

    { title: "ClimaAgora", 
      description: "No ClimaAgora você pode encontrar as condições climáticas da sua cidade em tempo real.", 
      link:"https://abraaowendel.github.io/ClimaAgora/"
    },
    
    { title: "BuscaCep", 
      description: "O BuscaCep mostra informações como Rua, Bairro, Cidade e Estado sobre um determinado CEP válido.", 
      link:"https://abraaowendel.github.io/BuscaCEP/"
    },

    { title: "TransformaFlix", 
      description: "TransformaFlix é um serviço de stream com várias séries, filmes e desenhos da nova e velha geração.", 
      link:"https://abraaowendel.github.io/TransformaFlix/"
    },

    { title: "Planetário", 
      description: "O Planetário é um projeto educativo onde você pode ver informações sobre todos os planetas do Sistema Solar.", 
      link:"https://abraaowendel.github.io/Planetario/"
    },

    { title: "Lista de Tarefas", 
      description: "Suas tarefas pendentes fácil de usar. Você pode adicionar, marcar como concluída e remover suas tarefas.", 
      link:"https://abraaowendel.github.io/Lista-de-Tarefas/"
    },

    { title: "Countdown", 
      description: "Usando este projeto, você pode saber quantos dias, horas e segundos faltam até o ano novo 2023.", 
      link:"https://abraaowendel.github.io/Countdown/"
    },
    
    { title: "Pomodoro", 
      description: "O Pomodoro é um gerenciador de tempo que ajuda você a gerenciar seu tempo com eficiência.", 
      link:"https://abraaowendel.github.io/Pomodoro/"
    },

    { title: "Cronômetro", 
      description: "O Cronômetro on-line conta em milésimos de segundo o tempo passado.", 
      link:"https://abraaowendel.github.io/Cronometro/"
    },
   
]

const carrousel = () => {
    projetos.forEach(element => {
        const card = document.createElement("a")
        card.classList.add("card")
        card.href = `${element.link}`
        card.target = "_blank"
        card.innerHTML = `
            <h3>${element.title}</h3>
            <p>${element.description}</p>
        `
        document.querySelector('.owl-carousel').appendChild(card);
    });
}
carrousel();