/*
Quando clicar no pokemon da listagem, temos que esconder o cartão do pokemón aberto e mostrar o cartão do pokemon correspondente ao que foi selecionado na listagem

pra isso, vamos precisar trabalhar com dois elementos:
1 - listagem
2 - cartão do pokemón

precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemón

- remover a classe "aberto" só do cartão que está aberto
- ao clicar em um pokemón da listagem, pegamos o id desse pokemon para saber qual cartão mostrar
- remover a classe "ativo" que marca o pokemón selecionado
- adicionar a classe "ativo" no item da lista selecionado
*/

//precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const pokemonListSelection = document.querySelectorAll('.pokemon')
const pokemonCards = document.querySelectorAll('cartao-pokemon')

//vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemón

pokemonListSelection.forEach(pokemon => {

    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemón

    pokemon.addEventListener('click', () => {

    //remover a classe "aberto" só do cartão que está aberto

    const openedPokemonCard = document.querySelector('.aberto')
    openedPokemonCard.classList.remove('aberto')

    //ao clicar em um pokemón da listagem, pegamos o id desse pokemon para saber qual cartão mostrar
    
    const idSelectedPokemon = pokemon.attributes.id.value

    const pokemonIdToOpen = 'cartao-' + idSelectedPokemon

    const openPokemonCard = document.getElementById(pokemonIdToOpen)
    openPokemonCard.classList.add('aberto')

    //remover a classe "ativo" que marca o pokemón selecionado

    const activedListPokemon = document.querySelector ('.ativo')
    activedListPokemon.classList.remove('ativo')

    //adicionar a classe "ativo" no item da lista selecionado

    const listSelectedPokemon = document.getElementById(idSelectedPokemon)
    listSelectedPokemon.classList.add('ativo')
    })
})