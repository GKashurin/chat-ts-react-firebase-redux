import React from "react";
import {useDispatch} from "react-redux";
import {enterRoom} from "../../redux/actions/enterRoomActions";
import classes from "./SidebarOption.module.scss";

interface SidebarOptionProps {
	title: string;
	id: string;
}
const SidebarOption: React.FC<SidebarOptionProps> = ({title, id}) => {
	const dispatch = useDispatch();
	const selectRoom = (): void => {
		if (id) dispatch(enterRoom(id))
	}
	return (
		<div className={classes.sidebar__option} onClick={selectRoom}>
			{title}
		</div>
	);
};

export default SidebarOption;