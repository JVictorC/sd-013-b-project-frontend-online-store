import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productsCart: [],
      product: '',
      loaded: false,
    };
    this.addToLocal = this.addToLocal.bind(this);
  }

  componentDidMount() {
    this.getProductsCart();
    this.loadProduct();
  }

  // função que carrega os itens do localstorage no state
  getProductsCart() {
    // Leitura do produto no localstorage
    const localData = JSON.parse(localStorage.getItem('cart'));
    // se vazio, cria o local com o produto recebido
    if (localData === null) {
      localStorage.setItem('cart', JSON.stringify([]));
      return;
    }
    if (localData.length === 0) return;
    this.setState({ productsCart: localData });
  }

  // função que carrega o item para detalhes e informa que carregou
  loadProduct() {
    const { location: { data: { product } } } = this.props;
    this.setState({ product });
    this.setState({ loaded: true });
  }

  addToLocal(product) {
    const { productsCart } = this.state;
    const localData = JSON.parse(localStorage.getItem('cart'));
    if (localData === null) {
      localStorage.setItem('cart', JSON.stringify([product]));
      return;
    }
    // adiciona o item detalhado na lista do localstorage
    localData.push(product);
    // adiciona o item detalhado na lista do state para contagem de itens
    productsCart.push(product);
    this.setState({ productsCart });
    localStorage.setItem('cart', JSON.stringify(localData));
  }

  render() {
    const { match } = this.props;
    const { productsCart, product, loaded } = this.state;
    const { params } = match;
    const { input } = params;
    if (!loaded) return <div>Carregando...</div>;
    return (
      <>
        {console.log(productsCart)}
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToLocal(product) }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/shop" data-testid="shopping-cart-button">
          Carrinho de compras com
          <span data-testid="shopping-cart-size">{` ${productsCart.length} `}</span>
          itens
        </Link>
        <h1 data-testid="product-detail-name">{input}</h1>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      input: PropTypes.string,
      category: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape(
    {
      data: PropTypes.shape({
        product: PropTypes.objectOf(PropTypes.string),
      }),
    },
  ).isRequired,
};
export default ProductDetails;
