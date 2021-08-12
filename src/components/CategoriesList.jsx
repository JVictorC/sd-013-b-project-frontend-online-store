import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selected: '',
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
    this.setState({
      selected: event.target.id,
    });
    const name = event.target.parentNode.id;
    const { onFilter } = this.props;
    onFilter(event.target.id, name);
  }

  render() {
    const { categories, selected } = this.state;
    return (
      <aside className="container-ul">
        <ol>
          {categories.length !== 0
          && categories.map((category) => (
            <li
              id={ category.name }
              key={ category.id }
            >
              <button
                type="button"
                name="category-filter"
                id={ category.id }
                className={ category.id === selected && 'selected' }
                data-testid="category"
                onKeyDown={ this.getCategoryHandler }
                onClick={ this.getCategoryHandler }
              >
                { category.name }
              </button>
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
