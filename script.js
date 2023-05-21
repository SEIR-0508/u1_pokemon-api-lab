console.log(`working`)

    const button = document.querySelector(`#searchbutton`)
    
button.addEventListener('click', async () => { 
    let searchBar = document.querySelector(`#search`).value
    let pokemonNameReturn = document.querySelector(`#pokemon`)
    let idReturn = document.querySelector(`#num`)
    let imgReturn = document.querySelector(`#pokemon-img`)
    let htReturn = document.querySelector(`height`)
    let wtReturn = document.querySelector(`weight`)
    let xpReturn = document.querySelector(`xp`)
    let abilityReturn = document.querySelector(`ability`)
    
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchBar}`)
    console.log(response.data)
    let pokemon = response.data
    pokemonNameReturn.innerHTML = pokemon.name
    let number = response.data.id
    idReturn.innerHTML = `No.${number}`
    let image = response.data.sprites.front_default
    imgReturn.src = image
    let height = response.data.height
    htReturn.innerHTML = height
    let weight = response.data.weight
    wtReturn.innerHTML = `Weight: ${weight}`
    let xp = response.data.base_experience
    xpReturn.innerHTML = `Base XP: ${xp}`
    let ability = response.data.abilities.ability[0]
    abilityReturn.innerHTML = `Starting ability: ${ability}`
})
