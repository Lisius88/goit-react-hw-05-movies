import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  margin-bottom: 20px;
  margin-top: -20px;
  display: flex;
  align-items: center;
  padding: 8px 0;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orange;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.object.isRequired,
};
