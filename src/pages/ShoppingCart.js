import React, { Component } from 'react';
import PropTypes from 'prop-types';
import checkout from '../assets/checkout.png';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      totalOfCart: 0,
    };

    this.addCount = this.addCount.bind(this);
    this.subCount = this.subCount.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
  }

  componentDidMount() {
    this.setInitialState();
  }

  setInitialState() {
    const { location: { state: { cartItems } } } = this.props;

    this.setState({
      products: cartItems,
    });
  }

  addCount({ target }) {
    const { id } = target;
    const { products } = this.state;

    products.find((product) => {
      if (product.id === id) {
        product.quantity += 1;
      }
    });

    this.setState(({ quantity }) => (
      { quantity: quantity + 1 }
    ));
  }

  subCount({ target }) {
    const { id } = target;
    const { products } = this.state;

    products.find((product) => {
      if (product.id === id && product.quantity > 0) {
        product.quantity -= 1;
      }
    });

    this.setState(({ quantity }) => (
      { quantity: quantity - 1 }
    ));
  }

  removeProduct({ target }) {
    const { id } = target;
    const { products } = this.state;
    const newCart = products.filter((product) => product.id !== id);

    this.setState({
      products: newCart,
    });
  }

  render() {
    const { products, totalOfCart } = this.state;
    const emptyCart = (
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>);

    return (
      <div>
        {products.length !== 0 && (
          products.map(({ id, title, thumbnail, price, quantity }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p>{`R$${price}`}</p>
              <div>
                <label htmlFor="quantity">
                  Quantidade
                  <input
                    data-testid="shopping-cart-product-quantity"
                    name="quantity"
                    type="text"
                    value={ quantity }
                  />
                </label>

                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  id={ id }
                  onClick={ (event) => this.addCount(event) }
                >
                  +
                </button>

                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  id={ id }
                  onClick={ (event) => this.subCount(event) }
                >
                  -
                </button>

                <button
                  type="button"
                  id={ id }
                  onClick={ (event) => this.removeProduct(event) }
                >
                  x
                </button>
              </div>
            </div>
          ))
        )}
        {products.length === 0 && emptyCart }

        <label htmlFor="total">
          Total da Compra:
          <input
            type="text"
            name="total"
            value={ totalOfCart }
          />
        </label>

        <button
          type="submit"
        >
          <img src={ checkout } alt="Fechar Pedido" className="icons" />
        </button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartItems: PropTypes.arrayOf(
        PropTypes.object,
      ).isRequired,
    }),
  }).isRequired,
};

export default ShoppingCart;
