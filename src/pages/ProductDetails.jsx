import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Card from '../components/Card';

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
    const { match: { params: { id } } } = this.props;
    const product = await api.getItem(id);
    // this.setState({
    //   product,
    // });
    return this.fuc(product);
  }

  fuc = (product) => {
    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    // console.log(product);
    return (
      <Card product={ product } />
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      search: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
