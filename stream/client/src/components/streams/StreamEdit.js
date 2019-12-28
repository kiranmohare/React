import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
	componentDidMount(){
		// console.log(this.props.match.params.id);
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editStream(this.props.match.params.id, formValues);
	}

	render() {
		// console.log(this.props);
		if(!this.props.stream){
			return <div> Page Loading </div>;
		}

		return(
			<div>
			<h4> edit Stream </h4>
			<StreamForm 
				initialValues= {_.pick(this.props.stream, 'title', 'description')}
				onSubmit={this.onSubmit}/>
			</div>
		); 
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect (mapStateToProps, {fetchStream, editStream})(StreamEdit);