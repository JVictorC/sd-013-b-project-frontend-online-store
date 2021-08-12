import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    const { product: { price, quantidade, available_quantity: available } } = this.props;
    this.state = {
      totalPrice: price,
      quantidade,
      available,
    };
    this.handleQuant = this.handleQuant.bind(this);
    this.menos = this.menos.bind(this);
    this.mais = this.mais.bind(this);
  }

  handleQuant() {
    const { product: { price } } = this.props;

    this.setState(({ quantidade }) => ({
      totalPrice: price * (quantidade),
    }));
  }

  menos() {
    const { quantidade: quant } = this.state;

    if (quant > 1) {
      this.setState(({ quantidade }) => ({
        quantidade: quantidade - 1,
      }));
    }
    this.handleQuant();
  }

  mais() {
    const { available, quantidade: quant } = this.state;

    if (quant < available) {
      this.setState(({ quantidade }) => ({
        quantidade: quantidade + 1,
      }));
    }
    this.handleQuant();
  }

  render() {
    const { product } = this.props;
    const { totalPrice, quantidade, available } = this.state;

    return (
      <div className="cart-item">
        <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
        <h5>{`valor unitário: R$ ${product.price}`}</h5>
        <button
          style={ { width: '50px' } }
          type="button"
          onClick={ this.menos }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <h5 data-testid="shopping-cart-product-quantity">
          {`${quantidade}`}
        </h5>
        <button
          style={ { width: '50px' } }
          type="button"
          onClick={ this.mais }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <h5>{`Total: R$ ${totalPrice}`}</h5>
        <h5>
          {`Quantidade em estoque: ${available}`}
        </h5>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    quantidade: PropTypes.string,
    available_quantity: PropTypes.string,
  }).isRequired,
};

export default CartItem;
