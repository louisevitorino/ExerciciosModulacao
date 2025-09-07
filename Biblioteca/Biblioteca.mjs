import {Livros} from './Livros.mjs'

function ListarLivros() {
    console.log("Lista de Livros:");
    Livros.forEach(livro => {
        const status = livro.disponivel ? "Disponivel" : "Emprestado";
        console.log(`ID: ${livro.id} - Titulo: ${livro.titulo} - Autor: ${livro.autor} - Ano: ${livro.ano} - Status: ${status}`);
    });
}

function EmprestarLivro(id) {
    const livroSelecionado = Livros.find(l => l.id === id);
    if (livroSelecionado) {
        if (livroSelecionado.disponivel === true) {
            livroSelecionado.disponivel = false;
            console.log(`Voce selecionou o livro: "${livroSelecionado.titulo}" de ${livroSelecionado.autor}, publicado em ${livroSelecionado.ano}. Aproveite a leitura!`);
            console.log("\nBiblioteca atualizada!");
            ListarLivros();
        } else {
            console.log ("Este livro ja esta emprestado.");
        }
    } else {
        console.log ("Livro nao encontrado.");
    }
}

function DevolverLivro (id) {
    const livroSelecionado = Livros.find(l => l.id === id);
    if (livroSelecionado) {
        if (!livroSelecionado.disponivel) {
            livroSelecionado.disponivel = true;
            console.log (`Voce devolveu o livro: "${livroSelecionado.titulo}" de ${livroSelecionado.autor}, publicado em ${livroSelecionado.ano}. Obrigada!`)
            console.log ("\nBiblioteca atualizada!")
            ListarLivros ()
        } else {
            console.log (`O livro "${livroSelecionado.titulo}" ja esta disponivel.`)
        }
    } else {
        console.log("Livro nao encontrado.")
    }
}

export {ListarLivros, EmprestarLivro, DevolverLivro, Livros}