var listaFilmes = document.querySelector("#lista-filmes") // acessando o seletor do documento com id "lista-filmes"
var botaoAdic = document.querySelector("#botao-adic") // acessando o seletor do documento com id "botao-adic"
botaoAdic.addEventListener("click", adicionar)  // ao clicarmos iniciar a função 'adicionar'

// criando a função adicionar
function adicionar() {
    // criando a variaveis indicando que sera uma lista
    let listaImgsFilmes = Array() 
    let listaNomeFilmes = Array()

    var imgFilmes = prompt('Coloque aqui o link da imagem do filme:') // pedindo ao usuário o link das imagens
    listaImgsFilmes.push(imgFilmes) // adicionar à lista das imagens dos filmes os links que o usuario ira informar

    var i = 0 // criada para identificarmos os links na lista 

    // criando uma condição para identificar se o link é válido
    while(i < listaImgsFilmes.length){
        if(listaImgsFilmes[i].endsWith('jpg') || listaImgsFilmes[i].endsWith('jpeg')){
            var nomeDoFilme = prompt("Coloque aqui o nome do filme:") // pedindo o nome do filme ao usuário
            listaNomeFilmes.push(nomeDoFilme) // adicionando o nome do filme a lista
    
            for (var i = 0; i < listaImgsFilmes.length; i++) {
                listaFilmes.innerHTML += `<p>${nomeDoFilme}</p>` + `<img src=${listaImgsFilmes[i]}>` // definindo um novo conteudo de um elemento HTML 
            } // for para ir adicionando os links das imagens dos filmes e os nomes na pagina HTML atraves do innerHTML
        }
        else{
            alert("Link inválido. Aceitamos apenas links '.jpg' ou 'jpeg'")
        }
        i++ // a cada tentativa de adição de um link incrementar ele ou começar o código novamente se à afirmativa for falsa
    }
}