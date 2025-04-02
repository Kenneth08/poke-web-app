const pokemonTypes = async ()=> {
const response = await fetch('https://pokeapi.co/api/v2/type');
if (!response.ok) {
  throw new Error('Network response was not ok');
}
const data = await response.json();
return data || []; 
}

export{pokemonTypes};