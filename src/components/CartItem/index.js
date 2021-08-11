import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: props.amount,
    };
  }

  handleClick = ({ target }) => {
    const { dataset: { action } } = target;
    console.log(action);
    switch (action) {
    case 'increment':
      this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
      break;
    case 'decrement':
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
      break;
    default:
      break;
    }
  }

  render() {
    const { title, thumbnail } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ `foto do produto ${title}` } />
        <div>
          <button
            type="button"
            data-action="decrement"
            onClick={ this.handleClick }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          <button
            type="button"
            data-action="increment"
            onClick={ this.handleClick }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Cart;
