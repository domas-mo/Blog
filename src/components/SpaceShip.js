import React, {useEffect, useState} from 'react';
import fetchData from '../prismic-configuration';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Input from './Input';
import SpaceshipData from './SpaceshipData';
import Pagination from './Pagination';
import Post from './Post';

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
			<header>
				<h1>Statki kosmiczne</h1>
			</header>
			<Switch>
				<section>
					<Route>
						<Input division={division} setDivision={setDivision}/>
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