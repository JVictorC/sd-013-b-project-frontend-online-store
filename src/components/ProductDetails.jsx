import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shoppingCart from '../images/shopping-cart-svgrepo-com.svg';
import * as api from '../services/api';
import Loading from './Loading';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: [],
    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  async getProductDetails() {
    const { match: { params: { id } } } = this.props;
    this.setState({ productDetail: await api.getProductsFromCategoryAndQuery({ id }) });
  }

  render() {
    const { productDetail } = this.state;
    const { attributes: specs } = productDetail;
    return (
      <div data-testid="product-detail-name">
        {specs ? (
          <div>
            <div className="product-header">
              <Link to="/">Voltar</Link>
              <Link
                className="shopping-cart-button"
                to="/cart"
                data-testid="shopping-cart-button"
              >
                <img className="cart-icon" src={ shoppingCart } alt="cart icon" />
              </Link>
            </div>
            <div className="product-name-price">
              <h3 data-testid="product-detail-name">
                {productDetail.title}
              </h3>
              <h3>
                {`R$ ${productDetail.price}`}
              </h3>
            </div>
            <div className="product-detais">
              <div className="image-product-detais">image</div>
              <div className="espec-product">
                <div className="title-specs">especificações técnicas</div>
                <div className="every-spec">
                  { specs.map((spec) => <p>{spec.name}</p> )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape({
      category_id: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
