
const pokemons_number = 151;

async function gottaCatchEmAll(){
    //Fetch pokemons info from pokeApi
    //Create HTML list elements 
    for (let id = 1; id <= pokemons_number; id++) {
        const pokemonInfo = await getPokemon(id);
        createListSprite(pokemonInfo);
    }
}

async function getPokemon(id){
//Fetch pokemon info
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    return(pokemon);
}

function createListSprite(pokemon){
    //Preformato de contenido 
    //const name=pokemon.name.toString();
    //const viewName=name[0].toUpperCase()+name.slice(1);
    
    // 64x64 sprite-link https://img.pokemondb.net/sprites/sword-shield/icon/${name}.png
   
   
    const name = pokemon.name.toString();
    const listSprite = `<img src="https://img.pokemondb.net/sprites/home/normal/${name}.png">`;
    const listNumber = pokemon.id.toString();
    //Formato
    const listHTML=`${listSprite}<p>${listNumber}.</p><p class="name">${name}</p>`

    //Crear nueva estructura HTML
    const listElement = document.createElement("div");
    
    listElement.classList.add(name);
    listElement.id=name
    listElement.classList.add("pokemon-container") ;
    listElement.classList.add("row") ;
    listElement.innerHTML = listHTML;  

    //Referencia "append" a HTML
    let poke_list = document.getElementById("poke_list");
    poke_list.appendChild(listElement);
}


gottaCatchEmAll();