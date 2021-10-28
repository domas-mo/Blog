import React from 'react';
import {useParams} from 'react-router-dom';

import StyledLink from './styled/Pagination/PaginationNav.styled';
import PaginationUlStyled from './styled/Pagination/PaginationUl.styled';
import PaginationStyled from './styled/Pagination/Pagination.styled';

const Pagination = (props) => {
	const activeClass = 'active';
	const {categor = '', page} = useParams();
	const path = `/categor,${categor}`;
	const {children, limit = 6} = props;
	const length = children.length;
	const begin = limit * (page - 1);
	const end = page * limit;
	const pages = Math.ceil(length / limit);
	const links = (new Array(pages).fill(0)).map((item, index) => <li key={index}>
			<StyledLink activeClassName={activeClass} to={`${path}/${index + 1}`}>{index + 1}</StyledLink>
		</li>
	);

	return (
		<>
			<PaginationStyled>
				{children.slice(begin, end)}
			</PaginationStyled>
			<nav> 
				<PaginationUlStyled>
					<p>Wybierz stronę:</p>
					{links}
				</PaginationUlStyled>
			</nav>
		</>
	);

};

export default Pagination; 