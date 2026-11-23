const pokemon_number =  document.getElementById("pknum");
const pokemon_name = document.getElementyById("pkname");
const pokemon_img = document.getElementyById("pkimg");

const pokemon_form = document.getElementyById("form");
const pokemon_input = document.getElementyById("imput");

const pokemon_prev = document.getElementyById("bnt-prev");
const pokemon_next = document.getElementyById("bnt-next");

let searchPokemon = 1;


const fetchpokemon = async (pokemon) => {
    const APIResponse = await fetch 
    ('https://pokeapi.co/api/v2/pokemon/${pokemon}');
    if(APIResponse.status ===200){
        const data = await APIResponse.json();
        return data;


}