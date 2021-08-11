import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class CardList extends Component {
  // constructor() {
  //   super();

  //   this.handleLoading = this.handleLoading.bind(this);

  // }

  // componentDidMount() {
  //   this.handleLoading();
  // }

  // handleLoading() {
  //   this.setState({
  //     loading: false,
  //   });
  // }

  render() {
    const { productsList } = this.props;
    // const { loading } = this.state;
    const mapCart = productsList.map((product) => (<Card
      key={ product.id }
      title={ product.title }
      thumbnail={ product.thumbnail }
      price={ product.price }
    />));
    return (
      <div className="cardlist">
        { mapCart }
      </div>
    );
  }
}

CardList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
