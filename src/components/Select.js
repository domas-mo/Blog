import React from 'react';
import {useHistory, Redirect} from 'react-router-dom';

import StyledSelect from './styled/Select/Select.styled';

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
			<hr/>
			<StyledSelect>
				<select form="categor" onChange={handleChange}>
					<option value=''>Wszystkie Kategorie</option>
					<option value='rakieta'>Rakieta</option>
					<option value='wahadłowiec'>Wahadłowiec</option>
				</select>
			</StyledSelect>
			<Redirect to={`/categor,${division.relation}/1`}/>
			<hr/>
		</>
	);
};

export default Input; 