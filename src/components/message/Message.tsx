import React, {useState} from "react";
import {db} from "../../Firebase";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import BorderColorSharpIcon from "@material-ui/icons/BorderColorSharp";
import {Input} from "@material-ui/core";
import classes from './Message.module.scss';

interface MessageProps {
	message: string;
	timestamp: any;
	id: string;
	user: object;
	roomID: string;
	authUserName: any;
}

const Message: React.FC<MessageProps> = ({message, timestamp, id, user, roomID, authUserName}) => {
	const [editableMessage, setEditableMessage] = useState<boolean>(false)
	const [messageText, setMessageText] = useState<string>(message)

	const deleteMessage = (): void => {
		db.collection("rooms")
			.doc(roomID)
			.collection("messages")
			.doc(id)
			.delete()
	};
	const updateMessage = (): void => {
		if (!editableMessage) {
			setEditableMessage(true)
		} else {
			db.collection("rooms")
				.doc(roomID)
				.collection("messages")
				.doc(id)
				.update({message: messageText})
			setEditableMessage(false)
		}
	}
	return (
		<div className={classes.message}>
			<p>
				{user}
				{new Date(timestamp?.toDate()).toUTCString()}
			</p>
			<div className={classes.message__wrapper}>
				{!editableMessage ? <span>{message}</span> :
					<Input
						type="text"
						value={messageText}
						onChange={e => setMessageText(e.target.value)}
					/>}
				{authUserName.displayName === user ?
					<div className={classes.message__controls}>
						<RestoreFromTrashIcon onClick={deleteMessage}/>
						<BorderColorSharpIcon onClick={updateMessage}/>
					</div> : null}
			</div>
		</div>
	);
};

export default Message;