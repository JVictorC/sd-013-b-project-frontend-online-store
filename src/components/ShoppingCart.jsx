import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddCart from './AddCart';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: props.query,
      amountPrice: 0,
      itemsQuantity: props.itemQuantity,
      available: 0,
    };
    this.productsAvailable = this.productsAvailable.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.updateFromStorage = this.updateFromStorage.bind(this);
  }

  componentDidMount() {
    this.sumcartPrices();
    this.productsAvailable();
    this.updateFromStorage();
  }

  componentDidUpdate() {
    const { amountPrice } = this.state;
    if (amountPrice !== 0) {
      localStorage.setItem('amountPrice', amountPrice);
    }
  }

  async handleAddClick(id, index) {
    const { cartList } = this.state;
    const itemPrice = cartList.map((item) => item.price);
    await this.setState(({ itemsQuantity, amountPrice }) => ({
      itemsQuantity: { ...itemsQuantity, [id]: itemsQuantity[id] + 1 },
      amountPrice: amountPrice + (itemPrice[index] * itemsQuantity[id]),
    }));
  }

  handleRemoveClick(id, index) {
    const { cartList, amountPrice } = this.state;
    const itemPrice = cartList.map((item) => item.price);
    this.setState(({ itemsQuantity }) => ({
      itemsQuantity: { ...itemsQuantity, [id]: itemsQuantity[id] - 1 },
      amountPrice: amountPrice - itemPrice[index],
    }));
  }

  productsAvailable() {
    const { cartList } = this.state;
    const quantity = cartList.map((item) => item.available_quantity);
    this.setState({
      available: quantity,
    });
  }

  async sumcartPrices() {
    const { cartList, itemsQuantity } = this.state;
    // const cartPrice = cartList.reduce((acc, { price }) => acc + price, 0);
    const cartPrice = cartList.reduce((acc, { id, price }) => {
      acc += price * itemsQuantity[id];
      return Math.round(acc * 100) / 100;
    }, 0);

    this.setState(({ amountPrice }) => (
      { amountPrice: Math.round((amountPrice + cartPrice) * 100) / 100 }
    ));
  }

  updateFromStorage() {
    if (localStorage.getItem('amountPrice')) {
      const savedAmountPrice = localStorage.getItem('amountPrice');
      this.setState({
        amountPrice: savedAmountPrice,
      });
    }
  }

  render() {
    const { query } = this.props;
    const { available, amountPrice, itemsQuantity } = this.state;
    return (
      <div>
        <AddCart
          query={ query }
          onClickAdd={ this.handleAddClick }
          onClickRemove={ this.handleRemoveClick }
          totalItem={ itemsQuantity }
          available={ available }
        />
        <span>{`Preço a pagar: ${amountPrice}`}</span>
        <Link
          to="/shopping-cart/checkout-page"
          data-testid="checkout-products"
        >
          Finalizar compra
        </Link>
        <Link to="/">Voltar a tela inicial</Link>
        {/* <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> */}
      </div>
    );
  }
}

ShoppingCart.defaultProps = {
  itemQuantity: {},
};

ShoppingCart.propTypes = {
  query: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]).isRequired,
  itemQuantity: PropTypes.objectOf(PropTypes.number),
};
