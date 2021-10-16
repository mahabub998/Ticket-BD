import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import MenuBar from './Components/MenuBar/MenuBar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
const userInfo = {
	name: '',
	email: '',
	password: '',
	isValidUser: false
};
export const UserContext = createContext();

function App() {
	const [ user, setUser ] = useState(userInfo);
	return (
		<UserContext.Provider value={[user, setUser]}>
			<Router>
				<MenuBar/>
				<Header />
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<PrivateRoute path="/destination">
						<Destination></Destination>
					</PrivateRoute>
					<Route path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</UserContext.Provider>
	);
}

export default App;
