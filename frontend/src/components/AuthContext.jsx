import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setAuth(JSON.parse(storedUser));
		}
	}, []);

	const login = async (email, password) => {
		try {
			const response = await axios.post(
				"https://redsoftware-backend.onrender.com/login",
				{ email, password },
			);
			setAuth(response.data);
			localStorage.setItem("user", JSON.stringify(response.data));
		} catch (error) {
			throw new Error("Login failed");
		}
	};

	const logout = () => {
		setAuth(null);
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ auth, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
