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
    const name = event.target.parentNode.id;
    const { onFilter } = this.props;
    onFilter(event.target.id, name);
  }

  render() {
    const { categories } = this.state;
    return (
      <aside className="container-ul">
        <ol>
          {categories.length !== 0
          && categories.map((category) => (
            <li
              id={ category.name }
              key={ category.id }
            >
              <input
                name="category-filter"
                id={ category.id }
                type="radio"
                data-testid="category"
                onKeyDown={ this.getCategoryHandler }
                onClick={ this.getCategoryHandler }
              />
              <label htmlFor={ category.id }>{ category.name }</label>
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
