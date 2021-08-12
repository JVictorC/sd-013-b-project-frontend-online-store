import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Rating from './Rating';

class DetailsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    this.getAPI();
  }

  getAPI = async () => {
    const { match: { params: { title } } } = this.props;
    const products = await getProductsFromCategoryAndQuery('', title);
    this.setState({
      details: products.results[0],
    });
  }

  render() {
    const { details: { title, thumbnail, price } } = this.state;
    return (
      <div>
        <h2 data-testid=" product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$${ price }` }</p>
        <Rating />
      </div>
    );
  }
}

DetailsCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};

export default DetailsCard;
