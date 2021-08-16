import React from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import EvaluationForm from '../components/EvaluationForm';
import EvaluationRender from '../components/EvaluationRender';
import BtnAddToCart from '../components/BtnAddToCart';
import Header from '../components/Header';
import '../Homepage.css';

export default class CardDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { categoryId, query } } } = this.props;
    await api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((response) => {
        this.setState({ product: response.results[0] });
      });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail, id } = product;

    return (
      <section>
        <Header />
        <div
          className="navbar
          has-background-danger-light
          is-flex
          is-justify-content-space-between"
        >
          <button
            type="button"
            className="button is-link mt-2 mb-2 ml-6 is-flex is-small is-rounded"
          >
            <BsArrowReturnLeft size="1,5em" className="mr-2 mt-1" />
            <Link to="/" className="has-text-white">VOLTAR</Link>
          </button>
          <button
            type="button"
            className="button mr-6 is-success mt-3 is-small is-rounded"
          >
            <FaShoppingCart size="1,5em" className="mr-2" />
            <Link
              data-testid="shopping-cart-button"
              className="has-text-white "
              to="/cart"
            >
              CARRINHO
            </Link>
          </button>
        </div>
        <div className="columns mt-3 is-flex is-justify-content-space-evenly ">
          <div className="is-flex is-justify-content-center">
            <div className="column is-three-fifths is-block">
              <img
                alt="Product"
                src={ thumbnail }
                className="is-size-3 is-block mx-auto border"
              />
              <p
                data-testid="product-detail-name"
                className="title is-6 mt-2 has-text-centered"
              >
                { title }
              </p>
              <p
                className="subtitle is-6 mt-1 border
                has-text-centered has-text-weight-bold has-text-danger-dark"
              >
                { `Preço: R$${price}` }
              </p>
              <BtnAddToCart
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
                id={ id }
                buttonId="product-detail-add-to-cart"
                className="card-footer-item button is-success m-2 mx-auto"
              />
            </div>
          </div>
          <div className="is-flex">
            <div className="coloumn is-one-fifth has-text-centered">
              <p className="title is-4">Especificações técnicas:</p>
            </div>
          </div>
        </div>
        <div className="border-top p-1">
          <EvaluationForm id={ id } />
        </div>
        <div className="header-background p-1">
          <EvaluationRender id={ id } />
        </div>
      </section>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
