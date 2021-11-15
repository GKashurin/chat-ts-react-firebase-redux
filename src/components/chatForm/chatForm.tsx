import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {db} from "../../Firebase";
import firebase from "firebase/compat";
import SendIcon from "@material-ui/icons/Send";
import {Input} from "@material-ui/core";
import classes from "./ChatForm.module.scss"

interface ChatFormProps {
	roomName: string;
	authUserName: any;
	roomID: string
}

const ChatForm: React.FC<ChatFormProps> = ({roomName, authUserName, roomID}) => {
	const [message, setMessage] = useState<string>("")

	const sendMessage = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		db.collection("rooms")
			.doc(roomID)
			.collection("messages")
			.add({
				message: message,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				user: authUserName.displayName
			})
		setMessage("")
	}

	return (
		<form className={classes.form}>
			<Input
				className={classes.input}
				value={message}
				type="text"
				placeholder={`сообщение в чат "${roomName}"`}
				onChange={e => setMessage(e.target.value)}
			/>
			<Button onClick={sendMessage}
					hidden type="submit">Отправить&nbsp;
				<SendIcon />
			</Button>
		</form>
	);
};

export default ChatForm;