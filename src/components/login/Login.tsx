import React from "react";
import Button from "@material-ui/core/Button";
import {auth, provider} from "../../Firebase";

const Login: React.FC = () => {
	const signIn = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		auth.signInWithPopup(provider)
			.catch(error => alert(error.message))
	}
	return (
		<div className="login">
			<h1>Войдите в чат с помощью аккаунта Google</h1>
			<Button onClick={signIn}>Войти</Button>
		</div>
	);
};

export default Login;