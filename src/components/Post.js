import React from 'react';
import PropTypes from 'prop-types';
import  { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <div className="card mb-4 mx-2" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <Link to={`/post/${post.id}`} className="btn btn-primary">Open</Link>
            </div>
        </div>
    );
}

export default Post;

Post.propTypes = {
    post: PropTypes.array
}