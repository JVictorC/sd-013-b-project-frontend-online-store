import React from 'react';
// import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const { match: { params: { categoryId, id } } } = this.props;
    const products = await api.getProductsFromCategoryAndQuery(categoryId);
    console.log(categoryId);
    const filterFoundProducts = products.results.find((resultId) => resultId === id);
    console.log(filterFoundProducts);
    this.setState({
      product: filterFoundProducts,
    });
  }

  // findProduct

  render() {
    // const { products } = this.state;
    // console.log(products);
    // const { product } = this.state;
    // console.log(product);
    return (
      <div className="card" data-testid="product-detail-name">
        {/* <p>{ product.title }</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p> */}
        kkk
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      categoryId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
