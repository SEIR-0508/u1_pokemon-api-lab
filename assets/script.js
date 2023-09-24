// THIS IS PULLING URL PROPERLY
const button = document.querySelector('#searchButton')
const pokemonImage = document.querySelector('#pokemonImage')
const pokemonName = document.querySelector('#pokemonName')
const pokemonNumber = document.querySelector('#pokemonNumber')
const pokemonType = document.querySelector('#pokemonType')
const textInput = document.querySelector('#inputBar')
const height = document.querySelector('#pokeHeight')
const weight = document.querySelector('#pokemonWeight')
const abilities = document.querySelector('#pokeAbilities')
button.addEventListener('click', async (e) => {
   pokemonImage.innerHTML = ""
   pokemonType.innerHTML = ""
   abilities.innerHTML = ""
   e.preventDefault()
   let input = textInput.value
   let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)



   
   console.log(response)
   
   
   pokemonNumber.innerText = response.data.id
   pokemonName.innerText = response.data.name
   pokemonImage.src = response.data.sprites.front_default
   height.innerText = response.data.height
   weight.innerText = response.data.weight
   response.data.abilities.forEach(ability => {
      const li = document.createElement('li')
      li.innerText = ability.ability.name
      abilities.appendChild(li)
   })

      response.data.types.forEach(type => {
         const li = document.createElement('li')
         li.innerText = type.type.name
         pokemonType.appendChild(li)
   })
   console.log(response.data.height)
})