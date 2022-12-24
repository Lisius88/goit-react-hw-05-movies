import styled from '@emotion/styled';

export const HomeList = styled.ul`
  display: grid;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 580px;
  grid-gap: 30px;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const HomeCard = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform var(--animation-duration) var(--timing-function);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const HomeItem = styled.li`
  margin-bottom: 20px;
`;
