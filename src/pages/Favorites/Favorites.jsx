import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const GridPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 10px;
`;

function Favorites() {
  const [favoritesPokemons, setFavoritesPokemons] = useState([]);
  useEffect(() => {
    const listPokemons = JSON.parse(window.localStorage.getItem("favorites"));
    setFavoritesPokemons(listPokemons);
  }, []);
  return (
    <div>
      <Header />
      <h2>Favorites</h2>
      <GridPokemonList>
        {favoritesPokemons.length ? (
          favoritesPokemons.map((pokemon) => (
            <PokemonCard key={pokemon} pokemonName={pokemon} />
          ))
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </GridPokemonList>
    </div>
  );
}

export default Favorites;
