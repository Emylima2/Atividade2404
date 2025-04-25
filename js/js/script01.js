function calcularMedia() {
    const n1 = parsefloat(document.gentElementById('nota1').value);
    const n2 = parsefloat(document.gentElementById('nota2').value);
    const n3 = parsefloat(document.gentElementById('nota3').value);
    const media = (n1 + n2 + n3) / 3;

    let status = "";
    if (media >= 7) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

    document.getElementById('resultado').innerHTML = `Média: ${media.toFixed(2)} - ${status}`;
}