import React from 'react';
import { shallow } from 'enzyme';


import ExpenseForm from '../../components/ExpenseForm.js';

describe('<ExpenseForm />', () => {

  let name = 'foo';
  let amount = 10;

  let expenseCreate = (state) => {
    expect(ExpenseForm.state().name).toEqual(name);
    expect(ExpenseForm.state().amount).toEqual(amount);
  };

  let ExpenseForm = shallow(<ExpenseForm handler={expenseCreate} />);

  ExpenseForm.find('.item').simulate('change', { target: { name: 'name', value: 'name' } });
  ExpenseForm.find('item').simulate('change', { target: { name: 'amount', value: 'amount' } });
  ExpenseForm.find("form").simulate( 'submit', { preventDefault:()=>{} } );

});
