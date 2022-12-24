import { NavLink } from 'react-router-dom';
import { Header, Nav } from './Navagation.styled';
import styled from '@emotion/styled';

const LinkDesign = styled(NavLink)`
  display: block;
  padding: 12px;
  font-size: 18px;
  color: #000000;

  &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  return (
    <Header>
      <Nav>
        <LinkDesign to="/">Home</LinkDesign>
        <LinkDesign to="/movies">Movies</LinkDesign>
      </Nav>
    </Header>
  );
};
