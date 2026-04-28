// src/pages/RegisterPage.jsx
const RegisterPage = () => {
  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <div style={{ maxWidth: '300px', margin: '0 auto', border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
        <h2>إنشاء حساب جديد</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="الاسم الكامل" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }} />
          <input type="email" placeholder="البريد الإلكتروني" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }} />
          <input type="password" placeholder="كلمة المرور" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }} />
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>تسجيل</button>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;