import React from 'react';
import {useParams, useHistory} from 'react-router-dom';

import StyledSpaceShip from './styled/SpaceShip/SpaceShip.styled';

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

    const handleBackClick = () => {
		history.goBack();
	}

	return (
		<StyledSpaceShip>
			<h1>{title}</h1>
			<p>{text}</p>
			<img src={image.photo} alt={image.altText} style={{maxWidth: '500px'}}/>
			<button onClick={handleBackClick}>Wstecz</button>
		</StyledSpaceShip>
	);
};

export default SpaceshipData; 