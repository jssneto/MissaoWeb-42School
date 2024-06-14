const ftList = document.getElementById('ft_list');
const ftAdd = document.getElementById('ft_add');

// Função para criar uma nova tarefa
function createTask(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.textContent = taskText;

    // Adiciona evento de clique para remover a tarefa
    taskDiv.addEventListener('click', () => {
        if (confirm('Deseja remover esta tarefa?')) {
            ftList.removeChild(taskDiv);
            saveTaskList();
        }
    });

    // Adiciona a nova tarefa no topo da lista
    ftList.insertBefore(taskDiv, ftList.firstChild);
    saveTaskList();
}

// Função para abrir o prompt de criação de tarefa
function addTask() {
    const taskText = prompt('Digite a nova tarefa:');
    if (taskText) {
        createTask(taskText);
    }
}

// Função para carregar tarefas salvas no cookie
function loadTaskList() {
    const savedTasks = localStorage.getItem('taskList');
    if (savedTasks) {
        const tasksArray = JSON.parse(savedTasks);
        tasksArray.forEach(taskText => createTask(taskText));
    }
}

// Função para salvar a lista de tarefas no cookie
function saveTaskList() {
    const tasksArray = [];
    for (const taskDiv of ftList.childNodes) {
        tasksArray.push(taskDiv.textContent);
    }
    localStorage.setItem('taskList', JSON.stringify(tasksArray));
}

// Adiciona eventos de clique aos botões
ftAdd.addEventListener('click', addTask);

// Carrega as tarefas ao iniciar a página
loadTaskList();