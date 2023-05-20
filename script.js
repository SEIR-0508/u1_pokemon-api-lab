//Pokemon

let button = document.querySelector("#searchButton")


button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar")
    let poke = textInput.value.toLowerCase()
    //axios call goes here
    let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        
    pokemonName.innerHTML = `${pokemon.data.name}`
    pokemonImage.innerHTML = `<img src ="${pokemon.data.sprites.other["official-artwork"].front_default}"/>`
    
    console.log(pokemon)
  
  }
)

