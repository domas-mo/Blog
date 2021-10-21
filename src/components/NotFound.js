import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
	return (
		<>
			<p>Podana strona nie istnieje! Wroc do <Link to="/">Strony Glownej</Link> </p>
		</>
	);
};

export default NotFound;