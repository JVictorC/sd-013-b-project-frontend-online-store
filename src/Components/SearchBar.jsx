import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import CardProduct from './CardProduct';
import LogoBlue from '../img/LogotipoBlue.png';
import CartButton from './CartButton';

export default class SearchBar extends Component {
  render() {
    const {
      products,
      searchText,
      // state,
      handleChange,
      handleClick,
      // addToCart,
      cart,
    } = this.props;
    // console.log(results);
    // if (done) return 'Nenhum produto foi encontrado';
    console.log(products);
    return (
      <div className="Search-bar">
        <div><img src={ LogoBlue } className="logotipo" alt="Logotipo da empresa" /></div>
        <div className="research">
          <form>
            <label
              htmlFor="pesquisar"
            >
              <input
                type="text"
                data-testid="query-input"
                id="pesquisar"
                name="searchText"
                className="searchText"
                value={ searchText }
                onChange={ handleChange }
              />
            </label>
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
          </form>
          <button
            type="button"
            data-testid="query-button"
            onClick={ handleClick }
          >
            Pesquisar
          </button>
        </div>
        <div className="btn-car">
          <CartButton
            cart={ cart }
          />
        </div>
        {/* <div>
          {products === 0 && state === true
            ? <p>Nenhum produto foi encontrado</p>
            : products.map((product, { id }) => (
              <CardProduct
                key={ id }
                products={ product }
                addToCart={ addToCart }
              />
            ))}
            </div> */}
      </div>
    );
  }
}

SearchBar.propTypes = {
  // addToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.array).isRequired,
  // state: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
