import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: props.amount,
    };
  }

  getNewQuantity = (state, action) => {
    switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
    }
  };

  handleClick = ({ target }) => {
    const {
      availableQuantity,
      updateItemAmount,
      updateItemCount,
      id,
    } = this.props;
    const { quantity } = this.state;
    const {
      dataset: { action },
    } = target;

    const newQuantity = this.getNewQuantity(quantity, action);

    if (newQuantity > 0 && newQuantity <= availableQuantity) {
      this.setState({ quantity: newQuantity });

      updateItemAmount(newQuantity, id);
      updateItemCount();
    }
  };

  render() {
    const { id, title, thumbnail, removeItemFromCart } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <button type="button" onClick={ () => removeItemFromCart(id, quantity) }>
          x
        </button>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <div className="quantity-container">
          <button
            type="button"
            data-action="decrement"
            onClick={ this.handleClick }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          <button
            type="button"
            data-action="increment"
            onClick={ this.handleClick }
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  updateItemAmount: PropTypes.func.isRequired,
  updateItemCount: PropTypes.func.isRequired,
};

export default CartItem;
