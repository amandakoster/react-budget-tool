import React from 'react';
import renderer from 'react-test-renderer';

import Expenses from '../../components/Expenses';


describe('<Expenses>', () => {

  test('renders with a clean state', () => {

    let app = {
      state: {
        budget:0,
        expenses: [],
        showErrors: true,
      },
      setState: (data) => app.state = Object.assign( {}, app.state, data),
    };

    const component = renderer.create(
      <Expenses app={app} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });



  test('renders a model when balance <=0', () => {
    let app = {
      state: {
        budget:10,
        expenses: [
          {id:1, name: 'foo', amount: 5 },
          {id:2, name: 'bar', amount: 6 },
        ],
        showErrors:true,
      },
      setState: (data) => app.state = Object.assign({}, app.state, data),
    };

    const component = renderer.create(
      <Expenses app={app} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
  } );
});