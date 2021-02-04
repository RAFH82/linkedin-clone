import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
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
				"Now seeking job opportunities to build new exciting things!"
			)}
			{newsArticle(
				"Corona Virus Canada updates",
				"Cases dropping due to stay at home orders"
			)}
			{newsArticle("Bitcon hits new ath of $22k", "Crypto - 8000 readers")}
			{newsArticle(
				"Learn to code!",
				"Anyone can do it, with time, patience, and practice!"
			)}
		</div>
	);
}

export default Widgets;
