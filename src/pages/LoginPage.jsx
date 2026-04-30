import React from 'react';

// This is the Login Page component
const LoginPage = () => {
  return (
    <main className="container">
      {/* The auth-card class handles the dark background and silver border */}
      <div className="auth-card">
        <h2>Login to Elevo</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Enter your details to continue</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Email Input */}
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
          />

          {/* Password Input */}
          <input 
            type="password" 
            placeholder="Password" 
            required 
          />

          {/* Login Button with blue theme[cite: 1] */}
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;