import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddCart from './AddCart';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      cartList: props.query,
      amountPrice: 0,
      totalItems: 1,
      quantity: '',
      available: 0,
    };
    this.productsAvailable = this.productsAvailable.bind(this);
  }

  componentDidMount() {
    this.sumcartPrices();
    this.productsAvailable();
    this.getTotalItem();
  }

  getTotalItem() {
    const { query } = this.props;
    query.map(({ id }) => (
      this.setState(({ quantity }) => ({
        quantity: { ...quantity, [id]: 1 },
      }))
    ));
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
    const { quantity, loading, available, amountPrice } = this.state;
    const cEpt = <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    return (
      <div>
        {loading ? cEpt : <AddCart
          query={ query }
          onClickAdd={ this.handleAddClick }
          onClickRemove={ this.handleRemoveClick }
          totalItem={ quantity }
          available={ available }
        />}
        <span>{`Preço a pagar: ${amountPrice}`}</span>
        <button type="submit">Finalizar compra</button>
        <Link to="/">Voltar a tela inicial</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  query: PropTypes.string.isRequired,
};
