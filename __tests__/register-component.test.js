import React from "react";
import {shallow} from 'enzyme';
import Register from "../src/components/Register/Register";
import { createStore, compose, applyMiddleware  } from 'redux';
import rootreducer from "../src/reducers/index";
import userService from "../src/services/userService";
import { MemoryRouter } from 'react-router';
import  thunk  from 'redux-thunk';

var customMiddleware = (store)=>(next)=>(action)=>{
    // console.log("...in customMiddleware...");
    const returnValue = next(action); // for callling action next pass like next() in node js
    return returnValue;  
}

const store = createStore(rootreducer, 
                          compose(applyMiddleware( thunk, customMiddleware )) 
                         );
// const store = createStore(rootreducer) 


// call function using wrapper instance

describe('Register component', () => {

  it('renders without crashing', () => {
    expect(shallow(<Register store={store } />)).toMatchSnapshot()
  })
  
  it('calls the componentDidMount function when it is created', () => {
    const componentDidMountSpy = jest.spyOn(Register.prototype, 'componentDidMount')
    shallow(<Register store={store } />)
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
    componentDidMountSpy.mockRestore() // remove the moch and restore to intial state
  })
    
  // Acessing component method if using as store
  it('Accessing a Component Method',()=>{
       console.log("...registering a user////");
       const wrapper = shallow(<Register store={store } />);
       wrapper.dive().instance().notifySuccess("sdfdfdfd");
        // wrapper.instance()
  })

  it('should check States by setting Different State',()=>{
    //const wrapper = shallow(<Register store={store } />);
    const wrapper = shallow(
        <Register store={store } />
    ) 
    wrapper.setState({
      submitted: false,
    })
    // console.log("...wrapper.find(Register).instance().state...",wrapper.find(Register).instance());
    expect(wrapper.instance().state).toEqual({
      submitted: false,
    })
    // const firstButton = wrapper.find('button').at(0);
    // console.log("...firstButton....",firstButton);
    // firstButton.simulate('click');
    // expect(wrapper.state().submitted).toEqual(false);
  });

  it("Registering a User",()=>{
    const wrapper = shallow( <Register store={store } /> ); 
    wrapper.setState({
              user: {
                firstName: 'test1',
                lastName: 'test1',
                username: 'test1',
                password: 'test1'
            },
    });
    const mockedEvent = { target: {} }
    wrapper.dive().instance().handleSubmit(mockedEvent);

  });

  it('should invoke the Props callback', () => {
    let mockFn = jest.fn();
    Register.prototype.handlePress = mockFn;

    let wrapper = shallow(<Register store={store } />);
    wrapper.props().registerUser({ firstName: 'test1', lastName: 'test1',
                                    username: 'test1', password: 'test1'
                                });

    // expect(mockFn).toHaveBeenCalledTimes(1);
  });

   it('calls the componentWillUnmount lifecycleHook when it is created', () => {
    const componentDidMountSpy = jest.spyOn(Register.prototype, 'componentWillUnmount')
    shallow(<Register store={store } />)
    expect(componentDidMountSpy).toHaveBeenCalledTimes(0)
    componentDidMountSpy.mockRestore()
  })

  it('Shallow rendering', () => {
    const wrapper = shallow(<Register store={store } />);
    const componentInstance = wrapper.instance();
    //Accessing react lifecyle methods
    componentInstance.componentDidMount();

    const fn = jest.fn();
  
    // componentInstance.componentWillMount();
    //Accessing component state
    // console.log(".....wrapper...",componentclsInstance);
    // expect(componentInstance.state('submitted')).toEqual(true);
    //Accessing component props
    //expect(wrapper.state().value).toEqual('undefined');
    //Accessing class methods
    // expect(componentInstance.counter(1)).toEqual(2);
  });

    // it('should contains the words "Register"', () => {
  //   const registerComponent = shallow(<Register store={store } />);
  //   console.log("...registerComponent...",registerComponent.find('form'));
  //   expect(registerComponent.dive().contain("Register")).toEqual(true);
  // });
 
});
