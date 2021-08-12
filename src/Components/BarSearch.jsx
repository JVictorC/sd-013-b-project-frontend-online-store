import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/BarSearch.css';
import { Link } from 'react-router-dom';

class BarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { searchText } = this.state;
    const { getProducts } = this.props;

    getProducts(searchText);
  }

  render() {
    const { searchText } = this.state;
    const { QuantityItemCard } = this.props;

    return (
      <header className="barsearch">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
            data-testid="query-input"
            name="searchText"
            value={ searchText }
            onChange={ this.handleChange }
          />
          <button data-testid="query-button" type="submit">🔎</button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </form>
        <Link data-testid="shopping-cart-button" to="cart/">
          <p data-testid="shopping-cart-size">{QuantityItemCard}</p>
          🛒
        </Link>
      </header>
    );
  }
}

BarSearch.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

export default BarSearch;
