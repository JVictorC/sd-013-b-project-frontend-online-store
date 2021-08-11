import React from 'react';
import PropTypes from 'prop-types';

import EvaluatingForm from '../components/EvaluatingForm';
import EvaluationsZone from '../components/EvaluationsZone';

import {
  getItemsFromLocalStorage,
  getItemFromLocalStorage,
  setArrayToLocalStorage,
} from '../utils/localStorageHelpers';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      product: {},
    };
  }

  componentDidMount() {
    this.getProductFromLocalStorage();
  }

  getProductFromLocalStorage = () => {
    const savedProduct = getItemFromLocalStorage();

    this.setState({ loading: false, product: savedProduct });
  };

  handleClick = () => {
    const { product } = this.state;

    const items = getItemsFromLocalStorage();
    const newItems = [...items, { ...product, amount: 1 }];

    setArrayToLocalStorage(newItems);
  };

  render() {
    const { loading, product } = this.state;

    if (loading) {
      return <p>Loading</p>;
    }

    return (
      <div>
        <p data-testid="product-detail-name">{product.title}</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{product.price}</p>
        {product.attributes.map((attribute) => (
          <div key={ attribute.name }>
            <p>{`${attribute.name}: ${attribute.value_name}`}</p>
          </div>
        ))}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
        <EvaluatingForm id={ product.id } />
        <EvaluationsZone id={ product.id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.objectOf(PropTypes.string).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetails;
