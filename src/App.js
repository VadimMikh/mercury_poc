import React from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	Link,
	Switch,
	Route
  } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About';
import Detailpage from './pages/Detailpage';
import GraphQL from './pages/GrapnQL';

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const App = () => (
	<ApolloProvider client={client}>
		<Router>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<Link className="navbar-brand" to="/">React App</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" activeClassName="active" to="/graphql">GraphQL</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
					</li>
				</ul>
				</div>
			</nav>
			<div className="container py-4">
				<Switch>
					<Route path="/graphql">
						<GraphQL />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/post/:id" children={<Detailpage />} />
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	</ApolloProvider>
)

export default App
