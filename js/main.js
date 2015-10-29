import React from 'react';
import ReactDom from 'react-dom';


let Example = React.createClass({

  render() {
    return (
      <ul></ul>
    );
  }

});

ReactDom.render(
  <List items={['JD', 'Tim', 'Jo']}/>, 
  document.querySelector('.app')
  );