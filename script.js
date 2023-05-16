//Worked with other chris + Brian if their stuff looks similar. 
//console.log("hello world")
const nextBtn = document.querySelector('#nextBtn')
const pvsBtn = document.querySelector('#pvsBtn')
const nameH = document.querySelector('#pkmnName')

let pkmnNum = 0;



let button = document.querySelector('#searchButton')




//Function to capitalize the pkmn names
function toUpper(name) 
{
    const captWord = name.charAt(0).toUpperCase()+ name.slice(1)
    return captWord
}

button.addEventListener('click', async () =>
{
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let pokedexNum = document.querySelector("#pkdxNum")
    let pkmnWeight = document.querySelector("#pkmnWeight")



    let textInput = document.querySelector("#inputBar").value

    let pkmnCall = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}/`)
    console.log(pkmnCall.data.name)
    console.log(pkmnCall.data.sprites.front_default)
    //console.log(pkmnCall.data.weight)
    //console.log(pkmnCall.data.weight)


    //Caps
    //pkmnNameUpper = pkmnCall.data.name
   // const captWord = pkmnNameUpper.charAt(0).toUpperCase()+ pkmnNameUpper.slice(1)




    nameH.innerHTML = toUpper(pkmnCall.data.name)
    pokedexNum.innerHTML = "#    " + pkmnCall.data.id
    pkmnWeight.innerHTML = pkmnCall.data.weight + "Kg"
    pokemonImage.innerHTML = `<img src =${pkmnCall.data.sprites.front_default}>`

})




/*

const getPkmn = async () => {
    for (let i = 1; i < 4; i++) {
      let pkmnNum = i;
      const pkmnName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmnNum}/`);

      console.log(pkmnName.data.name);
      //Sets h1 to the name
      nameH.innerHTML = pkmnName.data.name
    }
}

*/
//getPkmn()


//These dont work with the number or other boxes
//I've spent most of the night dealing with them and
//I'm over it at this point



nextBtn.addEventListener('click', async () =>
{
pkmnNum = pkmnNum += 1
const pkmnName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmnNum}/`);
  console.log(pkmnName.data.name);
  nameH.innerHTML = toUpper(pkmnName.data.name)
  pokemonImage.innerHTML = `<img src =${pkmnName.data.sprites.front_default}>`

})


pvsBtn.addEventListener('click', async () =>
{
pkmnNum = pkmnNum -= 1
if (pkmnNum >= 1)
{
   const pkmnName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmnNum}/`);
  console.log(pkmnName.data.name);
  nameH.innerHTML = toUpper(pkmnName.data.name)
  pokemonImage.innerHTML = ""
  pokemonImage.innerHTML = `<img src =${pkmnName.data.sprites.front_default}>`
}
else
{
   // const pkmnName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmnNum}/`);
    console.log("You're at the first pokemon!");
    nameH.innerHTML = "You're at the first pokemon"
    pokemonImage.innerHTML = ""

}

})



