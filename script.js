console.log("working")
const searchButton = document.querySelector("#searchButton")
const pokemonNameText = document.querySelector("#pNameText")
const pokemonDefaultImage = document.querySelector("#pFront")
const pokemonFrontShinyImage = document.querySelector("#pSFront")
const pokemonBackImage = document.querySelector("#pBack")
const pokemonBackShinyImage = document.querySelector("#pSBack")
const IdNumber = document.querySelector("#idNumber")
const type = document.querySelector('#pType')
const ability = document.querySelector('#pAbility')
const moves = document.querySelector('#pMoves')
const pokemonInput = document.querySelector("#inputbar")
const errorMessage = document.querySelector("#errorMessage")

//Hide all element below SearchBar
const elementIDs = ["hideElements1", "hideElements2", "hideElements3", "hideElements4"];
for (let i = 0; i < elementIDs.length; i++) {
    const elementToHide = document.getElementById(elementIDs[i]);
    if (elementToHide) {
        elementToHide.style.display = "none"; // Hide the elements
    }
}

//Reads the input value as lowercase and makes the interactive API call with button click
searchButton.addEventListener('click', async () => {

    //Show all elements under searchBar
    for (let i = 0; i < elementIDs.length; i++) {
        const elementToHide = document.getElementById(elementIDs[i]);
        if (elementToHide) {
            elementToHide.style.display = "block"; // Hide the elements
        }
    }
    let pokemon = pokemonInput.value.toLowerCase()
    
    //If undefined or null return an error to the user
    try {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

//drilling our data response and setting DOM
    // ID Number
    let pokemonNumber = response.data.id
    IdNumber.innerHTML = `ID Number: ${pokemonNumber}`

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
    AbilitiesList = document.createElement("lo"); // Create an unordered list
    for (let i = 0; i < response.data.abilities.length; i++) {
        let pokemonAbility = response.data.abilities[i].ability.name
        let abilityElement = document.createElement("li")
        abilityElement.textContent = pokemonAbility
        ability.appendChild(abilityElement)
    }

    // Get Moves
    movesList = document.createElement("lo"); // Create an unordered list
    for (let i = 0; i < response.data.moves.length; i++) {
        let pokemonMoves = response.data.moves[i].move.name
        let moveElement = document.createElement("li")
        moveElement.textContent = pokemonMoves
        moves.appendChild(moveElement)
    }
    //error message
    } catch (error) {
        // Show an error message in a popup
        alert(`Pokemon not found in database/API. Enter a valid Pokemon name!`);
        
        //Clear Results After accepting error
        pokemonNameText.innerHTML = ''
        pokemonDefaultImage.innerHTML = ''
        pokemonFrontShinyImage.innerHTML = ''
        pokemonBackImage.innerHTML = ''
        pokemonBackShinyImage.innerHTML = ''
        IdNumber.innerHTML = ''
        type.innerHTML = ''
        ability.innerHTML = ''
        moves.innerHTML = ''
        pokemonInput.innerHTML = ''

        //Hide all element below SearchBar
        for (let i = 0; i < elementIDs.length; i++) {
            const elementToHide = document.getElementById(elementIDs[i]);
            if (elementToHide) {
            elementToHide.style.display = "none"; // Hide the elements again
            }
        }
    }
})
