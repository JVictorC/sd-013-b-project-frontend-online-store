import React from 'react';

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

export default SearchBar;
