import React from 'react';
import ReactDOM from 'react-dom';
import VolumeSlider from '../Components/VolumeSlider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VolumeSlider />, div);
  ReactDOM.unmountComponentAtNode(div);
});
