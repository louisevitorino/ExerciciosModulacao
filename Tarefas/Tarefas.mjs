import readline from 'readline-sync';
import {MostrarDados, AdicionarTarefa, RemoverTarefa} from './Function.mjs';

console.log ("Afazeres de casa")

MostrarDados ()

const opcao = readline.questionInt ("\nEscolha uma opcao: \n1 - Adicionar uma tarefa \n2 - Listar tarefas \n3 - Remover uma tarefa: \n")

switch (opcao) {
case 1:
    const nova = readline.question("Digite a nova tarefa: ");
    AdicionarTarefa (nova)
    break;

case 2:
    console.log ("Lista de tarefas")
    MostrarDados ()
    break;

case 3:
    const id = readline.questionInt("Digite o ID da tarefa que deseja remover: ");
    RemoverTarefa (id)
    break;
}