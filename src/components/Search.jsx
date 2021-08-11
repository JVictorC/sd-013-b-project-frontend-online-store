import React from 'react';

class Search extends React.Component {
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

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

export default Search;
