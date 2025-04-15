function obterValorUnitario(produto) {
    let entradaPreco = document.getElementById("preco");
    if(entradaPreco instanceof HTMLInputElement){
        let preco = Number(entradaPreco.value);

        switch (produto) {
            case 'cafe':
              return preco; 
            case 'leite':
              return preco;
            case 'manteiga':
              return preco;
            case 'biscoito':
              return preco;
            case 'chocolate':
              return preco;
            case 'agua':
              return preco;
            case 'refrigerante':
              return preco;
            case 'arroz':
              return preco;
            case 'macarrao':
              return preco;
            case 'feijao':
                return preco;
            default:
              alert('Produto inválido!');
              return null;
          }
    }

  }
  
  const obterPreco = function () {
    const preco = prompt('Digite o preço desejada:');
    if (preco === null) {
      alert('Operação cancelada.');
      return null;
    }
    let numero = parseFloat(preco);
    if (isNaN(numero) || numero <= 0) {
      alert('preco inválido! Insira um número positivo.');
      return null;
    }
    return numero;
  };

  const obterQuantidade = function () {
    let entradaQuantidade = document.getElementById("quantidade");
    if(entradaQuantidade instanceof HTMLInputElement){
      let quantidade = Number(entradaQuantidade.value);
      if (quantidade === null) {
        alert('Operação cancelada.');
        return null;
      }
      
      if (isNaN(quantidade) || quantidade <= 0) {
        alert('Quantidade inválida! Insira um número positivo.');
        return null;
      }
      return quantidade;
    }
    
  };
  
  function calcularTotal(produto, quantidade) {
    let valorUnitario = obterValorUnitario(produto);
  
    // prettier-ignore
    if ((valorUnitario === null) || (quantidade === null)) {
          return null;
        }
    return valorUnitario * quantidade;
  }
  
  function realizarCalculoCompra(callback) {
    let produtoSelect = document.getElementById('produto');
  
    if (!(produtoSelect instanceof HTMLSelectElement)) {
      alert('Erro ao obter o tipo de produto.');
      return;
    }
  
    let produto = produtoSelect.value;
    let quantidade = obterQuantidade();
    let total = calcularTotal(produto, quantidade);
  
    callback(total);
  }
  
  function exibirResultado(valorTotal) {
    let saida = document.getElementById('resultadoCompra');
    let produtos = document.getElementById("produto");
  
    if (saida instanceof HTMLElement && produtos instanceof HTMLSelectElement) {
        let produto = produtos.textContent;
      if (valorTotal === null) {
        saida.textContent = 'Total: Operação não realizada.';
        return;
      }
      saida.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    let botaoCalcular = document.getElementById('calcularCompra');
  
    if (botaoCalcular instanceof HTMLButtonElement) {
      botaoCalcular.addEventListener('click', function () {
        realizarCalculoCompra(exibirResultado); 
      });
    }
  });
  