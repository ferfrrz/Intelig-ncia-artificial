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
        enunciado: "Em uma festa,você costuma:",
        alternativas: [
            {
                texto: "Ficar no meio da galera dançando.",
                afirmacao: "Você é extrovertido, sociavel e gosta e se expressar sem medo."
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
        enunciado: "Você se considera mais:",
        alternativas: [
            {
                texto: "Realista.",
                afirmacao: "Você lida bem como  a verdade, prefere os fatos e é pé no chão."
            },
            {
                texto: "Sonhador.",
                afirmacao: "Você tem uma mente criativa, vive com esperança e vê além do agora."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();