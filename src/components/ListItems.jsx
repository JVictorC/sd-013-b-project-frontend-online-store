import React from 'react';
import PropTypes from 'prop-types';
import CardItems from './CardItems';
import InputAndButton from './InputAndButton';

export default class ListItems extends React.Component {
  render() {
    const { productsList, searchItems, handleAddToCart } = this.props;
    return (
      <div>
        <InputAndButton func={ searchItems } />
        { productsList.length === 0 && <h5>Nenhum produto foi encontrado</h5> }
        {productsList
          .map((product) => (
            <CardItems
              key={ product.id }
              item={ product }
              handleAddToCart={ handleAddToCart }
            />
          ))}
      </div>
    );
  }
}

// alterar requisições

ListItems.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchItems: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
