// src/pages/AboutPage.jsx
const AboutPage = () => {
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1>عن المشروع</h1>
      <p>
        هذا المشروع هو تطبيق ويب تفاعلي لعرض المنتجات الإلكترونية، تم بناؤه باستخدام 
        React.js كجزء من متطلبات مادة برمجة وتطوير تطبيقات الويب.
      </p>
      <h2>أهداف المشروع:</h2>
      <ul>
        <li>تطبيق مفاهيم المكونات (Components) في React[cite: 18].</li>
        <li>إدارة الحالة (State Management) باستخدام Hooks[cite: 23].</li>
        <li>تنفيذ منطق البحث والفلترة والترتيب برمجياً[cite: 24, 26].</li>
        <li>ضمان استجابة التصميم مع مختلف الشاشات (Responsive Design).</li>
      </ul>
      <p>تم تطويره بواسطة: [أسماء أعضاء الفريق]</p>
    </main>
  );
};

export default AboutPage;