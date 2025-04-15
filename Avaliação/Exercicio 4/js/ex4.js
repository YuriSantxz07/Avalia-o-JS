function compararNumeros() {
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);

   
    if(n1 === n2){
        document.getElementById('resultado').innerText = "Digite dois números diferentes.";
        return;
    }

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultado').innerText = "Digite dois números válidos.";
        return;
    }
    
   

    let maior = Math.max(n1, n2);
    let menor = Math.min(n1, n2);
    let diferenca = maior - menor;

    let multiplo5 = [];
    for (let i = menor; i <= maior; i++) {
      if (i % 5 === 0) {
        multiplo5.push(i);
      }
    }

    document.getElementById('resultado').innerHTML = `
      <p>Maior número: ${maior}</p>
      <p>Menor número: ${menor}</p>
      <p>Diferença: ${diferenca}</p>
      <p>Múltiplos de 5: ${multiplo5.join(', ') || '0'}</p>
    `;
  }
