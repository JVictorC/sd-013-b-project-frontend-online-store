import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // products: [],
      // product: [],
      id: '',
      search: '',
    };
  }

  componentDidMount() {
    this.setStateFunc();
  }

  setStateFunc() {
    const { id, search } = useParams();
    this.setState({
      id,
      search,
    });
  }

  getProducts() {
    // const { search } = this.state;
    // const products = await api.getProductsFromCategoryAndQuery(search);
    // console.log(products);
    // this.setState({
    //   products: products.results,
    // });
  }

  // findProduct

  render() {
    // const { products } = this.state;
    // console.log(products);
    const { id, search } = this.state;
    return (
      <div>
        <p>
          { `${id}       ${search}` }
        </p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  search: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // products: PropTypes.shape().isRequired,
};

export default ProductDetails;
