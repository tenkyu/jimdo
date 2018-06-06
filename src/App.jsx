import * as React from 'react';

//Bootstrap for generating layout
import { Button, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

//Bootstrap Validation for form validations
import { AvForm, AvInput } from 'availity-reactstrap-validation';

//BlockUI for blocking ui while executing commands
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

//SweetAlert for beautiful user messages
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleBlocking = this.toggleBlocking.bind(this); //block and unblocking states while server process
    this.callServer = this.callServer.bind(this); //simulating the backend operations 
    this.handleSubmit = this.handleSubmit.bind(this); //handles the form submit after validation
    
    //initialize default states
    this.state = {
      blocking: false,
      show: false,
      values: null,
      errors: null
    };
  }
  
  
  toggleBlocking() {
    this.setState({ blocking: !this.state.blocking });

    //when process is successful, show the result in an alert
    if (!this.state.blocking) {
      this.setState({ show: true });
    }
  }

  //Task #2: When the user submits the form, sending of the data should be simulated with a timeout. While sending a loading indicator should be shown and all inputs must not be accessible.
  callServer() {
    this.toggleBlocking();
    
    //simulating the backend process with waiting 3 seconds
    setTimeout(function () { this.toggleBlocking(); }.bind(this), 3000);
  }

  handleSubmit(event, errors, values) {
    //console.log('handleSubmit: ' + JSON.stringify(values));

    this.setState({ errors, values });

    //when form is valid, call the server process
    if (errors.length === 0) {
      this.callServer();
    }
  }

  //form should be center both vertical and horizantal, access the root elementet and set the flex attributes
  componentDidMount() {
    var root = document.getElementById('root')
    if (root) {
      root.className = "container h-100";
    }
  }

  //Task #1: The labels should be next to the inputs on a big screen and above on a small screen (responsive design)
  render() {
    return (
      <div className="row align-items-center h-100">
        <div className="col-sm-8 col-xs-12 mx-auto form-back rounded">
          <h1 className="text-center mb-5">Demo Form</h1>
          <BlockUi tag="div" blocking={this.state.blocking}>
            <AvForm onSubmit={this.handleSubmit}  model={this.props.defaultValues}>

              <div className="form-group row">
                <Label for="name" className="col-sm-3 col-form-label">Name <span className="text-danger">*</span></Label>
                <div className="col-sm-9">
                  <AvInput type="text" name="name" id="name" className="form-control" placeholder="Type your name" required />
                </div>
              </div>

              <div className="form-group row">
                <Label for="email" className="col-sm-3 col-form-label">Email <span className="text-danger">*</span></Label>
                <div className="col-sm-9">
                  <AvInput type="email" name="email" id="email" className="form-control" placeholder="Type your email" required />
                </div>
              </div>

              <div className="form-group row">
                <Label for="message" className="col-sm-3 col-form-label">Message <span className="text-danger">*</span></Label>
                <div className="col-sm-9">
                  <AvInput type="textarea" name="message" id="message" className="form-control" placeholder="Your message is here" rows="5" required />
                </div>
              </div>

              <div className="row col-sm-9 offset-sm-3">

                <Button color="primary" id="btnSubmit">Submit</Button>
              </div>

            </AvForm>
          </BlockUi>
        </div>
        <SweetAlert
          type="success"
          show={this.state.show}
          title="Congratulations"
          text="Your form was successfully submitted."
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}


export default App;
