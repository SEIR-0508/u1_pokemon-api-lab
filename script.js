console.log("working")
const searchButton = document.querySelector("#searchButton")
const pokemonInput = document.querySelector("#inputbar")
// let pokemonImage = document.querySelector("#pokemonImage")
const pokemonNameText = document.querySelector("#pNameText")
const pokemonDefaultImage = document.querySelector("#pFront")
const pokemonFrontShinyImage = document.querySelector("#pSFront")
const pokemonBackImage = document.querySelector("#pBack")
const pokemonBackShinyImage = document.querySelector("#pSBack")
const numberDiv = document.querySelector("#idNumber") // added
const type = document.querySelector('#pType') // added
const ability = document.querySelector('#pAbility') // added

//Reads the input value as lowercase and makes the interactive API call with button click
searchButton.addEventListener('click', async () => {
    let pokemon = pokemonInput.value.toLowerCase()
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

//drilling our data response and setting DOM
    // ID Number
    let pokemonNumber = response.data.id
    numberDiv.innerHTML = `ID Number: ${pokemonNumber}`

    //Get pokemon name
    let pokemonName = response.data.species.name
    let pokemonNameText = document.getElementById("pNameText")
    pokemonNameText.innerHTML = pokemonName

    //Images
    //Get pokemon default front image
    let pokemonDefaultPNG = response.data.sprites.front_default
    pokemonDefaultImage.innerHTML = `<img src=${pokemonDefaultPNG}>`
    //Get pokemon shiny front image
    let pokemonFrontShinyPNG = response.data.sprites.front_shiny
    pokemonFrontShinyImage.innerHTML = `<img src=${pokemonFrontShinyPNG}>`
    //Get pokemon default back
    let pokemonBackPNG = response.data.sprites.back_default
    pokemonBackImage.innerHTML = `<img src=${pokemonBackPNG}>`
    //Get pokemon shiny back image
    let pokemonBackShinyPNG = response.data.sprites.back_shiny
    pokemonBackShinyImage.innerHTML = `<img src=${pokemonBackShinyPNG}>`

    // Get Type
    for (let i = 0; i < response.data.types.length; i++) {
        let pokemonType = response.data.types[i].type.name
        let typeElement = document.createElement("div")
        typeElement.textContent = pokemonType
        type.appendChild(typeElement)
    }

    // Get Abilities
    for (let i = 0; i < response.data.abilities.length; i++) {
        let pokemonAbility = response.data.abilities[i].ability.name
        let abilityElement = document.createElement("div")
        abilityElement.textContent = pokemonAbility
        ability.appendChild(abilityElement)
    }
    
})











    // // Get type
    // for (let i = 0; i < response.data.types.length; i++) {
    //     let pokemonType = response.data.types[i].type.name
    //     let typeElement = `${pokemonType}`
    //     type.innerHTML = typeElement
    // }

    // // Abiltites --done
    // for (let i = 0; i < response.data.abilities.length; i++) {
    //     let pokemonAbility = response.data.abilities[i].ability.name
    //     let abilityElement = `${pokemonAbility}`
    //     ability.innerHTML = abilityElement
    // }