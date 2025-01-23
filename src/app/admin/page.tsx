'use client';
import React, { useState } from 'react';

const AdminLoginPage: React.FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login logic here
		console.log('Username:', username);
		console.log('Password:', password);
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
				<h2>Admin Login</h2>
				<label>
					Username:
					<input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
				</label>
				<label>
					Password:
					<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
				</label>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default AdminLoginPage;
