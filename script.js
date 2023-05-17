let button = document.querySelector("#searchButton")

const getPokemon = async () => {
    const pokemonTypes = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const pokemon = pokemonTypes.data.results
    for (i=0; i<pokemon.length; i++) {
        let pokemonAppears = pokemon[i].name
    }
}




let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")
let moveImage = document.querySelector("#pokemonMove")
 //where does this need to be scoped?

button.addEventListener('click', async () => {
    getPokemon()
    let textInput = document.querySelector("#inputBar").value
    let moveTypes = await axios.get('https://pokeapi.co/api/v2/move')
    let move = moveTypes.data.results
    console.log(move)
    let announcement = document.querySelector("#announcement")
    let pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    let pokemonIndex = pokemonData.data.id
    let postPic = await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`)
    let randomInteger = Math.floor(Math.random() * 101)
    let moveInteger = move[randomInteger]
    let moveName = moveInteger.name
    console.log(moveName)
    let postMove = await axios.get(`https://pokeapi.co/api/v2/move/${randomInteger}`)
    let pokemonPic = postPic.request.responseURL
    pokemonImage.innerHTML = `<img src=${pokemonPic}>`
    announcement.innerText = `A wild ${textInput} appeared and used ${moveName}!`

    
    
        

     //Axios call goes here
     //remember to use Async and Await!
     //DOM Setters go here

 })