let btnOdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco)
let contador = 0

function ordenarLivrosPorPreco() {
    if(contador == 0){
        let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
        contador += 1
        exibirOsLivrosNaTela(livrosOrdenados)
    }else {
        let livrosOrdenados = livros.sort((a,b) => b.preco - a.preco)
        contador = 0
        exibirOsLivrosNaTela(livrosOrdenados)
    }
}