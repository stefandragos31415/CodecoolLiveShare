import React from "react";

function Header(props) {
	let totalFollowers = 0;
	props.users.forEach((user) => {
		totalFollowers += user.followers
	}
	)

	return (
		<div className="header">
			Social Media Dashboard
			<div className="sub-header">
				Total followers: {totalFollowers}
			</div>
		</div>

	)
}

export default Header;