console.log('working')


const getPokemon = async () => {
    pokemonSpecies = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log(dogBreeds.data.message)
 }

 getBreeds()






let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
        

    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here

}
)
