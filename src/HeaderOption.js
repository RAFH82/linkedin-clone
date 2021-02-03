import React from "react";
import "./HeaderOption.css";

// Material UI
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Material UI custom styles
const useStyles = makeStyles({
	headerOption__icon: {
		objectFit: "contain",
		height: 25,
		width: 25,
	},
});

function HeaderOption({ avatar, Icon, title }) {
	const classes = useStyles();
	return (
		<div className="headerOption">
			{Icon && <Icon className={classes.headerOption__icon} />}
			{avatar && <Avatar className={classes.headerOption__icon} src={avatar} />}
			<h3 className="headerOption__title">{title}</h3>
		</div>
	);
}

export default HeaderOption;
