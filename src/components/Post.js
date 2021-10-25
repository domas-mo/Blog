import React from 'react';
import {Link} from 'react-router-dom';

import DivPost from './styled/Post/DivPost.styled';

const Post = (props) => {
	const {post} = props;
	return (
		<DivPost>
			<img src={post.data.img.url} alt={post.data.img.alt}/>
			<h1>{post.data.title[0].text}</h1>
			<p>{post.data.short_info[0].text}</p>
			<p>data wpisu: {post.data.date}</p>
			<button>
				<Link exact to={`/spaceship/${post.uid}`}>Zobacz więcej...</Link>
			</button>
		</DivPost>
	);
};

export default Post;