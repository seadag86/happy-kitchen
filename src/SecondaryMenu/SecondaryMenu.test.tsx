import React from 'react';
import ReactDOM from 'react-dom';
import SecondaryMenu from './SecondaryMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecondaryMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
