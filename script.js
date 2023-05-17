//// establish DOM things ////

const catchBtn = document.querySelector("#searchButton");
const pokemonName = document.querySelector("#pokemonName");
const pokemonImage = document.querySelector("#pokemonImage");
const pokemonStats = document.getElementById('pokeStats');

const pokeNum = document.getElementById('pokeNum');
const pokeType = document.getElementById('pokeType');
const pokeHeight = document.getElementById('pokeHeight');
const pokeWeight = document.getElementById('pokeWeight');
const pokeAbil = document.getElementById('pokeAbil');

const releaseBtn = document.getElementById('release');
const chooseBtn = document.getElementById('chooseYou');

const pokeBalls = document.querySelectorAll('#pokeBalls > img');


//// EVENT LISTENERS ////

catchBtn.addEventListener('click', () => pokeCatch());
chooseBtn.addEventListener('click', () => pokeChoose());
releaseBtn.addEventListener('click', () => hideStuff());

//// FUNCTIONS ////
function init() {
    hideStuff();
}

async function pokeCatch() {
    let textInput = document.querySelector("#inputBar").value;

    let response  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`);
    console.log(response);

    let pokePic = response.data.sprites.front_default;
    let pokeName = response.data.forms[0].name;
    let number = response.data.id;
    let weight = response.data.weight;
    let height = response.data.height;

    //ability and type take a little more thought because they have more than one thing.
    // two different approacehs used. for type i am assuming there will only be at max 2 types. for abilities, i'm allowing for as many as needed

    let type = response.data.types.length > 1 ? `${response.data.types[0].type.name}, ${response.data.types[1].type.name}` : response.data.types[0].type.name;
    let abil = ''
    for (i=0; i<response.data.abilities.length; i++) {
        abil = i === (response.data.abilities.length - 1) ? abil += response.data.abilities[i].ability.name : abil += `${response.data.abilities[i].ability.name}, `;
    }

    //DOM Setters go here
    console.log(pokePic);
    console.log(pokeName);

    pokemonName.style.visibility = `visible`;
    pokemonStats.style.visibility = 'visible';
    chooseBtn.style.visibility = 'visible';
    releaseBtn.style.visibility = 'visible';

    pokemonName.innerHTML = `${pokeName}`;
    pokemonImage.src = pokePic;
    pokeNum.innerHTML = `Num: ${number}`;
    pokeHeight.innerHTML = `Height: ${height}`;
    pokeWeight.innerHTML = `Weight: ${weight}`;
    pokeType.innerHTML = `Type: ${type}`
    pokeAbil.innerHTML = `Abilities: ${abil}`

    document.querySelector("#inputBar").value = '';   
}


function pokeChoose() {
    for (i=0; i<pokeBalls.length; i++) {
        if (pokeBalls[i].src.includes("pokeball")) {
            pokeBalls[i].src = pokemonImage.src;
            break;
        }
    }

    hideStuff();
}

function hideStuff() {
    pokemonName.style.visibility = `hidden`;
    pokemonStats.style.visibility = 'hidden';
    pokemonImage.src="tallgrass.png";
    chooseBtn.style.visibility = 'hidden';
    releaseBtn.style.visibility = 'hidden';
}

init()
