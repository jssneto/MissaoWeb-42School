const balao = document.getElementById('balao');
let tamanho = 200;
let cor = 'red';
const cores = ['red', 'green', 'blue'];

balao.addEventListener('click', () => {
    tamanho += 10;

    if (tamanho > 420) {
        tamanho = 200;
        alert('O balão explodiu!');
    }

    cor = cores[(cores.indexOf(cor) + 1) % cores.length];

    balao.style.width = tamanho + 'px';
    balao.style.height = tamanho + 'px';
    balao.style.backgroundColor = cor;
});

balao.addEventListener('mouseover', () => {
    cor = cores[(cores.indexOf(cor) + 1) % cores.length];
    balao.style.backgroundColor = cor;
    balao.style.width = (tamanho - 5) + 'px';
    balao.style.height = (tamanho - 5) + 'px';
});

balao.addEventListener('mouseout', () => {
    balao.style.width = tamanho + 'px';
    balao.style.height = tamanho + 'px';
});