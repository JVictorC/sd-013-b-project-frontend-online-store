import React from 'react';

import { Link } from 'react-router-dom';
import ListaCat from './ListaCat';
import ListItems from '../componentes/ListItems';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchField extends React.Component {
  constructor() {
    super();

    this.state = {
      productsList: [],
    };
  }

  getId = async ({ target }) => {
    const catId = target.id;
    const productsList = await getProductsFromCategoryAndQuery(catId);
    this.setState({
      productsList: productsList.results,
    });
  }

  render() {
    const { productsList } = this.state;
    return (
      <div className="search">
        <ListItems productsList={ productsList } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <ListaCat getId={ this.getId } />
      </div>
    );
  }
}

export default SearchField;
