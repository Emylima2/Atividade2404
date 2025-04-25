function somarPares() {
    const limite = parseInt(document.getElementById("limite").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(limite) || limite < 1) {
        resultado.textContent = "Digite um número válido maior que 0.";
        return;
    }

    let soma = 0;

    for (let i = 2; i <= limite; i += 2) {
        soma += i;
    }

    resultado.textContent = `A soma dos números pares de 1 até ${limite} é ${soma}.`;
}
