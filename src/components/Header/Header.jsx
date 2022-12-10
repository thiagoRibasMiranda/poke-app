import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  background-color: whitesmoke;
`;

const Title = styled.h1`
  margin: 20px;
`;

const Nav = styled.nav`
  margin: 20px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  font-weight: bold;
`;

function Header() {
  return (
    <StyledHeader>
      <Title>Poke App</Title>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
