import React from 'react';
import * as API from '../services/api';

class SearchField extends React.Component {
  render() {
    showFiltered = async () => {
      const products = await API.getCategories;
      console.log(products);
    };

    return (
      <div className="search">
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default SearchField;
