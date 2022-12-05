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


for (let i = 0; i < pokemonList.length; i++) {
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
}
