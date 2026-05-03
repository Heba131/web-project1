import React from 'react';

const LoginPage = () => {
  return (
    <main className="container">
   
      <div className="auth-card">
        <h2>Login to Elevo</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Enter your details to continue</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
       
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
          />

          <input 
            type="password" 
            placeholder="Password" 
            required 
          />

     
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;