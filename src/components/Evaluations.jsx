import React from 'react';

export default class Evaluations extends React.Component {

  render() {

    const object = JSON.parse(localStorage.getItem('currentState'));

    return (
      <div>
        {
          localStorage.length === 0 ? ''
            : object.map(obj => (
              <div>
                <p>E-mail: {obj.email}</p>
                <p>Nota: {obj.rating} </p>
                <p>Mensagem: {obj.message}</p>
                <hr />
              </div>
            ))
        }
      </div>
    );
  }
}