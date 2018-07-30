import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from '../Components/ToggleButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToggleButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
