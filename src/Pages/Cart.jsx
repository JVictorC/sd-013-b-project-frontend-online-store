import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      quanti: 1,
    };
  }

  calculation = ({ target }) => {
    if (target.id === 'add') {
      this.toAdd();
    } else if (target.id === 'decrease') {
      this.toRemove();
    }
  }

  toAdd = () => {
    this.setState((prevState) => ({ quanti: prevState.quanti + 1 }));
  }

  toRemove = () => {
    this.setState((prevState) => ({ quanti: prevState.quanti - 1 }));
  }

  render() {
    const { quanti } = this.state;
    const { products } = this.props;

    if (products.length > 0) {
      return (
        <div>
          { products.map((product) => (
            <div key={ product.id }>
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <p>{ product.price }</p>
              <img src={ product.thumbnail } alt="" />
              <p>
                Quantidade:
                <span
                  data-testid="shopping-cart-product-quantity"
                >
                  {quanti}
                </span>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ this.calculation }
                  id="add"
                >
                  +
                </button>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  id="decrease"
                  onClick={ this.calculation }
                >
                  -
                </button>
              </p>
            </div>
          )) }
          <div>
            <h1>
              Valor total da compra:$
            </h1>
          </div>
        </div>
      );
    }

    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default Cart;
