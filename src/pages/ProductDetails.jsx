import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../components/BackButton';
import DetailsCard from '../components/DetailsCard';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductDetails extends React.Component {
  render() {
    const {
      history,
      location: { state: product },
      match: { params: { name } },
    } = this.props;

    return (
      <div className="detail-page">
        <nav className="detail-nav">
          <BackButton history={ history } />
          <ShoppingCartButton />
        </nav>

        <main className="detail-main">
          <div className="detail-title-div">
            <h1 data-testid="product-detail-name">{ name }</h1>
          </div>

          <div className="details">
            <div
              className="detail-img-div"
            >
              <img src={ product.thumbnail } alt={ product.title } />
            </div>

            <DetailsCard product={ product } />
          </div>
        </main>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
