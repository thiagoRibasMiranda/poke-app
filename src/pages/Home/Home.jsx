import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { getPokemonList } from "../../services/PokemonService";

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
      <div>
        {pokemonList.length ? (
          pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />
          ))
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
