const cpf  = document.getElementById('cpf');
const validar = document.getElementById('validar');
const resultado = document.getElementById('resultado');

function validarCPF() {
    const cpfDigitado = cpf.value
    const cpfLImpo = cpfDigitado.replace(/[.-]/g, "")
    if (cpfLImpo.length !== 11){
        resultado.textContent = "CPF inválido"
    }else{
        resuladto.textContent = "CPF Valido"
    }
}

validar.addEventListener('click', validarCPF)