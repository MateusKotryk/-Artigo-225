const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Um hacker invadiu o sistema da empresa e exigiu resgate. Para usar os prints das telas de ameaça e os logs do servidor como prova válida em um processo judicial, qual é o meio juridicamente mais seguro e aceito para registrar digitalmente essa evidência sem que ela perca o valor legal?",
        alternativas: [
            {
                texto: "enviar por e-mail para o advogado, registrar em uma Ata Notarial/plataforma blockchain auditável",
                afirmacao: "afirmacao"
            },
            {
                texto: "irar foto com o celular",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "O invasor não roubou dados, mas instalou um vírus que derrubou o e-commerce da empresa por 48 horas, causando prejuízo financeiro. Com base na Lei Carolina Dieckmann (Lei 12.737/12), qual crime foi cometido?",
        alternativas: [
            {
                texto:"Invasão de dispositivo informático, Estelionato virtual",
                afirmacao:"afirmacao"
            },
            {
                texto: "Furto qualificado",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Durante o ataque, a base de dados de clientes (nomes, CPFs e e-mails) foi exposta. De acordo com a Lei Geral de Proteção de Dados (LGPD), além de mitigar o dano, qual obrigação jurídica a empresa tem perante as autoridades, sob pena de multas pesadas?",
        alternativas: [
            {
                texto:"Notificar a ANPD e os titulares em prazo razoável,",
            },
            {
                texto:"Excluir imediatamente o banco de dados",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Descobriu-se que o hacker entrou no sistema porque um funcionário utilizava a senha padrão de fábrica "123456" em um computador corporativo. Juridicamente, se os clientes processarem a empresa pelo vazamento, a empresa pode se eximir da culpa alegando "fato de terceiro" (culpa exclusiva do hacker)?",
        alternativas: [
            {
                texto:"Sim.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Nao.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Para processar civilmente o invasor e exigir indenização pelos danos, o advogado da empresa precisa descobrir quem operava o endereço IP que originou o ataque. De acordo com o Marco Civil da Internet (Lei 12.965/14), como a empresa obtém legalmente os dados cadastrais vinculados a esse IP junto ao provedor de acesso?",
        alternativas: [
            {
                texto: "Apenas mediante ordem judicial (liminar)",
                afirmacao:"afirmacao"
            },
            {
                texto: "Contratando um detetive particular",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();