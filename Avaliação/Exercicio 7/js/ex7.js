let filmes = []; 
let filmesFiltrados = []; 

function cadastrarFilme() {
  let nomeInput = document.getElementById('nomeFilme');
  let anoInput = document.getElementById('anoFilme');
  let generoInput = document.getElementById('generoFilme');
  let classEtariaInput = document.getElementById('classEtaria');


  //prettier-ignore
  if((nomeInput instanceof HTMLInputElement) && (anoInput instanceof HTMLInputElement)
    && (generoInput instanceof HTMLInputElement) && (classEtariaInput instanceof HTMLInputElement)){
      let nome = nomeInput.value;  
      let ano = parseInt(anoInput.value);  
      let genero = generoInput.value;  
      let classEtaria = parseInt(classEtariaInput.value);

      if (nome && !isNaN(ano) && genero && !isNaN(classEtaria)) {
        filmes.push({ nome, ano, genero, classEtaria });
        nomeInput.value = '';
        anoInput.value = '';
        generoInput.value = '';
        classEtariaInput.value = '';
        listarFilmes(filmes, 'listaFilmes');
      } else {
        alert('Preencha todos os campos corretamente.');
      }
  }
}

function listarFilmes(lista, tipo) {
  let listaFilmes = document.getElementById('listaFilmes');
  let listaFiltrados = document.getElementById('listaFiltrados');

  if (
    listaFilmes instanceof HTMLUListElement &&
    listaFiltrados instanceof HTMLUListElement
  ) {
    if (tipo === 'listaFilmes') {
      exibirConteudo(lista, listaFilmes); 
    } else if (tipo === 'listaFiltrados') {
      exibirConteudo(lista, listaFiltrados); 
    }
  }
}

function exibirConteudo(lista, listaElmentos) {
  while (listaElmentos.firstChild) {
    listaElmentos.removeChild(listaElmentos.firstChild);
  }

  // Adiciona os itens à lista
  lista.forEach((filme) => {
    let item = document.createElement('li');
    item.textContent = `Nome: ${filme.nome}, Ano: R$ ${filme.ano}, Gênero: ${filme.genero}, Classificação Etária: ${filme.classEtaria}`;
    listaElmentos.appendChild(item);
  });
}

function filtrarFilmes() {
  let filtroPorNomeInput = document.getElementById('filtroNome');
  let filtroPorGeneroInput = document.getElementById('filtroGenero');
  let filtroPorAnoInput = document.getElementById('filtroAno');

  //prettier-ignore
  if ((filtroPorNomeInput instanceof HTMLInputElement) && (filtroPorGeneroInput instanceof HTMLInputElement) && (filtroPorAnoInput instanceof HTMLInputElement)) {
    let filtroPorNome = filtroPorNomeInput.value.toLowerCase();
    let filtroPorGenero = filtroPorGeneroInput.value.toLowerCase();
    let filtroPorAno = filtroPorAnoInput.value.toLowerCase();

    filmesFiltrados = filmes.filter((filme) => {
      //prettier-ignore
      return ((filtroPorNome === '' || filme.nome.toLowerCase().includes(filtroPorNome)) &&
        (filtroPorGenero === '' || filme.categoria.toLowerCase().includes(filtroPorGenero)) &&
    (filtroPorAno === "" || filme.ano.toLowerCase().includes(filtroPorAno)));
    });

    listarFilmes(filmesFiltrados, 'listaFiltrados');
    filtroPorNomeInput.value = '';
    filtroPorGeneroInput.value = '';
    filtroPorAnoInput.value = '';
  }
}

function removerFilmesFiltrados() {
  filmes = filmes.filter((filme) => !filmesFiltrados.includes(filme));
  filmesFiltrados = []; // Limpa a lista de filtrados após a remoção
  listarFilmes(filmes, 'listaFilmes');
  listarFilmes(filmesFiltrados, 'listaFiltrados');
}