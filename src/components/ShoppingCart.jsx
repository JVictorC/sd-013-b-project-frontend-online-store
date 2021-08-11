import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddCart from './AddCart';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: props.items,
      amountPrice: 0,
      totalItems: 0,
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleAddClick() {
    const { totalItems, props: { items: { quantity } } } = this.state;
    this.setState(() => ({ totalItems: totalItems + 1 }));
    if (totalItems === quantity) {
      this.setState({
        totalItems: quantity,
      });
    }
  }

  handleRemoveClick() {
    const { totalItems } = this.state;
    this.setState(() => ({ totalItems: totalItems - 1 }));
    if (totalItems === 0) {
      this.setState({
        totalItems: 0,
      });
    }
  }

  render() {
    const { query } = this.props;
    const cEpt = <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    return (
      <div>
        {query.length <= 0 ? cEpt : <AddCart
          query={ query }
          onClickAdd={ this.handleAddClick }
          onClickRemove={ this.handleRemoveClick }
        />}
        <button type="submit">Finalizar compra</button>
        <Link to="/">Voltar a tela inicial</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  query: PropTypes.string.isRequired,
};
