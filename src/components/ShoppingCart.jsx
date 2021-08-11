import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddCart from './AddCart';

export default class ShoppingCart extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     emptyCart: true,
  //     cartList: props.cart,
  //   };
  // }

  render() {
    const { query } = this.props;

    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <AddCart query={ query } />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  query: PropTypes.string.isRequired,
};
