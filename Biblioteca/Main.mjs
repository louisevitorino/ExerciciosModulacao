import readline from 'readline-sync';
import {ListarLivros, EmprestarLivro, DevolverLivro} from './Biblioteca.mjs';

console.log ("Biblioteca de Livros")

ListarLivros ()

const opcao = readline.questionInt ("O que voce deseja fazer? \n1: Pegar um livro emprestado \n2: Devolver um livro \nDigite a opcao desejada: ")

switch (opcao) {
    case 1:
    const idEmprestimo = readline.questionInt("Digite o id do livro que voce quer pegar emprestado: ");
    EmprestarLivro (idEmprestimo)
    break;

    case 2:
    const idDevolucao = readline.questionInt("Digite o id do livro que voce quer devolver: ");
    DevolverLivro (idDevolucao)
    break;
}