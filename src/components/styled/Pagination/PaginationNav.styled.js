import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
	border: 1px solid #60666d;
	padding: 2px;
	color: #60666d;
	text-decoration: none;
	&:hover {
		color: #000000;
		border: 1px solid #000000;
	}
	&.${props => props.activeClassName} {
		background-color: #4e4a7e;
		color: white
	}
`;

export default StyledLink