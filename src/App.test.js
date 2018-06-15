import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <App/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
// describe('Addition', () => {
//   it('knows that 2 and 2 make 4', () => {
//     expect(2 + 2).toBe(4);
//   });
// });


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

var sum = (a,b)=>{ return (a+b); }