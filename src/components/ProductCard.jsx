import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    const { results } = this.props;
    this.state = {
      results,
    };
    this.showResults = this.showResults.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { results } = this.props;
    if (results !== prevProps.results) {
      this.updateState(results);
    }
  }

  updateState = (results) => {
    this.setState({ results });
  };

  showResults() {
    const { addToCart } = this.props;
    const { results } = this.state;
    const card = results.map((result) => {
      const { title, thumbnail, price } = result;
      return (
        <div key={ title } data-testid="product">
          <p>{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{price}</p>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => {
              addToCart(result);
            } }
          >
            Add to Cart
          </button>
        </div>
      );
    });
    return card;
  }

  render() {
    const { results } = this.state;
    return results.length === 0
      ? 'Nenhum produto foi encontrado'
      : this.showResults();
  }
}

ProductCard.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
