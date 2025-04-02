const pokemonTypes = fetch('https://pokeapi.co/api/v2/type')
  .then(response => {
    if (!response.ok) throw new Error('Network error');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

export{pokemonTypes};