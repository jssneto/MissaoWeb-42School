const botaoMudarCor = document.getElementById('botao-mudar-cor');

botaoMudarCor.addEventListener('click', function() {
    const cores = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    document.body.style.backgroundColor = corAleatoria;
});