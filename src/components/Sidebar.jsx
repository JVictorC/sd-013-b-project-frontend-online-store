import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import Categories from './Categories';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    const { captureValueSelect } = this.props;

    return (
      <form
        onChange={ captureValueSelect }
        className="category"
      >
        {
          categories.map((category) => (
            <Categories key={ category.id } categories={ category } />
          ))
        }
      </form>
    );
  }
}

Sidebar.propTypes = {
  captureValueSelect: PropTypes.func.isRequired,
};
