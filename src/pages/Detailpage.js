import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

const Detailpage = () => {
    const posts = useSelector(state => state.data.posts)
    const history = useHistory()
    const { id } = useParams();
    const [ post ] = posts.filter(post => post.id.toString() === id)

    return (
        <div className="jumbotron">
            <button className="btn btn-light d-flex align-items-center" onClick={history.goBack}><i className="icon d-inline-flex"><svg classnmae="bi bi-chevron-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></i><span>&nbsp;Back</span></button>
            <h1 className="display-4">{ post.title }</h1>
            <p className="lead">{ post.body }</p>
        </div>
    );
}

export default Detailpage;
