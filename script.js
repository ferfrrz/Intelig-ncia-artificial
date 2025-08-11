const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual cenario te atrai mais?",
        alternativas: [
            {
                texto: "Um dia ensolarado, céu azul e muito movimento.",
                afirmacao: "Você é energético, otimista e se sente motivado por ambientes ativos."
            },
            {
                texto: "Uma noite calma, céu estrelado e silêncio.",
                afirmacao: "Você é introspectivo, criativo e valoriza momentos de paz e reflexão."
            }
        ]
    },
    {
        enunciado: "Em uma festa,você cotuma:",
        alternativas: [
            {
                texto: "Ficar no meio da galera dançando.",
                afirmacao: "Você é extrovertid0, sociavel e gosta e se expressar sem medo."
            },
            {
                texto: "Conversa com poucas pessoas em um canto.",
                afirmacao: "Você é reservado e prefere não chamar a atenção para si."
            }
        ]
    },
    {
        enunciado: "Quando tem um problema, você:",
        alternativas: [
            {
                texto: "Age rápiamente para resolver.",
                afirmacao: "Você é pratico, objetivo e enfrenta aas dificuldades de frente."
            },
            {
                texto: "Pensa bastante antes e agir.",
                afirmacao: "Você é cauteloso, analitico , gosta de tomatar decisões."
            }
        ]
    },
    {
        enunciado: "Ao ouvir uma música, você prefere:",
        alternativas: [
            {
                texto: "Ritmos animaddos e dançantes.",
                afirmacao: "Você é vibrante, alegre e gosta e aproveitar o momento."
            },
            {
                texto: "Músicas calmas e profundas.",
                afirmacao: "Você é sensivel, emocional e usa a música para se conectar com seus sentimentos."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();