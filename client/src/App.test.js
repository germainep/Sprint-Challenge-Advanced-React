import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays a list of players with names', () => {
  const {FindByText} = render(<App/>);
  const names = findByText('Name');
  expect(names).toBe(Array);
})