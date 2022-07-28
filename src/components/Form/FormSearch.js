import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

function FormSearch({ search, setSearch, fetchResults }) {
  return (
    <Form onSubmit={() => {
      fetchResults();
    }}
    >
      <Form.Field>
        <Input
          icon="search"
          placeholder="Search repos..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Form.Field>
    </Form>
  );
}

FormSearch.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
};

export default FormSearch;
