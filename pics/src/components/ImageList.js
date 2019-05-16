import './ImageList.css';
import React from 'react';

const ImageList = (props) =>{
	const showImages = props.images.map(({description,id,urls}) => {
		return (
		<img alt={description} key= {id} src={urls.regular} />
		);
	});

	return (
		<div className="image-list"> {showImages} </div>
	);
}

export default ImageList;