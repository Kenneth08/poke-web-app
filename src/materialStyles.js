const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
    stellar:{ background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
    width: '100%',
    height: '100%'},
    unknown: "whitegray"
  };
  const modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#2E3532',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    // backgroundColor:'#2E3532'
  };

  export {typeColors,modal};