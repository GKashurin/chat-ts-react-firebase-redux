import React from "react";
import {Switch, Route} from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import classes from "./App.module.scss"
import Chat from "./components/chat/Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./Firebase";
import Login from "./components/login/Login";

const App: React.FC = () => {
	// @ts-ignore
	const [authUserName] = useAuthState(auth)
	return (
		<div className={classes.App}>
			{!authUserName ? <Login/> :
				<div className={classes.home}>
					<SideBar authUserName={authUserName}/>
					<Switch>
						<Route path="/" exact>
							<Chat authUserName={authUserName}/>
						</Route>
					</Switch>
				</div>
			}
		</div>
	);
};

export default App;