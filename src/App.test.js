
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Addition', () => {

  const onCountChange= jest.fn();
  let wrapper ;
  beforeEach (() => {
 wrapper =(<App onCountChange={onCountChange}/>);
  }
);
    it('renders', () => {
      expect(wrapper).not.toBeNull();
    });

  it('shows my default text', () => {
    expect(wrapper.find('p').text()).toEqual('Count:0');
  });

  it('increment the count by 1', () => {
    wrapper.find ('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Count:1');
  });

  it('increment the count by 4', () => {
    wrapper.find ('button').simulate('click');
    wrapper.find ('button').simulate('click');
    wrapper.find ('button').simulate('click');
    wrapper.find ('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('Count:4');
  });

});
  

