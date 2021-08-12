import React from 'react';

export default class Comment extends React.Component {
  render() {
    const storage = JSON.parse(sessionStorage.getItem('comment'));
    return (
      <div>
        {
          storage.map((item) => (
            <div key={ item.id }>
              <h4>
                { item.email }
              </h4>
              <h4>{ item.star }</h4>
              <h4>{ item.comment }</h4>
            </div>
          ))
        }
      </div>
    );
  }
}
