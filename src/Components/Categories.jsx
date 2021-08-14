import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categories, handleClick } = this.props;
    return (
      <div className="Categories">
        <form>
          { categories !== [] ? (
            categories.map(({ id, name }) => (
              <div key={ id }>
                <label htmlFor={ id } data-testid="category">
                  <input
                    type="radio"
                    name="category"
                    id={ id }
                    value={ id }
                    onClick={ handleClick }
                  />
                  { name }
                </label>
              </div>
            ))) : <p>Nenhum produto encontrado</p> }
        </form>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.objectOf.isRequired,
  handleClick: PropTypes.func.isRequired,
};
