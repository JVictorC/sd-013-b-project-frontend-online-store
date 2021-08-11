import React from 'react';
import PropTypes from 'prop-types';
import EvaluationForm from './EvaluationForm';

export default class DetailedProduct extends React.Component {
  render() {
    const { item } = this.props;
    const { title, price, thumbnail } = item;
    return (
      <div>
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="produto detalhado" />
        <p>{`R$: ${price}`}</p>
        <span>
          <EvaluationForm />
        </span>
      </div>
    );
  }
}

DetailedProduct.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
