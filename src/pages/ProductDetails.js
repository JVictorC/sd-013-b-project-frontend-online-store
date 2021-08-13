import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      product: {},
    };
  }

  componentDidMount() {
    this.detailsAPI();
  }

  detailsAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const fetchAPI = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(fetchAPI);
    const productData = await response.json();
    this.setState({
      product: productData,
      isLoading: false,
    });
  }

  render() {
    const { isLoading, product: { title, price, thumbnail, shipping } } = this.state;
    if (isLoading) {
      return (
        <h1>Carregando...</h1>
      );
    }
    return (
      <section className="product-details">
        <h2 data-testid="product-detail-name">{ title }</h2>
        <div className="product-details-unit">
          <img className="details-img" src={ thumbnail } alt={ `Imagem de ${title}` } />
          <span>{`R$${parseFloat(price).toFixed(2)}`}</span>
          <p data-testid={ shipping.free_shipping ? "free-shipping" : '' }>
            { shipping.free_shipping ? 'FRETE GRÁTIS' : '' }
          </p>
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
