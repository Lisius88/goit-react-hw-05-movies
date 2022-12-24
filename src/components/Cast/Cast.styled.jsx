import styled from '@emotion/styled';

export const CastList = styled.ul`
  padding: 0;
  background-color: orange;
  display: grid;
  max-width: 1000px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 500px;
  grid-gap: 20px;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Castitem = styled.li`
  text-align: center;
  padding: 15px;
`;

export const CastCard = styled.img`
  height: 430px;
  width: 100%;
  object-fit: cover;
  transition: transform var(--animation-duration) var(--timing-function);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const NoCast = styled.p`
  text-align: center;
  text-transform: uppercase;
  color: orange;
`;
