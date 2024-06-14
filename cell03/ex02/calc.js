$(document).ready(function() {

    // Select elements using jQuery
    const $num1Input = $('#num1');
    const $operadorSelect = $('#operador');
    const $num2Input = $('#num2');
    const $botaoCalcular = $('#botaoCalcular');
    const $resultadoDiv = $('#resultado');
  
    // Function to perform calculation
    function calcular() {
      const num1 = parseInt($num1Input.val());
      const num2 = parseInt($num2Input.val());
      const operador = $operadorSelect.val();
  
      if (isNaN(num1) || isNaN(num2)) {
        alert('Error :(');
        return;
      }
  
      let resultado;
  
      switch (operador) {
        case '+':
          resultado = num1 + num2;
          break;
        case '-':
          resultado = num1 - num2;
          break;
        case '*':
          resultado = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            alert('It’s over 9000!');
            console.log('It’s over 9000!');
            return;
          }
          resultado = num1 / num2;
          break;
        case '%':
          if (num2 === 0) {
            alert('It’s over 9000!');
            console.log('It’s over 9000!');
            return;
          }
          resultado = num1 % num2;
          break;
        default:
          alert('Operador inválido');
          return;
      }
  
      $resultadoDiv.text(`Resultado: ${resultado}`);
      console.log(`Resultado: ${resultado}`);
    }
  
    // Attach click event to button using jQuery
    $botaoCalcular.on('click', calcular);
  
    // Set interval for popup using jQuery
    setInterval(function() {
      alert('Please, use me...');
    }, 30000);
  
  });
  