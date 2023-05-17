// cached elements
const button = document.querySelector("#searchButton")
const pokemonName = document.querySelector("#pokemonName")
const pokemonImage = document.querySelector("#pokemonImage")
const textInput = document.querySelector("#inputBar")
const pokemonStats = document.querySelector('#pokemonStats')

// axios call
const getPokemon = async () => {
    const Pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon')
    console.log(Pokemon)
    }

    getPokemon()

    // 
    button.addEventListener('click', async ()=> {
    let name = textInput.value
    pokemonStats.innerHTML = ''
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
        )
        console.log(response)
        // drilling for data
        let pokePic = response.data.sprites.front_default
        let pokeStats = response.data.stats
        
        pokemonName.innerText = `${name}`
        pokemonImage.src = pokePic


        pokeStats.forEach(function(stat) {
            statElement =`<div>${stat.stat.name} ${stat.base_stat}</div>`
            
            pokemonStats.innerHTML += statElement

        })

        
})

textInput.addEventListener('keypress', async (e)=> {
    if (e.key === 'Enter') {
        e.preventDefault()
        let name = textInput.value
        pokemonStats.innerHTML = ''
        let response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
            )
            console.log(response)
            // drilling for data
            let pokePic = response.data.sprites.front_default
            let pokeStats = response.data.stats
            
            pokemonName.innerText = `${name}`
            pokemonImage.src = pokePic
    
    
            pokeStats.forEach(function(stat) {
            statElement =`<div>${stat.stat.name} ${stat.base_stat}</div>`
                
             pokemonStats.innerHTML += statElement
    
        })
    
    }     
 })


  