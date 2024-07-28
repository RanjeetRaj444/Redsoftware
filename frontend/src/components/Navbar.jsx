import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const isLoggedIn = !!localStorage.getItem("user");

	const handleLogout = () => {
		localStorage.removeItem("user");
		navigate("/");
	};

	return (
		<nav className="bg-blue-500 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="text-white text-lg">
					Story App
				</Link>
				<div>
					{isLoggedIn ? (
						<>
							<Link to="/create" className="text-white mr-4">
								Create Story
							</Link>
							<button onClick={handleLogout} className="text-white">
								Logout
							</button>
						</>
					) : (
						<>
							<Link to="/login" className="text-white mr-4">
								Login
							</Link>
							<Link to="/register" className="text-white">
								Register
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
