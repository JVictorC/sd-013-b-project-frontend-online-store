import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesAside extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();

    this.setState(() => ({
      categories,
    }));
  }

  render() {
    const { handleCategory } = this.props;
    const { categories } = this.state;

    return (
      <div className="aside">
        <p>Categorias</p>
        {categories.map(({ id, name }) => (
          <label key={ id } htmlFor="category">
            { name }
            <input
              data-testid="category"
              key={ id }
              type="radio"
              id={ id }
              value={ name }
              name="category"
              onClick={ handleCategory }
            />
          </label>
        ))}
      </div>
    );
  }
}

CategoriesAside.propTypes = {
  handleCategory: PropTypes.func.isRequired,
};

export default CategoriesAside;
