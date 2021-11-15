import React from "react";
import {useSelector} from "react-redux";
import {db} from "../../Firebase";
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import Message from "../message/Message"
import ChatForm from "../chatForm/chatForm";
import classes from "./Chat.module.scss"
import header from "../../App.module.scss";

const Chat = ({authUserName}) => {
	const roomID = useSelector((state => state.enterRoom.roomId))

	const [roomDetails] = useDocument(
		roomID &&
		db.collection("rooms").doc(roomID)
	);

	const [roomMessages] = useCollection(
		roomID &&
		db.collection("rooms")
			.doc(roomID)
			.collection("messages")
			.orderBy("timestamp", "asc")
	)
	const roomName = roomDetails?.data().name;

	return (
		<div className={classes.chat}>
			{roomDetails && roomMessages ?
				<div className={classes.chat__content}>
					<div className={header.header}>Вы находитесь в чате:&nbsp;
						<strong> {roomName}</strong>
					</div>
					<div className={classes.messages}>
						{
							roomMessages?.docs.map(item => {
								return (
									<Message key={item.id}
											 message={item.data().message}
											 timestamp={item.data().timestamp}
											 user={item.data().user}
											 roomID={roomID}
											 id={item.id}
											 authUserName={authUserName}
									/>
								)
							})
						}
					</div>
					<ChatForm roomName={roomName} roomID={roomID} authUserName={authUserName}/>
				</div> : null}
		</div>
	);
};

export default Chat;