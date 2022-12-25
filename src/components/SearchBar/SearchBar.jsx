import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';
import { SearchButton, FormContainer } from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';
import * as yup from 'yup';
import PropTypes from 'prop-types';

let schema = yup.object().shape({
  search: yup.string().required(),
});

const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

const OurForm = styled(Form)`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid teal;
`;

export const SearchBar = ({ onSubmit }) => {
  const submit = (values, actions) => {
    onSubmit(values.search);
  };
  return (
    <FormContainer>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={submit}
        validationSchema={schema}
      >
        <OurForm autoComplete="off">
          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <SearchButton type="submit">
            <FaSearch />
          </SearchButton>
        </OurForm>
      </Formik>
    </FormContainer>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
