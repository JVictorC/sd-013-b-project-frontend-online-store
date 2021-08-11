import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      productDetail: [],
    };
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
    console.log('teste');
  }

  // shouldComponentUpdate() {
  //   return this.getDetails();
  // }

  getDetails() {
    const { productDetail } = this.state;
    const { attributes: specs } = productDetail;
    return false;
  }

  async getProductDetails() {
    const { match: { params: { id } } } = this.props;
    this.setState({ productDetail: await api.getProductsFromCategoryAndQuery({ id }) });
    // console.log();
  }

  render() {
    const { productDetail } = this.state;
    const { attributes: specs } = productDetail;
    console.log(specs);
    return (
      <div data-testid="product-detail-name">
        <div className="product-detais">
          <div className="image-product-detais">image</div>
          <div className="espec-product">
            <div className="title-specs">
              especificações técnicas
            </div>
            <div className="every-spec">
              teste
            </div>
          </div>
        </div>
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
