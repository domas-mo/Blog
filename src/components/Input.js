import React from 'react';
import {useHistory, Redirect} from 'react-router-dom';

const Input = ({division, setDivision}) => {
	const history = useHistory();

	const handleChange = (e) => {
		const {value} = e.target;
		setDivision((prev) => {
			return {
				...prev,
				relation: value
			};
		});
		history.push(`/categor,${value}`);
	};

	return (
		<>
			<form>
				<label htmlFor="categor">Category: </label>
				<select form="categor" onChange={handleChange}>
					<option value=''>Wszystkie</option>
					<option value='rakieta'>Rakieta</option>
					<option value='wahadłowiec'>Wahadłowiec</option>
				</select>
			</form>
			<Redirect to={`/categor,${division.relation}/1`}/>
		</>
	);
};

export default Input; 