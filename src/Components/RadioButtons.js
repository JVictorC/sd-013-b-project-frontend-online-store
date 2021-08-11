import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { categories, onClick } = this.props;
    return (

      <form className="radioButtonsParent">
        { categories.map((category, index) => (
          <div key={ index } className="radioButtons">
            <input
              type="radio"
              key={ category.id }
              name="radio"
              id={ category.id }
              data-testid="category"
              onClick={ onClick }
            />
            <label htmlFor={ category.id }>
              { category.name }
            </label>
          </div>
        )) }
      </form>

    );
  }
}
export default CategoryList;

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
