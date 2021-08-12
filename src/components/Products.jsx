import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import AddToCartButton from './AddToCartButton';

class Products extends React.Component {
  render() {
    const { list, onClick } = this.props;

    return (
      <div className="products">
        { list.map((element) => (
          <div key={ element.id }>
            {/* TODO O CARD É UM LINK PARA OS DETALHES DO PRODUTO */}
            <Link
            // SALVAR O OBJETO EM LOCATION - REFERÊNCIA: https://abre.ai/c84N
            // ESTRUTURA PADRÃO { pathname: /abc, state: {qualquercoisa} }
              to={ {
                pathname: `/product-details/${element.title}`,
                state: element,
              } }
              data-testid="product-detail-link"
            >
              <ProductCard
                title={ element.title }
                image={ element.thumbnail }
                price={ element.price }
                onClick={ onClick }
              />
            </Link>
            <AddToCartButton
              title={ element.title }
              image={ element.image }
              price={ element.price }
              onClick={ onClick }
            />
          </div>
          
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Products;
