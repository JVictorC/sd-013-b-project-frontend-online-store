import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductInvalid from './ProductInvalid';

export default class CategoriesList extends Component {
  render() {
    const { category, handleClick } = this.props;
    const categories = category.map(({ name, id }) => (
      <label htmlFor={ id } key={ id }>
        <input
          data-testid="category"
          type="radio"
          id={ id }
          name="categories"
          onClick={ handleClick }
        />
        {name}
      </label>
    ));
    return (
      <div className="sidebar">
        { category !== [] ? categories : <ProductInvalid /> }
      </div>
    );
  }
}

CategoriesList.propTypes = {
  category: PropTypes.objectOf.isRequired,
  handleClick: PropTypes.func.isRequired,
};
