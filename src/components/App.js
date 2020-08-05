import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<Header/>
				<Route path="/" exact>
					<StreamList/>
				</Route>
				<Route path="/streams/new" exact>
					<StreamCreate/>
				</Route>
				<Route path="/streams/edit" exact>
					<StreamEdit/>
				</Route>
				<Route path="/streams/delete" exact>
					<StreamDelete/>
				</Route>
				<Route path="/streams/show" exact>
					<StreamShow/>
				</Route>
			</BrowserRouter>
		</div>
	);
};

export default App;
