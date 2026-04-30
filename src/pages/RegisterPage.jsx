import React from 'react';

// This is the Register Page component[cite: 2]
const RegisterPage = () => {
  return (
    <main className="container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Join us to get the latest tech deals</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Full Name Input */}
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
          />

          {/* Email Input */}
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
          />

          {/* Password Input */}
          <input 
            type="password" 
            placeholder="Create Password" 
            required 
          />

          {/* Register Button */}
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;