let tarefas = [
    {id: 1, item: " Varrer casa "},
    {id: 2, item: " Organizar louca "},
    {id: 3, item: " Passar roupa "},
    {id: 4, item: " Limpar banheiro "},
    {id: 5, item: " Limpar moveis "}
]

function MostrarDados() {
     tarefas.forEach(tarefa => {
        console.log(`ID: ${tarefa.id} - Item: ${tarefa.item}`)
    })
}

function AdicionarTarefa (novatarefa) {
    const novoId = tarefas.length ? tarefas[tarefas.length - 1].id + 1 : 1;
    tarefas.push({ id: novoId, item: novatarefa });
    console.log (`Voce adicionou a tarefa de ${novatarefa}`);
    console.log ("\nAfazeres de casa atualizado!")
    MostrarDados ()
}


function RemoverTarefa(id) {
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    if (index !== -1) {
        const removida = tarefas.splice(index, 1)[0];
        console.log (`Voce removeu a tarefa de ${removida.item}`);
        console.log ("\nAfazeres de casa atualizado!")
        MostrarDados ()
}
}

export {MostrarDados, AdicionarTarefa, RemoverTarefa, tarefas}
