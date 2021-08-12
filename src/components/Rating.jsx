import React from 'react';

export default class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { getRating } = this.props;
    return (
      <label htmlFor="rating">
        <input
          type="number"
          id="rating"
          step={ 0.5 }
          min={ 0 }
          max={ 5 }
          onChange={ getRating }
        />
      </label>
    );
  }
}
