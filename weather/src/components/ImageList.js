import '../Image.css';
import React from 'react';

const ImageList = (props) =>{
	const showImages = props.image.map(({description,id,urls}) => {
		return (
		<img alt={description} key= {id} src={urls.small} />
		);
	});

	return (
		<div className="image"> {showImages} </div>
	);
}

export default ImageList;