var activeInput = 'num1';

function setActiveInput(inputId) {
    activeInput = inputId;
}

function agregarNumero(numero) {
    var input = document.getElementById(activeInput);
    input.value += numero.toString();
}

function limpiar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

function calcular(operacion) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor ingrese dos números válidos');
        return;
    }

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert('No se puede dividir por cero');
                return;
            }
            break;
        default:
            return;
    }

    alert('El resultado es: ' + resultado);
    limpiar();
}