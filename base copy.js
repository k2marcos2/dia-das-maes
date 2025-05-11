const emojis = ["🌸", "💐", "👩", "🎁", "👩‍👧", "❤️", "☕", "🍰"];
let cartas = [...emojis, ...emojis]; // Pares
let cartasEmbaralhadas = cartas.sort(() => 0.5 - Math.random());
let primeiraCarta = null;
let segundaCarta = null;
let bloqueio = false;
let acertos = 0;

const tabuleiro = document.getElementById("tabuleiro");

function criarTabuleiro() {
  cartasEmbaralhadas.forEach((emoji, index) => {
    const carta = document.createElement("div");
    carta.classList.add("card");
    carta.dataset.emoji = emoji;
    carta.dataset.index = index;
    carta.onclick = () => revelarCarta(carta);
    tabuleiro.appendChild(carta);
  });
}

function revelarCarta(carta) {
  if (bloqueio || carta.classList.contains("revelada")) return;

  carta.textContent = carta.dataset.emoji;
  carta.classList.add("revelada");

  if (!primeiraCarta) {
    primeiraCarta = carta;
  } else {
    segundaCarta = carta;
    verificarPar();
  }
}

function verificarPar() {
  bloqueio = true;
  const ePar = primeiraCarta.dataset.emoji === segundaCarta.dataset.emoji;

  if (ePar) {
    primeiraCarta.classList.add("emoji");
    segundaCarta.classList.add("emoji");
    acertos++;
    if (acertos === emojis.length) {
      document.getElementById("mensagemFinal").textContent =
        "🎉 Parabéns! Você encontrou todos os pares! Feliz Dia das Mães! 💖";
    }
    resetarCartas();
  } else {
    setTimeout(() => {
      primeiraCarta.textContent = "";
      segundaCarta.textContent = "";
      primeiraCarta.classList.remove("revelada");
      segundaCarta.classList.remove("revelada");
      resetarCartas();
    }, 1000);
  }
}

function resetarCartas() {
  [primeiraCarta, segundaCarta] = [null, null];
  bloqueio = false;
}

criarTabuleiro();
