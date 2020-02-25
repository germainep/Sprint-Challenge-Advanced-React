import React from 'react'
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays a list of players with names', () => {
  const {findAllByText, queryAllByText} = render(<App/>);
  const names = findAllByText(/Name/i);
  expect(names).resolves.toBeInTheDocument()
  
})