console.log("working")

let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let pokemonSpecies = document.querySelector("#pokemonSpecies")

    let textInput = document.querySelector("#inputBar").value

    //Axios call goes here
    let pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`) // Selecting the pokemon
    console.log(pokemonResponse)

    let pokeName = pokemonResponse.data.name
    console.log(pokeName)
    let pokePic = pokemonResponse.data.sprites.front_default
    console.log(pokePic)
    //remember to use Async and Await!
    //DOM Setters go here
    pokemonImage.src= pokePic
})