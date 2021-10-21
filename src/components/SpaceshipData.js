import React from 'react';
import {useParams, useHistory} from 'react-router-dom';

const SpaceshipData = ({doc}) => {
	const {type} = useParams();
	const history = useHistory();

	const selected = doc.find((item) => {
		return item.uid === type;
	});

	const {data} = selected;

	const title = data.title[0].text;
    const text = data.text[0].text;
	const image = {
		photo: data.image.url,
		altText: data.image.alt
	};
	const relation = data.relation.uid;
    const handleBackClick = () => {
		history.goBack();
	}

	return (
		<div>
			<h1>{title}</h1>
            <p>{text}</p>
			<img src={image.photo} alt={image.altText} style={{maxWidth: '500px'}}/>
			<p>{relation}</p>
			<button onClick={handleBackClick}>Wstecz</button>
		</div>
	);
};

export default SpaceshipData; 