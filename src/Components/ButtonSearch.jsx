import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import './styles.css';

export default class ButtonSearch extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { onButtonClick } = this.props;
    const resultApi = await this.fetchProductsFromCategoryAndQuery();
    await onButtonClick(resultApi.results);
  }

  fetchProductsFromCategoryAndQuery = async () => {
    const { searchValueHome, categoryId } = this.props;
    const response = await api
      .getProductsFromCategoryAndQuery(categoryId, searchValueHome);
    return response;
  }

  render() {
    return (
      <div className="search-button">
        <button type="button" data-testid="query-button" onClick={ this.handleClick }>
          busca
        </button>
      </div>
    );
  }
}

ButtonSearch.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  searchValueHome: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};
