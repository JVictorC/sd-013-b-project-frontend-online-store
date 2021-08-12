import React from 'react';

export default class Evaluations extends React.Component {
  render() {
    const { 
      currentState: {
        email, 
        message, 
        rating
      }
    } = this.props;

    return(
      <div>
        <hr />
        <p>
          { email }
        </p>
        <p>
          {`Nota: ${rating}`}
        </p>
        <p>
          { message }
        </p>
      </div>
    );
  }
}