function calcularFatorial() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero) || numero < 0) {
        resultado.textContent = "Por favor, digite um número inteiro positivo.";
        return;
    }

    let fatorial = 1;

    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    resultado.textContent = `O fatorial de ${numero} é ${fatorial}.`;
}
