import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { query, handleChange, handleClick } = this.props;

    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          name="query"
          value={ query }
          onChange={ handleChange }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchBar;
