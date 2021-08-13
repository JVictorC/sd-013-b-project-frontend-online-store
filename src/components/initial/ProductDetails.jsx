import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Evaluation from '../Evaluation';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productEvaluations: null,
      productsCart: [],
      product: '',
      loaded: false,
    };
    // this.getToLocal = this.getToLocal.bind(this);
  }

  componentDidMount() {
    // this.getToLocal();
    this.getProductsCart();
    this.loadProduct();
  }

  onChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  setStorageAvaliations(evaluationContent, evaluationRating) {
    const { product } = this.state;
    const storageComents = this.getStorageAvaliations();
    // para a primeira vez que registrar uma avaliação, cria o local com este produto
    if (storageComents.othersProducts === null
      && storageComents.pageProduct === null) {
      const avaliation = {
        [product.id]: {
          contents: [evaluationContent],
          ratings: [evaluationRating],
        },
      };
      localStorage.setItem('coments', JSON.stringify([avaliation]));
      return;
    }
    // Prepara a nova avaliação à ser adicionada
    const avaliation = {
      [product.id]: {
        contents: [evaluationContent],
        ratings: [evaluationRating],
      },
    };
    const { contents, ratings } = storageComents.pageProduct[product.id];
    // Adiciona a avaliação desse produto na lista a primeira vez.
    if (storageComents.pageProduct === null) {
      // junta o produto atual com os outros produtos e grava no local
      storageComents.othersProducts.push(avaliation);
      localStorage.setItem('coments', JSON.stringify(storageComents.othersProducts));
    } else {
      console.log(storageComents.pageProduct);
      console.log(storageComents.pageProduct[product.id]);
      contents.push(evaluationContent);
      ratings.push(evaluationRating);
      storageComents.pageProduct.push({ [product.id]: { contents, ratings } });
      this.setState({ productEvaluations: storageComents.pageProduct });
      storageComents.othersProducts.push(storageComents.pageProduct);
      localStorage.setItem('coments', JSON.stringify(storageComents.othersProducts));
    }
  }

  // Coleta as avaliações dos produtos e retorna este e outros produtos. Null caso não tenha avaliações
  getStorageAvaliations() {
    const { product: { id } } = this.state;
    const avaliations = JSON.parse(localStorage.getItem('coments'));
    console.log(avaliations);
    if (avaliations === null) {
      this.setState({ productEvaluations: null });
      return { othersProducts: null, pageProduct: null };
    }
    const filtered = avaliations.filter((prod) => prod[id] === id);
    const others = avaliations.filter((prod) => prod[id] !== id);
    if (filtered.length === 0) {
      this.setState({ productEvaluations: null });
      return { othersProducts: others, pageProduct: null };
    }
    console.log(filtered);
    console.log(others);
    console.log(filtered.length);
    this.setState({ productEvaluations: filtered });
    if (others.length === 0) {
      return { othersProducts: null, pageProduct: filtered[0] };
    }
    return { othersProducts: others, pageProduct: filtered[0] };
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

  evaluateProduct = (evaluationContent, evaluationRating) => {
    this.setStorageAvaliations(evaluationContent, evaluationRating);
  }

  // função que carrega o item para detalhes e informa que carregou
  loadProduct() {
    const { location: { data: { product } } } = this.props;
    this.setState({ product });
    this.getStorageAvaliations();
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
    const { productsCart, product, loaded, productEvaluations } = this.state;
    const { params } = match;
    const { input } = params;
    if (!loaded) return <div>Carregando...</div>;
    return (
      <>
        <Link to="/shop" data-testid="shopping-cart-button">
          Carrinho de compras com
          <span data-testid="shopping-cart-size">{` ${productsCart.length} `}</span>
          itens
        </Link>
        <h1 data-testid="product-detail-name">{input}</h1>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToLocal(product) }
        >
          Adicionar ao carrinho
        </button>
        <Evaluation
          evaluations={ productEvaluations }
          evaluateProduct={ this.evaluateProduct }
        />
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
        product: PropTypes.shape({
          id: PropTypes.string,
        }),
      }),
    },
  ).isRequired,
};

export default ProductDetails;
