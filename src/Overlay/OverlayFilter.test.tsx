import React from 'react';
import ReactDOM from 'react-dom';
import OverlayFilter from './OverlayFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OverlayFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
