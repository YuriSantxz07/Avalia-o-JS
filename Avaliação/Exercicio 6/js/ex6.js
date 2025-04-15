function obterNumeros() {
    let entradaNum1 = document.getElementById('num1');
    let entradaNum2 = document.getElementById('num2');
  
    //prettier-ignore
    if ((entradaNum1 instanceof HTMLInputElement) && (entradaNum2 instanceof HTMLInputElement)) {
        let num1 = parseInt(entradaNum1.value);
        let num2 = +(entradaNum2.value);
        
        return { num1, num2 };
      }
    return { num1: 0, num2: 0 }; 
  }
  
function exibirResultado(resultado) {
    let saida = document.getElementById('resultado');
    if (saida instanceof HTMLElement) {
      saida.textContent = resultado;
    }
  }
  
  const somar = function (a, b) {
    return a + b;
  };
  
  const subtrair = function (a, b) {
    return a - b;
  };
  
  const multiplicar = function (a, b) {
    return a * b;
  };
  
  const dividir = function (a, b) {
    if (b === 0) {
      return 'Não é possivel dividir por 0';
    }
    return a / b;
  };

  const potenciacao = function (a, b) {
    return Math.pow(a, b);
  };


  //Não utilizei callback para radiciação pois só utiliza 1 dos inputs de numero

  function calcular(operacao) {
    let numeros = obterNumeros(); 
    let num1 = numeros.num1; 
    let num2 = numeros.num2; 
    let resultado;
  
    switch (operacao) {
      case 'soma':
        resultado = somar(num1, num2);
        break;
      case 'subtracao':
        resultado = subtrair(num1, num2);
        break;
      case 'multiplicacao':
        resultado = multiplicar(num1, num2);
        break;
      case 'divisao':
        resultado = dividir(num1, num2);
        break;
      case 'potenciacao':
        resultado = Math.pow(num1, num2);
        break;
      case 'radiciacao':
        resultado = Math.sqrt(num1);
        break;
      default:
        resultado = 'Operação inválida!';
    }
  
    exibirResultado(resultado);
  }