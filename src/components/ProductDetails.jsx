import React from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';
import DetailedProduct from './DetailedProduct';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      searchResult: [],
    };
    this.handleRequisitionById = this.handleRequisitionById.bind(this);
  }

  componentDidMount() {
    this.handleRequisitionById();
  }

  async handleRequisitionById() {
    // Feito através de consulta no stack overflow : https://stackoverflow.com/questions/45598854/passing-values-through-react-router-v4-link
    // const { nameTitle } = this.props.location.state;
    const { location: { state: { nameTitle } } } = this.props;
    const { category } = this.state;
    const result = await getProductsFromCategoryAndQuery(category, nameTitle);
    this.setState({
      searchResult: result.results[0],
    });
  }

  render() {
    const { searchResult } = this.state;
    const { getQuery, query } = this.props;
    return (
      <div data-testid="product-detail-name">
        <DetailedProduct
          item={ searchResult }
          getQuery={ getQuery }
          query={ query }
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      nameTitle: PropTypes.string,
    }),
  }).isRequired,
  getQuery: PropTypes.func.isRequired,
  query: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]).isRequired,
};
