import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { categories, onClick } = this.props;
    return (

      <form>
        { categories.map((category, index) => (
          <div key={ index }>
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
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      query: PropTypes.string,
    }),

  ).isRequired,
};