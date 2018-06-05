import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { AvForm, AvInput } from 'availity-reactstrap-validation';
import App from './App';

function scryRenderedDOMComponentsWithId(tree, id) {
  return ReactTestUtils.findAllInRenderedTree(tree, function(inst) {
    return ReactTestUtils.isDOMComponent(inst) && inst.id === id;
  });
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('click event test', () => {
  let instance = ReactTestUtils.renderIntoDocument(
    <App/>
  );

  let inputName = scryRenderedDOMComponentsWithId(instance, "name");
  inputName[0].value = 'Çetin Yılmaz';

  let inputEmail = scryRenderedDOMComponentsWithId(instance, "email");
  inputEmail[0].value = 'cetinyilmaz@gmail.com';

  let inputMessage = scryRenderedDOMComponentsWithId(instance, "message");
  //inputMessage[0].value = 'This is test message';

  //let button = scryRenderedDOMComponentsWithId(instance, "btnSubmit");
  //ReactTestUtils.Simulate.click(button[0]);
  //console.log(instance.state);
  //ReactTestUtils.Simulate.click(clickDiv[0]);
  
  
  var form = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'form');
  form.simulate('submit', { preventDefault () {} })
  
  //console.log(form);
  //ReactTestUtils.Simulate.submit(form);

  console.log(instance.state);

  //expect(instance.state.values).toEqual("some value");

});

it('test demo', () => {


});