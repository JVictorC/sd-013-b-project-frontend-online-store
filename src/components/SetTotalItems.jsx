import React from 'react';
import PropTypes from 'prop-types';

export default class SetTotalItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: '',
    };
    this.setTotalItems = this.setTotalItems.bind(this);
  }

  componentDidMount() {
    this.setTotalItems();
  }

  setTotalItems() {
    const { id } = this.props;
    this.setState(({ totalItems }) => ({ totalItems: [...totalItems, id] }));
  }

  render() {
    const { totalItems } = this.state;
    const { id } = this.props;

    return (
      <p>{totalItems[id]}</p>
    );
  }
}
