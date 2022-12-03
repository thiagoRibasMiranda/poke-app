export const getPokemon = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) =>
    res.json()
  );
};

export const getPokemonList = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(
    (res) => res.json()
  );
};
