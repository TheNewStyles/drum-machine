import React from 'react';
import ReactDOM from 'react-dom';
import Drumpad from '../Components/Drumpad';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Drumpad />, div);
  ReactDOM.unmountComponentAtNode(div);
});
