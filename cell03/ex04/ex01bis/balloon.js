$(document).ready(function() {
    var balao = $("#balao");
    var tamanho = 200;
    var cor = "red";
    var cores = ["red", "green", "blue"];
  
    balao.click(function() {
      tamanho += 10;
  
      if (tamanho > 420) {
        tamanho = 200;
        alert("O balão explodiu!");
      }
  
      cor = cores[(cores.indexOf(cor) + 1) % cores.length];
  
      balao.css({
        width: tamanho + "px",
        height: tamanho + "px",
        backgroundColor: cor
      });
    });
  
    balao.mouseenter(function() {
      balao.css({
        width: (tamanho - 5) + "px",
        height: (tamanho - 5) + "px"
      });
    });
  
    balao.mouseleave(function() {
      balao.css({
        width: tamanho + "px",
        height: tamanho + "px"
      });
    });
  });