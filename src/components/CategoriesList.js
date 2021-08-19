import React from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends React.Component {
  render() {
    const { categories, setCategory } = this.props;
    return (
      <aside>
        {
          categories.map((categorie) => (
            <div key={ categorie.id } className="categoriesList">
              <label htmlFor={ categorie.id }>
                <input
                  name="category"
                  id={ categorie.id }
                  type="radio"
                  data-testid="category"
                  onChange={ () => setCategory(categorie.id) }
                />
                { categorie.name }
              </label>
            </div>
          ))
        }
      </aside>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  setCategory: PropTypes.func.isRequired,
};
