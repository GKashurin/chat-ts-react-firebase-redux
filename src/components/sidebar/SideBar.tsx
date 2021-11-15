import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import SidebarOption from "../sidebarOption/SidebarOption";
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../../Firebase";
import classes from "./Sidebar.module.scss"
import header from "../../App.module.scss"

interface SideBarProps {
	authUserName: any;
}

const SideBar: React.FC<SideBarProps> = ({authUserName}) => {
	// @ts-ignore
	const [rooms] = useCollection(db.collection("rooms"));
	return (
		<div className={classes.sidebar}>
			<div className={header.header}>
				<div className={classes.sidebar__info}>
					<h3>
						<FiberManualRecordIcon />
						Вы вошли как:&nbsp;<strong>{authUserName.displayName}</strong>
					</h3>
				</div>
			</div>
			<div className={classes.sidebar__options}>
				<h2 style={{marginBottom: 20}}>Доступные чаты:</h2>
				{rooms?.docs.map(doc => (
					<SidebarOption
						key={doc.id}
						id={doc.id}
						title={doc.data().name}
					/>
				))}
			</div>
		</div>
	);
};

export default SideBar;