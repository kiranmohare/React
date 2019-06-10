import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
 
class StreamCreate extends React.Component {
	//helper method for on Submit button
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	}

	render() {
		return (
			<div>
				<h4> Create Stream </h4>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);