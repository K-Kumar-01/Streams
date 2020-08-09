import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
// 351149860220-vl2j3gd2f8ih3706v3qocf27dqqv0q41.apps.googleusercontent.com


// clirent secret: oiwRdJf1XbjrYpsg1tsInrDe

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
