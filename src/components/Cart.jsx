import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartItem from './CartItem';

export default class Cart extends Component {
  constructor() {
    super();

    this.renderList = this.renderList.bind(this);

    this.state = {
      empty: true,
      list: [],
    };
  }

  componentDidMount() {
    this.updateList();
  }

  async updateList() {
    const { cartList } = this.props;
    this.setState({ list: cartList });
    const { list } = this.state;
    list.forEach((item) => this.setState =({ [item.id]: 1 }));
  }

  handleChange({ target }, id) {
    const { id } = this.state;
    this.setState({ id:target.value });
    target.value = id;
  }

  handleQuantity(number) {
    const {  } = this.state;
    this.setState({  });
  }

  renderList() {
    const { list } = this.state;
    return (
      <div>
        <h3>Lista de compras:</h3>
        <ul>
          { list.map((item) =>
          <CartItem
            { ...item }
            handleQuantity={ this.handleQuantity }
            handleChange={ this.handleChange }
          />) }
          <Link to="/">Voltar</Link>
        </ul>
      </div>
    );
  }

  renderEmpty() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  render() {
    const { empty, list } = this.state;
    return (
      <section>
        { (empty && this.renderEmpty()) }
        { (list.length > 0 && this.renderList()) }
      </section>
    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
