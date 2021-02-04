import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { makeStyles } from "@material-ui/core/styles";

// Material UI custom styles
const useStyles = makeStyles({
	widget__articleIcon: {
		fontSize: 12,
	},
});

function Widgets() {
	const classes = useStyles();

	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon className={classes.widget__articleIcon} />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle(
				"Ryan Hrechka graduates Lighthouse Labs!",
				"Canada News - 4325 readers"
			)}
			{newsArticle("Corona Virus Canada update", "Top news - 1424 readers")}
			{newsArticle("Bitcon hits new ath of $22k", "Crypto - 8000 readers")}
			{newsArticle("Learn to code!", "Learn to Code - 324 readers")}
			{newsArticle("Is Redux any good?", "Code - 123 readers")}
			{newsArticle("Tesla hits new highs", "Car & Auto - 389 readers")}
			{newsArticle(
				"Is RAFH the best island DJ?",
				"Music & Entertainment - 564  readers"
			)}
		</div>
	);
}

export default Widgets;
