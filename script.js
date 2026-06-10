// =====================================================
// ARQUIVO: script.js
// Interações do site sobre Sustentabilidade
// =====================================================

// Vetor de mensagens

let mensagens = [

"🌿 Cuidar do planeta é uma responsabilidade de todos.",

"💧 Economizar água hoje garante recursos para o futuro.",

"♻️ Reciclar ajuda a reduzir a poluição e preservar recursos naturais.",

"🌳 Plantar árvores melhora a qualidade do ar e protege a biodiversidade.",

"🚜 Campo e cidade unidos constroem um futuro sustentável.",

"🌎 Pequenas atitudes podem gerar grandes transformações ambientais."

];

// Mostrar mensagem

function mostrarMensagem(){

    let sorteio =
    Math.floor(Math.random() * mensagens.length);

    document.getElementById("mensagem").innerHTML =
    mensagens[sorteio];

}

// Modo escuro

function alternarTema(){

    document.body.classList.toggle("dark-mode");

}

// Contador de árvores

let totalArvores = 0;

function plantarArvore(){

    totalArvores++;

    document.getElementById("contador").innerHTML =
    totalArvores;

}
// =====================================================
// QUIZ DA SUSTENTABILIDADE
// =====================================================

function corrigirQuiz(){

    let p1 = Number(document.getElementById("p1").value);
    let p2 = Number(document.getElementById("p2").value);
    let p3 = Number(document.getElementById("p3").value);
    let p4 = Number(document.getElementById("p4").value);

    let pontos = p1 + p2 + p3 + p4;

    let resultado = "";

    if(pontos == 4){

        resultado =
        "🌟 Excelente! Você demonstra grande consciência ambiental.";

    }
    else if(pontos >= 2){

        resultado =
        "🌱 Muito bem! Você já pratica atitudes sustentáveis importantes.";

    }
    else{

        resultado =
        "💚 Você pode melhorar seus hábitos para ajudar ainda mais o planeta.";

    }

    document.getElementById("resultadoQuiz").innerHTML =
    resultado;

}