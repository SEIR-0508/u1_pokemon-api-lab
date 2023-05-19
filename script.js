console.log(`working`)
const search = document.getElementById(`searchbutton`)

search.addEventListener(`click`, async () => {
    let searchInput = document.getElementById(`search`).value
    response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    console.log(response)
})




