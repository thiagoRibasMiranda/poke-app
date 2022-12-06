/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getPokemon } from "../../services/PokemonService";
import Loading from "../Loading/Loading";
import PokemonStats from "../PokemonStats/PokemonStats";
import PokemonTypes from "../PokemonTypes/PokemonTypes";

function PokemonCard({ pokemonName }) {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemon(pokemonName).then((res) => {
      setPokemon(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name} img`}
            />
            {pokemon.types.map((e) => (
              <PokemonTypes type={e.type.name} key={e.type.name} />
            ))}
          </div>
          <div>
            {pokemon.stats.map((e) => (
              <PokemonStats
                baseState={e.base_stat}
                name={e.stat.name}
                key={e.stat.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
