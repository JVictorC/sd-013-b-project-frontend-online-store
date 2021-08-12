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
  }

  componentDidMount() {
    this.sumcartPrices();
    this.productsAvailable();
  }

  handleAddClick(id) {
    this.setState(({ itemsQuantity }) => ({
      itemsQuantity: { ...itemsQuantity, [id]: itemsQuantity[id] + 1 },
    }));
  }

  handleRemoveClick(id) {
    this.setState(({ itemsQuantity }) => ({
      itemsQuantity: { ...itemsQuantity, [id]: itemsQuantity[id] - 1 },
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
    const { cartList } = this.state;
    const cartPrice = cartList.reduce((acc, { price }) => acc + price, 0);
    this.setState(({ amountPrice }) => (
      { amountPrice: amountPrice + parseFloat(cartPrice) }
    ));
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
        <button type="submit">Finalizar compra</button>
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
