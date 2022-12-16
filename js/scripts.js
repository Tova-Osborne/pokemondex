let pokemonRepository = (function() {

  let pokemonList = [{
      name: "Bulbasaur",
      height: 2.04,
      types: [" Grass", " Poison"]
    },
    {
      name: "Charizard",
      height: 5.07,
      types: [" Fire", " Flying"]
    },
    {
      name: "Butterfree",
      height: 3.07,
      types: [" Bug", " Flying"]
    }
  ];
  //function to add new pokemon to the pokemonList array via push (upend the existing array). Check that the input is an object.
  function add(pokemon) {
    if (typeof pokemon != "object") {
      console.log("Please enter a valid Pokemon");
    } else {
      pokemonList.push(pokemon);
    }
  }
  //check that each object.keys matches the format
  Object.keys(pokemonList).forEach(item => console.log(pokemonList[item]));

  //getAll function to return all of the items in the pokemonList array
  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

//go to the pokemonRepository variable which should return the pokemon list via .gitAll*key is it's a funciton needs () and perform a forEach loop through each parameter of the pokemonRepo
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height < 2.5) {
    document.write(`
    Name: ${pokemon.name}
    Height: ${pokemon.height} - Wow, that's a small one!
    Types: ${pokemon.types}`)
  } else if (pokemon.height > 5) {
    document.write(`
    Name: ${pokemon.name}
    Height: ${pokemon.height} - Wow, that's a big one!
    Types: ${pokemon.types}`)
  } else
    document.write(`
    Name: ${pokemon.name}
    Height: ${pokemon.height}
    Types: ${pokemon.types}`)
});
