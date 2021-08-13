import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartList extends Component {
  constructor(props) {
    super(props);

    

  }

  render() {
    const { obj } = this.props
    const {  title, thumbnail, price, quantidade } = obj;
    return (
      <section>
        <div>
          <img src={ thumbnail } alt={ title } />
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
          <span>{ price }</span>
        </div>
      </section>
    );
  }
}

CartList.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    quantidade: PropTypes.number,
  }).isRequired,
};
export default CartList;