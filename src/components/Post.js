import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
	const {post} = props;
	return (
		<div style={{border: '2px solid black', margin: '1rem'}}>
			<Link exact to={`/spaceship/${post.uid}`}>{post.data.title[0].text}</Link>
			<p>{post.data.short_info[0].text}</p>
			<p>data wpisu: {post.data.date}</p>
		</div>
	);
};

export default Post;