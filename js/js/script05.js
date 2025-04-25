let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById("palpite").value);
    const mensagem = document.getElementById("mensagem");

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        mensagem.textContent = "Digite um número entre 1 e 10.";
        return;
    }

    if (palpite === numeroSecreto) {
        mensagem.textContent = "Parabéns! Você acertou!";
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "Tente um número maior.";
    } else {
        mensagem.textContent = "Tente um número menor.";
    }
}
