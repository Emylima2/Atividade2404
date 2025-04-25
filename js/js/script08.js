function validarCPF() {
    const cpfInput = document.getElementById("cpf").value;
    const resultado = document.getElementById("resultado");

    const cpf = cpfInput.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        resultado.textContent = "CPF inválido.";
        return;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito >= 10) primeiroDigito = 0;
    if (parseInt(cpf[9]) !== primeiroDigito) {
        resultado.textContent = "CPF inválido.";
        return;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito >= 10) segundoDigito = 0;
    if (parseInt(cpf[10]) !== segundoDigito) {
        resultado.textContent = "CPF inválido.";
        return;
    }

    resultado.textContent = "CPF válido!";
}
