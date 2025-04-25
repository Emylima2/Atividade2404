function converterHoras() {
    const horas = parseFloat(document.getElementById("horas").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(horas) || horas < 0) {
        resultado.textContent = "Por favor, digite um valor válido de horas.";
        return;
    }

    const minutos = horas * 60;
    const segundos = horas * 3600;

    resultado.textContent = `${horas} hora(s) equivalem a ${minutos} minuto(s) ou ${segundos} segundo(s).`;
}
