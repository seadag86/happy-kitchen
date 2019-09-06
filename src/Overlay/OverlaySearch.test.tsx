import React from 'react';
import ReactDOM from 'react-dom';
import OverlaySearch from './OverlaySearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OverlaySearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
