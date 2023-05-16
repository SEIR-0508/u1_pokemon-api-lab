console.log('working');
let button = document.querySelector("#searchButton")


button.addEventListener('click', async () => {
      let pokemonName = document.querySelector("#pokemonName")
      let pokemonImage = document.querySelector("#pokemonImage")
      let textInput = document.querySelector("#inputBar").value
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}/`)
      // Total Moves 
      let totalMoves= document.querySelector("#total-moves")
      // Height
      let height = document.querySelector('#height')
      // Weight
      let weight = document.querySelector('#weight')
      //Abilities
      let abilitiesElement = document.querySelector('#abilities');
      let abilitiesHTML = response.data.abilities.map(ability => ability.ability.name).join(', ');

      
      console.log()
      // Image
      pokemonName.innerHTML = textInput
      pokemonImage.innerHTML = `<img src=${response.data.sprites.front_default} width="350">`
      console.log(response)
      // Abilities
      abilitiesElement.innerHTML = `<p>Abilities: ${abilitiesHTML}</p>`;
      // Height
      height.innerHTML = `<p>Height: ${response.data.height}</p>`
      // Weight
      weight.innerHTML = `<p>Weight: ${response.data.weight}</p>`
      // Total Moves 
      totalMoves.innerHTML = `<p>Total Moves: ${response.data.moves.length}</p>`
})





