


const AppHeader = (props) => {
	const { role, nom, prenom } = props.user;
	function logout() {
		if (window.confirm("Are you sure you want to log out?")) {
			localStorage.removeItem("user");
			window.location.href = "/login";
		}
	}


	return (
		<div className="AppHeader">
			<div className="left">
				<p>Current Academic Session 2022-2023</p>
			</div>
			<div className="right">
				<p>{role}</p>
				<p>{prenom} {nom}</p>
				<button type='button' style={{ color: "red" }} onClick={logout}>Log Out</button>
			</div>
		</div>
	);
}

export default AppHeader;