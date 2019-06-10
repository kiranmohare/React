import React from 'react';
import { Field, reduxForm } from 'redux-form';
 
class StreamForm extends React.Component {
	renderError(meta) {
		if(meta.touched && meta.error){
			return (
				<div className="ui error message">
					<div className="header"> {meta.error} </div>
				</div>
			);
		}
	} 

	//helper method
	renderInput = ({input, labelName, meta}) => {
		// console.log(meta);
		// console.log(input);
		// return <input 
		// onChange={formProps.input.onChange}
		// value={formProps.input.value} />;
		//NEW REDUX FORM VERSION BELOW
		const className = `field ${meta.touched && meta.error ? 'error': ''}`;
		return (
			<div className={className} >
				<label> {labelName} </label>
				<input {...input} />
				{this.renderError(meta)}
			</div>	
			);
	} 

	//helper method for on Submit button
	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" component={this.renderInput} labelName= "Title:"/>
				<Field name="description" component={this.renderInput} labelName= "Description:"/>
				<button className="ui button primary"> Submit </button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if(!formValues.title){
		errors.title = 'please enter title';
	}
	if(!formValues.description) {
		errors.description = 'please enter description';

	return errors;
	}
}

export default reduxForm({
	// this form name can be any string
	form: 'StreamForm',
	validate: validate 
})(StreamForm);