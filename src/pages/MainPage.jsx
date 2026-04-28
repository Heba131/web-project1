import { useState } from 'react';

const initialData = [
  { id: 1, name: 'آيفون 15 برو', category: 'هواتف', price: 900 },
  { id: 2, name: 'ماك بوك اير M2', category: 'لابتوبات', price: 1100 },
  { id: 3, name: 'سماعات سوني WH', category: 'اكسسوارات', price: 250 },
  { id: 4, name: 'سامسونج S24', category: 'هواتف', price: 850 },
  { id: 5, name: 'ماوس لاسلكي', category: 'اكسسوارات', price: 40 },
  { id: 6, name: 'لابتوب ديل XPS', category: 'لابتوبات', price: 1300 },
  { id: 7, name: 'ساعة آبل Ultra', category: 'ساعات ذكية', price: 700 },
  { id: 8, name: 'لوحة مفاتيح ميكانيكية', category: 'اكسسوارات', price: 120 },
  { id: 9, name: 'شاشة ألعاب 4K', category: 'شاشات', price: 450 },
  { id: 10, name: 'جهاز لوحي آيباد', category: 'تابلت', price: 600 },
];

const MainPage = () => {
  const [items] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('none');

  const filteredItems = items
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'priceLow') return a.price - b.price;
      if (sortBy === 'priceHigh') return b.price - a.price;
      return 0;
    });

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif', direction: 'rtl' }}>
      <h1>متجر الإلكترونيات</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="ابحث عن جهاز..." 
          style={{ padding: '8px', width: '250px' }}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />

        <select style={{ padding: '8px' }} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">ترتيب حسب</option>
          <option value="priceLow">السعر: من الأقل</option>
          <option value="priceHigh">السعر: من الأعلى</option>
        </select>
      </div>

      {/* --- بداية الجزء المستبدل (التصميم المتجاوب) --- */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px',
        marginTop: '20px' 
      }}>
        {filteredItems.map(item => (
          <div key={item.id} style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            borderRadius: '12px', 
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)' 
          }}>
            <h3 style={{ color: '#0369a1' }}>{item.name}</h3>
            <p style={{ color: '#666' }}>{item.category}</p>
            <p style={{ fontWeight: 'bold', color: '#d4af37', fontSize: '1.2rem' }}>
              {item.price} دينار
            </p>
          </div>
        ))}
      </div>
      {/* --- نهاية الجزء المستبدل --- */}

      {filteredItems.length === 0 && <p>لا توجد نتائج تطابق بحثك.</p>}
    </main>
  );
};

export default MainPage;