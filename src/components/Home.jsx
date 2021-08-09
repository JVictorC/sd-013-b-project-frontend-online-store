import React from 'react';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/cart">
          <span><BiCartAlt size={ 40 } /></span>
        </Link>
      </div>
    );
  }
}
