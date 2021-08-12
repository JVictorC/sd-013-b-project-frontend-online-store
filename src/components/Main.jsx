import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListItems from './ListItems';
import SearchBar from './SearchBar';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchItemList: [],
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.categoryClick = this.categoryClick.bind(this);
  }

  // componentDidUpdate() {
  //   this.getCartNumber();
  // }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      value,
    });
  }

  async handleClick() {
    const { value, category } = this.state;
    const response = await getProductsFromCategoryAndQuery(category, value);
    this.setState({ searchItemList: response.results });
  }

  // getCartNumber() {
  //   const { query } = this.props;
  //   this.setState({
  //     queryNumber: query.length,
  //   });
  // }

  async categoryClick(event) {
    // console.log(event.target.value);
    await this.setState({
      category: event.target.value,
    });
    this.handleClick();
  }

  render() {
    const { value, searchItemList } = this.state;
    const { getQuery, query } = this.props;
    return (
      <>
        <SearchBar
          value={ value }
          onChange={ this.handleChange }
          handleClick={ this.handleClick }
          categoryClick={ this.categoryClick }
          query={ query }
        />
        <ListItems items={ searchItemList } getQuery={ getQuery } />
      </>
    );
  }
}

Main.propTypes = {
  getQuery: PropTypes.func.isRequired,
};

export default Main;
