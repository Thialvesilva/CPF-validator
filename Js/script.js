const cpf = document.getElementById('cpf');
const validar = document.getElementById('validar');
const resultado = document.getElementById('resultado');

function validarCPF() {
    const cpfDigitado = cpf.value
    const cpfLimpo = cpfDigitado.replace(/[.-]/g, "")
    if (cpfLimpo.length !== 11) {
        resultado.textContent = "CPF inválido"
    } else {
        resultado.textContent = "CPF Válido"
        const primeiros9 = cpfLimpo.slice(0, 9);
        let soma = 0;
        for (let i = 0; i < primeiros9.length; i++) {
            primeiros9[i]
            Pesos[i]
            let multiplicacao = primeiros9[i] * Pesos[i]
            soma += multiplicacao;
        }
        let resto = soma % 11;
        let primeiroDigito;

        if (resto <= 1) {
           primeiroDigito = 0
        } else {
           primeiroDigito = 11 - resto
        }
        const primeiroDigitoCPF = cpfLimpo[9];
    }
}
const Pesos = [10, 9, 8, 7, 6, 5, 4, 3, 2]
validar.addEventListener('click', validarCPF)