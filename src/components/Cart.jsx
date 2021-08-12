import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
    this.state = {
      empty: true,
      list: props.list,
    };
  }

  componentDidMount() {
    this.checkEmpty();
  }

  checkEmpty() {
    const { list } = this.state;
    if (list.length > 0) {
      this.setState({
        empty: false,
      });
    }
  }

  renderEmpty() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  renderList() {
    const { list } = this.state;

    return (
      <div>
        <Link to="/">Voltar</Link>
        { list.map((item) => (
          <li
            data-testid="shopping-cart-product-name"
            key={ item.id }
          >
            { item.title }
            <p data-testid="shopping-cart-product-quantity">
              1
            </p>
          </li>
        )) }
      </div>
    );
  }

  render() {
    const { empty } = this.state;
    return (
      <section>
        { (empty && this.renderEmpty()) }
        { this.renderList() }
      </section>
    );
  }
}

Cart.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
