import PropTypes from 'prop-types';
import React from 'react';
import QuantityControlButton from './QuantityControlButton';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productQuantity: props.product.qts,
      product: props.product,
    };
  }

  handleDecrease = (id) => {
    const cartProducts = JSON.parse(localStorage.getItem('product'));
    cartProducts.forEach((product, index) => {
      const { price } = cartProducts[index];
      if (product.itemId === id && cartProducts[index].qts > 1) {
        cartProducts[index].qts -= 1;
        cartProducts[index].totalPrice = price * cartProducts[index].qts;
        this.setState({
          productQuantity: cartProducts[index].qts,
        });
      }
      localStorage.setItem('product', JSON.stringify(cartProducts));
    });
  }

  handleIncrease = (id) => {
    const cartProducts = JSON.parse(localStorage.getItem('product'));
    cartProducts.forEach((product, index) => {
      const { price } = cartProducts[index];
      if (product.itemId === id) {
        cartProducts[index].qts += 1;
        cartProducts[index].totalPrice = price * cartProducts[index].qts;
        this.setState({
          productQuantity: cartProducts[index].qts,
        });
        localStorage.setItem('product', JSON.stringify(cartProducts));
      }
    });
  }

  handleClick = () => {
    const { onClick, product } = this.props;
    onClick(product.itemId);
  }

  render() {
    const { productQuantity, product } = this.state;

    return (
      <li>
        <QuantityControlButton
          onClick={ this.handleDecrease }
          id={ product.itemId }
          testid="product-decrease-quantity"
          symbol="-"
        />
        <span data-testid="shopping-cart-product-quantity">
          {` ${productQuantity} `}
        </span>
        <QuantityControlButton
          onClick={ this.handleIncrease }
          id={ product.itemId }
          testid="product-increase-quantity"
          symbol="+"
        />

        <span data-testid="shopping-cart-product-name">
          { `  ${product.title}` }
        </span>
        <span>
          { ` ----- Preço:  ${product.price * productQuantity}` }
        </span>
        <button type="button" onClick={ this.handleClick }>X</button>
      </li>
    );
  }
}

List.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default List;
