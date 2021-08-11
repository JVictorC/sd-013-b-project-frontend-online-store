import React from 'react';
import * as api from '../services/api';

class CategoryList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((category) => (
          <li key={ category.id }>
            <label
              data-testid="category"
              htmlFor={ category.name }
            >
              <input
                type="checkbox"
                id={ category.name }
              />
              { category.name }
            </label>
          </li>))}
      </ul>
    );
  }
}

export default CategoryList;
