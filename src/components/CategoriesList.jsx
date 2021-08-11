import React from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends React.Component {
  onTrigger(e) {
    console.log(e);
    this.setValue(e);
  }

  setValue = (event) => {
    const { handleChangeCategory } = this.props;
    console.log(event);
    handleChangeCategory(event);
  }

  render() {
    const { categories, catId } = this.props;
    console.log(catId);
    return (
      <div>
        {categories.map((categorie) => (
          <React.Fragment key={ categorie.id }>
            <label htmlFor={ categorie.id }>
              <input
                type="radio"
                value={ categorie.id }
                onChange={ (e) => this.onTrigger(e.target.value) }
                maxWidth={ 250 }
                data-testid="category"
                name="caregorias"
              />
              {categorie.name}
            </label>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
  catId: PropTypes.string.isRequired,
};
