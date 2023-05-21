
const getPokemon = async () => {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
    console.log(pokemon.data)
}


let headingTwo = document.querySelector('#pokemonName')
let headingThree = document.querySelector('#pokemonAbilities')
let image = document.querySelector('#pokemonImage')
let textInput = document.querySelector('#inputBar')
let button = document.querySelector('#searchButton')


button.addEventListener('click', async() => {
    let pok = textInput.value
    console.log(pok)
    let response = await axios.get(
         `https://pokeapi.co/api/v2/pokemon/${pok}`
    )
    let pokPic = response.data.sprites.front_default;
    console.log(pokPic)
    image.src = pokPic
    //
    let able = response.data.species.name;
    console.log(able)
    headingTwo.innerHTML = able;
    let moves =response.data.moves;
    let movesNames = moves.map(move => move.move.name)
    console.log(movesNames)
    headingThree.innerText = movesNames;
})

