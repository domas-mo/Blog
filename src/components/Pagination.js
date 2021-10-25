import React from 'react';
import {Link, useParams} from 'react-router-dom';

import PaginationLinkStyled from './styled/Pagination/PaginationLink.styled';
import PaginationStyled from './styled/Pagination/Pagination.styled';

const Pagination = (props) => {
	const {categor = '', page} = useParams();
	const path = `/categor,${categor}`;
	const {children, limit = 6} = props;
	const length = children.length;
	const begin = limit * (page - 1);
	const end = page * limit;
	const pages = Math.ceil(length / limit);
	const links = (new Array(pages).fill(0)).map((item, index) => <li key={index}>
			<Link to={`${path}/${index + 1}`}>{index + 1}</Link>
		</li>
	);

	return (
		<>
			<PaginationStyled>
				{children.slice(begin, end)}
			</PaginationStyled>
			<nav> 
				<PaginationLinkStyled>
					<p>Wybierz stronę:</p>
					{links}
				</PaginationLinkStyled>
			</nav>
		</>
	);

};

export default Pagination; 