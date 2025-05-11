const perguntas = [
  {
    pergunta: "Quando é comemorado o Dia das Mães no Brasil?",
    opcoes: ["Segunda semana de maio", "Primeira semana de junho", "25 de dezembro"],
    resposta: 0
  },
  {
    pergunta: "Qual é a flor símbolo do Dia das Mães?",
    opcoes: ["Rosa", "Girassol", "Orquídea"],
    resposta: 0
  },
  {
    pergunta: "O que é algo especial que você pode fazer pela sua mãe?",
    opcoes: ["Dar carinho", "Ajudar nas tarefas", "Todas as anteriores"],
    resposta: 2
  }
];

let indice = 0;

function carregarPergunta() {
  const q = perguntas[indice];
  document.getElementById("question").textContent = q.pergunta;
  const opcoesDiv = document.getElementById("options");
  opcoesDiv.innerHTML = "";
  q.opcoes.forEach((opcao, i) => {
    const btn = document.createElement("button");
    btn.textContent = opcao;
    btn.onclick = () => verificarResposta(i);
    opcoesDiv.appendChild(btn);
  });
  document.getElementById("feedback").textContent = "";
}

function verificarResposta(i) {
  const correta = perguntas[indice].resposta;
  const feedback = document.getElementById("feedback");

  if (i === correta) {
    feedback.textContent = "✅ Resposta correta!";
    indice++;
    if (indice < perguntas.length) {
      setTimeout(carregarPergunta, 1500);
    } else {
      feedback.textContent = "🎉 Você acertou tudo! Agora clique no presente!";
      document.getElementById("question").textContent = "";
      document.getElementById("options").innerHTML = "";

      // Mostrar a surpresa e habilitar botão
      document.getElementById("surpresa").style.display = "block";
      document.getElementById("botaoSurpresa").disabled = false;
    }
  } else {
    feedback.textContent = "❌ Ops! Tente de novo.";
  }
}

function mostrarMensagem() {
  document.getElementById("mensagemEspecial").textContent =
    "🎁 Parabéns! Mãe, você é um presente na minha vida. Feliz Dia das Mães! 💖";
}

window.onload = carregarPergunta;
