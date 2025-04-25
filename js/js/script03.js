function verificarIdade() {
    const idade = parseInt(document.getElementById("idade").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(idade) || idade < 0) {
        resultado.textContent = "Por favor, digite uma idade válida.";
        return;
    }

    let faixaEtaria = "";

    if (idade <= 12) {
        faixaEtaria = "Criança";
    } else if (idade <= 17) {
        faixaEtaria = "Adolescente";
    } else if (idade <= 59) {
        faixaEtaria = "Adulto";
    } else {
        faixaEtaria = "Idoso";
    }

    resultado.textContent = `Você é ${faixaEtaria}.`;
}
