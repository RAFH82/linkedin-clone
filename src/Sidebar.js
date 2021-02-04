import React from "react";
import "./Sidebar.css";
import avatarBackground from "./imgs/04180_grandtetonsunset_3360x2100.jpg";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
	const user = useSelector(selectUser);

	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img src={avatarBackground} alt="avatar background" />
				<Avatar className="sidebar__avatar" src={user?.photoURL}>
					{user?.email[0]}
				</Avatar>
				<h2>{user?.displayName}</h2>
				<h4>{user?.email}</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed your profile</p>
					<p className="sidebar__statNumber">2,594</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">2,448</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("software engineering")}
				{recentItem("design")}
				{recentItem("developer")}
			</div>
		</div>
	);
}

export default Sidebar;
