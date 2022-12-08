import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

function Favorites() {
  const [favoritesPokemons, setFavoritesPokemons] = useState([]);
  useEffect(() => {
    const listPokemons = JSON.parse(window.localStorage.getItem("favorites"));
    setFavoritesPokemons(listPokemons);
  }, []);
  return (
    <div>
      <h1>Favorites</h1>
      {favoritesPokemons.length ? (
        favoritesPokemons.map((pokemon) => (
          <PokemonCard key={pokemon} pokemonName={pokemon} />
        ))
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Favorites;
