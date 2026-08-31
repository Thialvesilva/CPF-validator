/*9 primeiros números → multiplicam pelos pesos.
Calcula o 1º dígito.
Depois usa os 9 + 1º dígito → calcula o 2º dígito.
Se os dois baterem com o CPF digitado → válido.*/
const cpf = document.getElementById('cpf');
const validar = document.getElementById('validar');
const resultado = document.getElementById('resultado');

function validarCPF() {
    const cpfDigitado = cpf.value;
    const cpfLimpo = cpfDigitado.replace(/[.-]/g, "");

    if (cpfLimpo.length !== 11) {
        resultado.textContent = "CPF inválido";
        return;
    }

    if (cpfLimpo === "00000000000" ||
        cpfLimpo === "11111111111" ||
        cpfLimpo === "22222222222" ||
        cpfLimpo === "33333333333" ||
        cpfLimpo === "44444444444" ||
        cpfLimpo === "55555555555" ||
        cpfLimpo === "66666666666" ||
        cpfLimpo === "77777777777" ||
        cpfLimpo === "88888888888" ||
        cpfLimpo === "99999999999") {
        resultado.textContent = "CPF inválido";
        return;
    }

    const primeiros9 = cpfLimpo.slice(0, 9);
    const pesos = [10, 9, 8, 7, 6, 5, 4, 3, 2];

    let soma = 0;

    for (let i = 0; i < primeiros9.length; i++) {
        let multiplicacao = Number(primeiros9[i]) * pesos[i];
        soma += multiplicacao;
    }

    let resto = soma % 11;
    let primeiroDigito;

    if (resto < 2) {
        primeiroDigito = 0;
    } else {
        primeiroDigito = 11 - resto;
    }

    const primeiroDigitoCPF = Number(cpfLimpo[9]);

    if (primeiroDigito !== primeiroDigitoCPF) {
        resultado.textContent = "CPF inválido";
        return;
    }

    const primeiros10 = cpfLimpo.slice(0, 10);
    const pesos2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    let soma2 = 0;

    for (let i = 0; i < primeiros10.length; i++) {
        let multiplicacao2 = Number(primeiros10[i]) * pesos2[i];
        soma2 += multiplicacao2;
    }

    let resto2 = soma2 % 11;
    let segundoDigito;

    if (resto2 < 2) {
        segundoDigito = 0;
    } else {
        segundoDigito = 11 - resto2;
    }

    const segundoDigitoCPF = Number(cpfLimpo[10]);

    if (segundoDigito !== segundoDigitoCPF) {
        resultado.textContent = "CPF inválido";
        return;
    }

    resultado.textContent = "CPF Válido";
}

validar.addEventListener('click', validarCPF);