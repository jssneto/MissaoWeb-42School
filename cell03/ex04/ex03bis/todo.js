$(document).ready(function() {

    // Selecionando elementos DOM
    const $ftList = $('#ft_list');
    const $ftAdd = $('#ft_add');

    // Função para criar uma nova tarefa
    function createTask(taskText) {
        const $taskDiv = $('<div>').text(taskText);

        // Adiciona evento de clique para remover a tarefa
        $taskDiv.on('click', function() {
            if (confirm('Deseja remover esta tarefa?')) {
                $taskDiv.remove();
                saveTaskList();
            }
        });

        // Adiciona a nova tarefa no topo da lista
        $ftList.prepend($taskDiv);
        saveTaskList();
    }

    // Função para abrir o prompt de criação de tarefa
    function addTask() {
        const taskText = prompt('Digite a nova tarefa:');
        if (taskText) {
            createTask(taskText);
        }
    }

    // Função para carregar tarefas salvas no localStorage
    function loadTaskList() {
        const savedTasks = localStorage.getItem('taskList');
        if (savedTasks) {
            const tasksArray = JSON.parse(savedTasks);
            tasksArray.forEach(taskText => createTask(taskText));
        }
    }

    // Função para salvar a lista de tarefas no localStorage
    function saveTaskList() {
        const tasksArray = [];
        $ftList.children().each(function() {
            tasksArray.push($(this).text());
        });
        localStorage.setItem('taskList', JSON.stringify(tasksArray));
    }

    // Adiciona eventos de clique aos botões
    $ftAdd.on('click', addTask);

    // Carrega as tarefas ao iniciar a página
    loadTaskList();

});