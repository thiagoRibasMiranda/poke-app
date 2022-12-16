/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getPokemon } from "../../services/PokemonService";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Loading from "../Loading/Loading";
import PokemonStats from "../PokemonStats/PokemonStats";
import PokemonTypes from "../PokemonTypes/PokemonTypes";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 8px;
  max-width: 220px;
  border-width: 1px;
  border-radius: 8px;
  border-color: rgb(229 231 235);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 120px;
`;

const StyledTypes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StyledHeading = styled.h3`
  text-align: center;
  margin: 0px;
  margin-bottom: 10px;
`;

const StyledButton = styled.div`
  margin: 0 auto;
`;

function PokemonCard({ pokemonName }) {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isHome, setIsHome] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    }
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
        <StyledCard>
          <div>
            <StyledImg
              alt={`${pokemon.name} img`}
              src={pokemon.sprites.front_default}
            />
            <StyledHeading>{pokemon.name}</StyledHeading>
            <StyledTypes>
              {pokemon.types.map((e) => (
                <PokemonTypes type={e.type.name} key={e.type.name} />
              ))}
            </StyledTypes>
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
          {isHome && (
            <StyledButton>
              <FavoriteButton pokemonName={pokemon.name} />
            </StyledButton>
          )}
        </StyledCard>
      )}
    </div>
  );
}

export default PokemonCard;
