import React, { Fragment } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Card from '../components/Card';


const TEST_DATA = gql`
	{
		users {
			id
			username
			email
				website
			company {
			  name
			  catchPhrase
			  bs
			}
		}
	}
`;

const GrapnQL = () => {
	// const { loading, error, data } = useQuery(TEST_DATA);
	const [ getData, { loading, data } ] = useLazyQuery(TEST_DATA);
	const fetched = data?.users.length
	console.log('graphql response:', data)

	return (
		<Fragment>
			<div className="text-center">
				<button 
					className="btn btn-warning mb-4" 
					disabled={fetched}
					onClick={() => getData()}>
					Make GraphQL request
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
