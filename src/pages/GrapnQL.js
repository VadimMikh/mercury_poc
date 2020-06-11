import React, { Fragment } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Card from '../components/Card';
import { USERS } from '../graphql/requests';

const GrapnQL = () => {
	// const { loading, error, data } = useQuery(USERS);
	const [ getData, { loading, data } ] = useLazyQuery(USERS)
	const buttonData = {
		class: data ? 'success' : 'warning',
		text: data ? 'Done' : 'Make GraphQL request',
		disabled: !!data
	}
	console.log('graphql response:', data)

	return (
		<Fragment>
			<div className="text-center">
			<button 
				className={`btn btn-${buttonData.class} mb-4`} 
				disabled={buttonData.disabled || loading}
				onClick={() => getData()}>
				{ buttonData.text }
			</button>
			</div>
			{ data && (
				<div className="row justify-content-center">
					<h2 className="mb-4">Users' cards</h2>
				</div>
			)}
			<div className="row d-flex flex-wrap justify-content-around py-4">
				{ !loading 
					? (data && data.users.length && data.users.map(user => <Card user={user} key={user.id} />)) 
					: <span>GraphQL request in process...</span> }
			</div>
		</Fragment>
	);
}

export default GrapnQL;
