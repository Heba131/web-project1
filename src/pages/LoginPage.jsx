// src/pages/LoginPage.jsx
const LoginPage = () => {
  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <div style={{ maxWidth: '300px', margin: '0 auto', border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
        <h2>تسجيل الدخول</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="البريد الإلكتروني" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }} />
          <input type="password" placeholder="كلمة المرور" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }} />
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>دخول</button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;