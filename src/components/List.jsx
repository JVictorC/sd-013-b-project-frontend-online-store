import PropTypes from 'prop-types';
import React from 'react';
import QuantityControlButton from './QuantityControlButton';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productQuantity: 1,
      cartProducts: JSON.parse(localStorage.getItem('product')),
    };
  }

  handleDecrease = (title) => {
    const { cartProducts } = this.state;
    cartProducts.forEach((product, index) => {
      const { price } = cartProducts[index];
      if (product.title === title && cartProducts[index].qts > 1) {
        cartProducts[index].qts -= 1;
        cartProducts[index].variablePrice = price * cartProducts[index].qts;
        this.setState({
          productQuantity: cartProducts[index].qts,
        });
      }
      localStorage.setItem('product', JSON.stringify(cartProducts));
    });
  }

  handleIncrease = (title) => {
    const { cartProducts } = this.state;
    cartProducts.forEach((product, index) => {
      const { price } = cartProducts[index];
      if (product.title === title) {
        cartProducts[index].qts += 1;
        cartProducts[index].variablePrice = price * cartProducts[index].qts;
        this.setState({
          productQuantity: cartProducts[index].qts,
        });
        localStorage.setItem('product', JSON.stringify(cartProducts));
      }
    });
  }

  render() {
    const { product } = this.props;
    const { productQuantity, cartProducts } = this.state;
    const targetProduct = cartProducts
      .filter((matchingProd) => matchingProd.title === product.title);

    return (
      <li>
        <QuantityControlButton
          onClick={ this.handleDecrease }
          title={ product.title }
          testid="product-decrease-quantity"
          symbol="-"
        />
        <span data-testid="shopping-cart-product-quantity">
          {` ${targetProduct[0].qts} `}
        </span>
        <QuantityControlButton
          onClick={ this.handleIncrease }
          title={ product.title }
          testid="product-increase-quantity"
          symbol="+"
        />

        {/* <IncreaseButton onClick={ this.handleIncrease } title={ product.title } />
        <IncreaseButton onClick={ this.handleIncrease } title={ product.title } /> */}

        <span data-testid="shopping-cart-product-name">
          { `  ${product.title}` }
        </span>

        <span>
          { ` ----- Preço:  ${product.price * productQuantity}` }
        </span>
      </li>
    );
  }
}

List.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default List;
