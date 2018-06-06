import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { AvForm, AvInput } from 'availity-reactstrap-validation';
import App from './App';

// this is default test method
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//this method is written for Task #3
it('form submitting', (done) => {
  //simulating the user inputs with these values
  const fakeData = {name: 'Çetin Yılmaz', email: 'nospam@gmail.com', message:'This is a test message'};

  //initialize the component
  let component = ReactTestUtils.renderIntoDocument(
    <App defaultValues={fakeData} />
  ); 
 
  //submit form
  var form = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
  ReactTestUtils.Simulate.submit(form);
  
  //check handled values are posted to backend
  setTimeout(function() {
      try {
        console.log(component.state);// see all states after form posted
        expect(component.state.values.name).toEqual(fakeData.name);
        done()
      } catch (e) {
        done.fail(e)
      }
  }, 100);

});