//// establish DOM things ////

const catchBtn = document.querySelector("#searchButton");
const pokemonName = document.querySelector("#pokemonName");
const pokemonImage = document.querySelector("#pokemonImage");

const releaseBtn = document.getElementById('release');
const chooseBtn = document.getElementById('chooseYou');

const pokeNum = document.getElementById('pokeNum');
const pokeType = document.getElementById('pokeType');
const pokeHeight = document.getElementById('pokeHeight');
const pokeweight = document.getElementById('pokeWeight');
const pokeItems = document.getElementById('pokeItems');

const balls = document.querySelectorAll('#pokeBalls > img');

//// EVENT LISTENERS ////

catchBtn.addEventListener('click', () => pokeCatch());



//// FUNCTIONS ////

async function pokeCatch() {
    {
        let textInput = document.querySelector("#inputBar").value;
       
    
        //Axios call goes here
        //remember to use Async and Await!
        let response  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`);
        console.log(response);
        let pokePic = response.data.sprites.front_default;
        let pokeName = response.data.forms[0].name;
        //DOM Setters go here
        console.log(pokePic);
        console.log(pokeName);
        pokemonName.innerHTML = `<span>${pokeName}</span>`;
        pokemonImage.src = pokePic;
        
    }
}