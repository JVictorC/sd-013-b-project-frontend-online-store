import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

class Products extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <div className="products">

        { list.map((element) => (
          // TODO O CARD É UM LINK PARA OS DETALHES DO PRODUTO
          <Link
          // SALVAR O OBJETO EM LOCATION - REFERÊNCIA: https://abre.ai/c84N
            to={ {
              pathname: `/product-details/${element.title}`,
              state: element,
            } }
            data-testid="product-detail-link"
            key={ element.id }
          >
            <ProductCard
              title={ element.title }
              image={ element.thumbnail }
              price={ element.price }
            />
          </Link>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Products;
