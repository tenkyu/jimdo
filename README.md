# What have I done to accomplish the tasks?

Hi! I'm Çetin Yılmaz,  i like using CI/CD pipelines and CVS so some steps may be unnecessary for you, this documentation shows how i made this app.

 1. Firstly I pushed your project into my github repository, here is the
    link https://github.com/tenkyu/jimdo
 2. Created a Heroku application for Continuous integration, delivery, and deployment: https://jimdo.herokuapp.com

## Task #1

I use Bootstrap 4 for responsive design, normally form labels and inputs are aligned horizontally but when you change the size of the browser, labels comes above the inputs. You can see the result in Heroku App.

This is for maximizing form area in smaller devices.

    <div  className="col-sm-8 col-xs-12 mx-auto form-back rounded">
  
This is for achieving this task.

    <Label  for="name"  className="col-sm-3 col-form-label">Name <span  className="text-danger">*</span></Label>

## Task #2

I used BlockUI for blocking components, this very elegant solution for this purpose, Here is how.

    <BlockUi  tag="div"  blocking={this.state.blocking}></BlockUi>
    
    toggleBlocking() {
		this.setState({ blocking:  !this.state.blocking });
		//when process is successful, show the result in an alert

	    if (!this.state.blocking) {
	        this.setState({ show:  true });
        }
    }

## Task #3

In **App.test.jsx** i wrote a test method, first filled the from with user data and submit the form, after a bit delay, i assert the results and inputs.

    it('form submitting', (done) => {
	
		//simulating the user inputs with these values
		const  fakeData  = {name:  'Çetin Yılmaz', email:  'nospam@gmail.com', message:'This is a test message'};

	  	//initialize the component
		let  component  =  ReactTestUtils.renderIntoDocument(
			<App  defaultValues={fakeData}  />
		);

		//submit form
		var  form  =  ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
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
---

This is the Jimdo Form trial project.
It was setup with [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)

The project already includes a setup for react with redux and thunk.

## Task
Please build a responsive form. The form should include a Name, EMail and Message field.
The labels should be next to the inputs on a big screen and above on a small screen (<= 600px).

When the user submits the form, sending of the data should be simulated with a timeout. While sending a loading indicator should be shown and all inputs must not be accessible.

Please add a test that checks if the form submits its data when the submit button gets clicked.

You are totally free in deciding how you build this. If anything is unclear to you, just make an assumption and proceed with what you think makes sense. 

#### Setup
`yarn`

#### Start
`yarn start`

#### Run tests
`yarn test`
