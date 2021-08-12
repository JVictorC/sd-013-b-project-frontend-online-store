import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.getCategoryHandler = this.getCategoryHandler.bind(this);
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({
        categories: response,
      });
    });
  }

  getCategoryHandler(event) {
    const { onFilter } = this.props;
    onFilter(event.target.id);
  }

  render() {
    const { categories } = this.state;
    return (
      <aside className="container-ul">
        <ol>
          {categories.length !== 0 
          && categories.map((category) => (
              <li
                id={ category.id }
                key={ category.id }
              >
                <label htmlFor={ category.id }>{ category.name }
                <input
                  name="category-filter"
                  id={ category.id }
                  type="radio"
                  data-testid="category"
                  onKeyDown={ this.getCategoryHandler }
                  onClick={ this.getCategoryHandler }
                />
                </label>
              </li>))}
        </ol>
      </aside>
    );
  }
}

CategoriesList.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CategoriesList;
