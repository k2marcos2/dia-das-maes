const perguntas = [
  {
    pergunta: "Qual é a data de aniversário do seu filho mais lindo e inteligente?",
    opcoes: ["21 de março", "31 de agosto", "16 de março"],
    resposta: 0
  },
  {
    pergunta: "Qual é a data de aniversário do seu filho que se esforça muito para ser melhor que o irmão mais velho? 😂 (brincadeira!)",
    opcoes: ["21 de março", "16 de março", "31 de agosto"],
    resposta: 2
  },
  {
    pergunta: "Qual é a data de aniversário do mais bagunceiro?",
    opcoes: ["31 de agosto", "16 de março", "21 de março"],
    resposta: 1

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
    feedback.textContent = "✅ exatamente!🙃🙂";
    indice++;
    if (indice < perguntas.length) {
      setTimeout(carregarPergunta, 1500);
    } else {
      feedback.textContent = "🎉 Você acertou tudo gatona! Agora clique no presente!";
      document.getElementById("question").textContent = "";
      document.getElementById("options").innerHTML = "";

      // Mostrar a surpresa e habilitar botão
      document.getElementById("surpresa").style.display = "block";
      document.getElementById("botaoSurpresa").disabled = false;
    }
  } else {
    feedback.textContent = "❌ como assim?.";
  }
}

function mostrarMensagem() {
  document.getElementById("mensagemEspecial").textContent =
    "Mãe, você é a nossa maior professora. Feliz Dia das Mães! Te amamos muito, lindona! 💖"
}

window.onload = carregarPergunta;
