import React from 'react';


const RegisterPage = () => {
  return (
    <main className="container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Join us to get the latest tech deals</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
         
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
          />

      
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
          />

       
          <input 
            type="password" 
            placeholder="Create Password" 
            required 
          />

          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;