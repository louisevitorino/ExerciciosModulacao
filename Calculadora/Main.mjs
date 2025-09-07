import readline from 'readline-sync';
import {somar, subtrair, multiplicar, dividir} from './Function.mjs';

console.log ("Calculadora")

const equacao = readline.questionInt ("Qual equacao voce gostaria de usar? \n1 - somar \n2 - subtrair \n3 - multiplicar \n4 - dividir \n")

const n1 = readline.questionFloat ("Digite o primeiro numero:")
const n2 = readline.questionFloat ("Digite o segundo numero:")

let resultado

switch (equacao) {
    case 1:
        resultado = somar (n1, n2)
        console.log (`O resultado da soma e: ${resultado}`);
        break;

    case 2:
        resultado = subtrair (n1, n2)
        console.log (`O resultado da dimuicao e: ${resultado}`);
        break;

    case 3:
        resultado = multiplicar (n1, n2)
        console.log (`O resultado da multiplicao e: ${resultado}`);
        break;

    case 4:
        resultado = dividir (n1, n2)
        console.log (`O resultado da divisao e: ${resultado}`);
        break;
}
