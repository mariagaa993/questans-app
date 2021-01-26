import React, { Fragment } from 'react';
import './App.scss';
import Principal from './pages/principal/Principal';
import Login from './pages/login/Login';

const App = () => {
  	return (
		<Fragment>
			<Principal />
			<Login />
		</Fragment>
  	);
}

export default App;
