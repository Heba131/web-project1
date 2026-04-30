
import { useState } from 'react';

const initialData = [
  { id: 1, name: 'iPhone 15 Pro', category: 'Phones', price: 999, image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop'},
  { id: 2, name: 'MacBook Air M2', category: 'Laptops', price: 1199, image:  'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop&bg=white'},
  { id: 3, name: 'Sony Headphones', category: 'Accessories', price: 350, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
  { id: 4, name: 'Samsung Galaxy S24', category: 'Phones', price: 899, image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400' },
  { id: 5, name: 'Logitech Mouse', category: 'Accessories', price: 49, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400' },
  { id: 6, name: 'Dell XPS Laptop', category: 'Laptops', price: 1299, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400' },
  { id: 7, name: 'Apple Watch Ultra', category: 'Watches', price: 799, image: 'https://images.unsplash.com/photo-1434494878577-86c23bddca19?w=400' },
  { id: 8, name: 'Gaming Keyboard', category: 'Accessories', price: 120, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400' },
  { id: 9, name: '4K Gaming Monitor', category: 'Screens', price: 450, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400' },
  { id: 10, name: 'iPad Pro M2', category: 'Tablets', price: 799, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400' },
];

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('none');

  const filtered = initialData
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'low') return a.price - b.price;
      if (sortOrder === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <main className="container">
      <h1>Tech Store</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <input type="text" placeholder="Search products..." onChange={(e) => setSearchTerm(e.target.value)} style={{ maxWidth: '300px' }} />
        <select onChange={(e) => setSortOrder(e.target.value)} style={{ maxWidth: '150px' }}>
          <option value="none">Sort By</option>
          <option value="low">Price: Low</option>
          <option value="high">Price: High</option>
        </select>
      </div>

      <div className="product-grid">
        {filtered.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-img" />
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p className="product-price">${item.price}</p>
            <button className="btn">View Details</button>
          </div>
        ))}
      </div>
    </main>
  );
};
export default MainPage;