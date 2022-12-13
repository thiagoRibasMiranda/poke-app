/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  attackConvert,
  defenseConvert,
  hpConvert,
  specialAttackConvert,
  specialDefenseConvert,
  speedConvert,
} from "../../constants/constStats";
// import "./PokemonStats.css";

const StyledStats = styled.div`
  margin: 0 auto;
  width: 94%;
  border-color: rgb(15 23 42);
  border-width: 1px;
`;

const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Progress = styled.section`
  height: 8px;
  background-color: rgb(229 231 235);
  border-radius: 9999px;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.width}%;
  height: 7px;
  background-color: rgb(37 99 235);
  border-radius: 9999px;
`;

function PokemonStats({ name, baseState }) {
  let width = null;
  if (name === "hp") {
    width = baseState * hpConvert;
  } else if (name === "attack") {
    width = baseState * attackConvert;
  } else if (name === "defense") {
    width = baseState * defenseConvert;
  } else if (name === "special-attack") {
    width = baseState * specialAttackConvert;
  } else if (name === "special-defense") {
    width = baseState * specialDefenseConvert;
  } else {
    width = baseState * speedConvert;
  }

  return (
    <StyledStats>
      <StyledSpan>
        <span>{name}</span>
        <span>{baseState}</span>
      </StyledSpan>
      <Progress>
        <ProgressBar width={width} />
      </Progress>
    </StyledStats>
  );
}

export default PokemonStats;
