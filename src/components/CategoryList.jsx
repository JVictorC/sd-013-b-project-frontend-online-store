import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { list, onChange } = this.props;
    return (
      <ul>
        {list.map((category) => (
          <li key={ category.id }>
            <label
              data-testid="category"
              htmlFor={ category.id }
            >
              <input
                type="radio"
                id={ category.id }
                value={ category.id }
                name="categoryId"
                onChange={ onChange }
              />
              { category.name }
            </label>
          </li>))}
      </ul>
    );
  }
}

CategoryList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategoryList;
