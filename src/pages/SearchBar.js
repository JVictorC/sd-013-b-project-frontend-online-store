import React, { Component } from 'react';
import PropTypes from 'prop-types';
import search from '../assets/search.png';

class SearchBar extends Component {
  render() {
    const { query, handleChange, handleClick } = this.props;

    return (
      <div className="search-bar">
        <input
          className="search-input"
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
          <img
            className="icons"
            src={ search }
            alt=""
          />
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
