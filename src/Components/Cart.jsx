import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.totalCart = this.totalCart.bind(this);
  }

  componentDidMount() {
    this.totalCart();
  }

  totalCart() {
    const { card } = this.props;
    let total = 0;
    card.forEach((item) => {
      total += (item.price * item.quantity);
    });
    return total.toFixed(2);
  }

  hadlerClick(event, id) {
    const { del } = this.props;
    del(event);
    const cardLocal = JSON.parse(localStorage.getItem('card'));
    localStorage.setItem('card',
      JSON.stringify(cardLocal.filter(({ id: idLocal }) => idLocal !== id)));
  }

  render() {
    const { card, increase, decrease } = this.props;
    return (
      <div className="cart">
        <Link
          to="/"
        >
          <span role="img" aria-label="home">🏠</span>
        </Link>
        {
          card.length === 0
            ? (
              <h1 data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </h1>
            )
            : <h1>Seu carrinho</h1>
        }
        {
          card.map(({ title, price, thumbnail, id, quantity }) => (
            <div key={ id }>
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ thumbnail } alt={ title } />
              <p>
                { price }
              </p>
              <p data-testid="shopping-cart-product-quantity">
                <button
                  onClick={ decrease }
                  type="button"
                  data-testid="product-decrease-quantity"
                  id={ id }
                >
                  ➖
                </button>
                {quantity}
                <button
                  onClick={ increase }
                  type="button"
                  data-testid="product-increase-quantity"
                  id={ id }
                >
                  ➕
                </button>
              </p>
              <button onClick={ (e) => this.hadlerClick(e, id) } type="button" id={ id }>
                ❌
              </button>
            </div>
          ))
        }
        <p>
          Valor total da compra:
          {this.totalCart()}
        </p>
        <Link data-testid="checkout-products" to="/checkout">Finalizar Compra</Link>
      </div>
    );
  }
}

export default Cart;

Cart.propTypes = {
  card: PropTypes.arrayOf(String).isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
};
