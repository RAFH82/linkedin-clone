import React from "react";
import "./HeaderOption.css";

// Material UI
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

// Material UI custom styles
const useStyles = makeStyles({
	headerOption__icon: {
		objectFit: "contain",
		height: 25,
		width: 25,
	},
});

function HeaderOption({ avatar, Icon, title, onClick }) {
	const user = useSelector(selectUser);

	const classes = useStyles();
	return (
		<div onClick={onClick} className="headerOption">
			{Icon && <Icon className={classes.headerOption__icon} />}
			{avatar && (
				<Avatar className={classes.headerOption__icon}>{user?.email[0]}</Avatar>
			)}
			<h3 className="headerOption__title">{title}</h3>
		</div>
	);
}

export default HeaderOption;
