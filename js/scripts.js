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
//function to add new pokemon to the pokemonList array via push (upend the existing array)
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
//getAll function to return all of the items in the pokemonList array
  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll.forEach(){
  if (pokemonRepository.getAll.height < 2.5) {
  document.write(`
    Name: ${pokemonRepository.getAll.name}
    Height: ${pokemonRepository.getAll.height} - Wow, that's a small one!
    Types: ${pokemonRepository.getAll.types}`)
} else if (pokemonRepository.getAll.height > 5) {
  document.write(`
    Name: ${pokemonRepository.getAll.name}
    Height: ${pokemonRepository.getAll.height} - Wow, that's a big one!
    Types: ${pokemonRepository.getAll.types}`)
} else
  document.write(`
    Name: ${pokemonRepository.getAll.name}
    Height: ${pokemonRepository.getAll.height}
    Types: ${pokemonRepository.getAll.types}`)
}

// pokemonList.forEach((name, height, types) => {
//   document.write(`
//     Name: ${name}
//     Height: ${height}
//     Types: ${types}`)
// });

/*for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 2.5) {
    document.write(`
      Name: ${pokemonList[i].name}
      Height: ${pokemonList[i].height} - Wow, that's a small one!
      Types: ${pokemonList[i].types}`)
  } else if (pokemonList[i].height > 5) {
    document.write(`
      Name: ${pokemonList[i].name}
      Height: ${pokemonList[i].height} - Wow, that's a big one!
      Types: ${pokemonList[i].types}`)
  } else
    document.write(`
      Name: ${pokemonList[i].name}
      Height: ${pokemonList[i].height}
      Types: ${pokemonList[i].types}`)
}*/
