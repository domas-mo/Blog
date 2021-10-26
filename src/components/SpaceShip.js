import React, {useEffect, useState} from 'react';
import fetchData from '../prismic-configuration';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Select from './Select';
import SpaceshipData from './SpaceshipData';
import Pagination from './Pagination';
import Post from './Post';

import TtitleStyled from './styled/Title/Title.styled';

const SpaceShip = () => {
	const [doc, setDocData] = useState([]);
	const [division, setDivision] = useState({relation: ''});

	useEffect(() => (
		fetchData('post')
			.then((response) => {
				const filteredType = response.results.filter((post) => {
					if (division.relation ? post.data.relation.uid === division.relation : true) {
						return post;
					} 
				});
				setDocData([...filteredType]);

			})
	), [setDocData, division.relation]);

    return (
		<Router>
			<TtitleStyled>
				<h1>SpaceShip.</h1>
				<p>
					SpaceShip to blog którego celem jest popularyzacja technologii, które pomogły nam w eksploracji kosmosu. <br/>
					Blog zawiera ciekawostki oraz opisy najważniejszych programów badań przestrzeni kosmicznej.<br/>
					<br/>
					<q><em>That's one small step for man, one giant leap for mankind</em></q> - Neil Amstrong
				</p>
			</TtitleStyled>
			<Switch>
				<section>
					<Route>
						<Select division={division} setDivision={setDivision}/>
					</Route>
					<Route exact path="/categor,:categor?/:page">
						<Pagination>
							{doc.map(item => (<Post key={item.uid} post={item}/>))}
						</Pagination>
					</Route>
					<Route path="/spaceship/:type">
						<SpaceshipData doc={doc}/>
					</Route>
				</section>
			</Switch>
		</Router>
	);
};

export default SpaceShip; 