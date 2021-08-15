import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import Loading from './Loading';

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
        <p data-testid="home-initial-message" className="lead">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form onSubmit={ this.handleSubmit } className="form-search">
          <input
            type="text"
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
            data-testid="query-input"
            name="searchText"
            className="form-control"
            value={ searchText }
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            type="submit"
            className="btn btn-success m-2 btn-lg"
          >
            <BsSearch />
          </button>
        </form>
        <Link
          data-testid="shopping-cart-button"
          to="cart/"
          className="Link-Cart "
        >
          <p
            data-testid="shopping-cart-size"
            className="text-success fs-1 teste"
          >
            {QuantityItemCard}
          </p>
          <AiOutlineShoppingCart className="text-success fs-1" />
        </Link>
      </header>
    );
  }
}

BarSearch.propTypes = {
  getProducts: PropTypes.func.isRequired,
  QuantityItemCard: PropTypes.number.isRequired,
};

export default BarSearch;
