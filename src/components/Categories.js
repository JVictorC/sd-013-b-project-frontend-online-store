import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      productCategory: [],
    };
  }

  componentDidMount() {
    getCategories().then((data) => {
      this.setState({ productCategory: data });
    });
  }

  render() {
    const { productCategory } = this.state;
    const { setCategory } = this.props;
    return (
      <div>
        <section className="categories">
          <h1>Categorias:</h1>
          <ul>
            {productCategory.map(({ id, name }) => (
              <li key={ id }>
                <input
                  data-testid="category"
                  type="radio"
                  name="category"
                  value={ id }
                  onClick={ ({ target: { value } }) => setCategory(value) }
                />
                { name }
              </li>)) }
          </ul>
        </section>
      </div>
    );
  }
}

Categories.propTypes = {
  setCategory: PropTypes.func,
}.isRequired;

export default Categories;
