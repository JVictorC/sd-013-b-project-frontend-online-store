import React from 'react';
import PropTypes from 'prop-types';
import CardRender from './CardRender';

export default class CardList extends React.Component {
  render() {
    const { results } = this.props;

    if (results.length === 0) {
      return (
        <div>
          <p>Nenhum produto foi encontrado</p>
        </div>
      );
    }

    return (
      <div>
        { results.map((item) => <CardRender key={ item.id } results={ item } />)}
      </div>
    );
  }
}

CardList.propTypes = {
  results: PropTypes.objectOf(PropTypes.string).isRequired,
};