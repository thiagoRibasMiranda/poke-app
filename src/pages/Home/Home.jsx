import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { getPokemonList } from "../../services/PokemonService";

const GridPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 10px;
`;

function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList(0).then((res) => {
      setPokemonList(res.results);
    });
  }, []);

  return (
    <div className="Home">
      <Header />
      <GridPokemonList>
        {pokemonList.length ? (
          pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />
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

export default Home;
