// Declaração das variáveis
let operacao = prompt("Informe a operação desejada: ");
let numero1 = Number(prompt("Informe o primeiro número: "));
let numero2 = Number(prompt("Informe o segundo número: "));
let resultado;

// Verificar a operação matemática selecionada
if (operacao === "+") {
    resultado = numero1 + numero2;
} else if (operacao === "-") {
    resultado = numero1 - numero2;
} else if (operacao === "*") {
    resultado = numero1 * numero2;
} else if (operacao === "/") {
    resultado = numero1 / numero2;
} else {
    resultado = "Operação inválida.";
}

// Exibir o resultado
 document.write("<p>O resultado da operação é: " + resultado + "</p>");