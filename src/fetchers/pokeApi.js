const pokemonTypes = async ()=> {
const response = await fetch('https://pokeapi.co/api/v2/type');
if (!response.ok) {
  throw new Error('Network response was not ok');
}
const data = await response.json();
return data || []; 
}

const pokemonsByType = async (id)=> {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data || []; 
}

const pokemonDetail = async (id)=> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data || []; 
}

export{
  pokemonTypes,
  pokemonsByType,
  pokemonDetail
};