import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { onChange, onClick } = this.props;

    return (
      <div className="search-div">
        <label
          htmlFor="searchInput"
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            data-testid="query-input"
            type="text"
            id="searchInput"
            name="query"
            onChange={ onChange }
          />
        </label>

        <button
          data-testid="query-button"
          type="button"
          className="search-button"
          onClick={ onClick }
        >
          Buscar
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Search;
