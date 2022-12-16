export const getPokemon = (pokemonName) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`).then(
    (res) => res.json()
  );
};

export const getPokemonList = (offset) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`
  ).then((res) => res.json());
};
