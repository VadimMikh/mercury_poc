import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataAction, showLoader, hideLoader, hideButton } from './../actions/dataActions'
import Post from '../components/Post';

export default () => {
	const posts = useSelector(state => state.data.posts)
	const loader = useSelector(state => state.data.loading)
	const showbutton = useSelector(state => state.data.showbutton)
	const additionalPostsCount = 10

	const dispatch = useDispatch()

	const fetchData = async (event) => {
		dispatch(showLoader())
		await dispatch(fetchDataAction(additionalPostsCount))
		dispatch(hideLoader())
		dispatch(hideButton())
	}

	return (
		<div className="row text-center justify-content-center">
			<div className="col-12">
				<h2 className="my-4">Posts list</h2>
			</div>
			<div className="row d-flex flex-wrap justify-content-around py-4">
				{ posts.length && posts.map(post => <Post post={post} key={post.id} />) }
			</div>
			{ !loader ? (showbutton && <button className="btn btn-success" onClick={fetchData}>Fetch posts to Redux</button>) : <span>Loading...</span>}
		</div>
	)
}