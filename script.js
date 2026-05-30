/* ============================================================
   script.js — متجر النخبة
   ============================================================ */

/* ============================================================
   ⚙️  إعدادات EmailJS
   ────────────────────────────────────────────────────────────
   1. سجّل في https://www.emailjs.com (مجاني)
   2. أنشئ خدمة بريد (Email Service) واحصل على Service ID
   3. أنشئ قالب (Email Template) واحصل على Template ID
   4. من لوحة التحكم احصل على Public Key
   5. استبدل القيم أدناه بقيمك الخاصة
   ============================================================ */
const EMAILJS_CONFIG = {
  publicKey:  '4rVkOGY3YtlkOu5qj',    // ← ضع Public Key هنا
  serviceID:  'Sadoer.iq',    // ← ضع Service ID هنا
  templateID: 'template_66dn9rj',  // ← ضع Template ID هنا
};

/* ============================================================
   🛒  قائمة المنتجات
   ────────────────────────────────────────────────────────────
   لإضافة منتج: أضف كائناً جديداً داخل المصفوفة بنفس الشكل.
   لتغيير صورة: غيّر قيمة "image" (رابط URL أو مسار محلي).
   لتغيير سعر:  غيّر قيمة "price" (رقم فقط بدون عملة).
   لتغيير اسم:  غيّر قيمة "name".
   ============================================================ */
const PRODUCTS = [
  // ── المجموعة الأولى ──
  { id: 1,  name: 'Hyaluronic Acid Face Lifting Ampoules',     price: 5500, image: 'https://i.ibb.co/YFTPt51q/1778489985350.png' },
  { id: 2,  name: 'ساعة ذكية رياضية',           price: 299, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' },
  { id: 3,  name: 'حقيبة جلد أصلي',             price: 220, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80' },
  { id: 4,  name: 'نظارة شمسية بولارايزد',       price: 95,  image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80' },
  { id: 5,  name: 'عطر فرنسي فاخر 100ml',       price: 380, image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80' },
  { id: 6,  name: 'حذاء رياضي عصري',            price: 260, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' },

  // ── المجموعة الثانية ──
  { id: 7,  name: 'محفظة جلدية رجالية',          price: 85,  image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80' },
  { id: 8,  name: 'طقم أقلام فاخر',             price: 75,  image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80' },
  { id: 9,  name: 'مصباح طاولة LED',            price: 115, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80' },
  { id: 10, name: 'كوب قهوة حراري',             price: 55,  image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80' },
  { id: 11, name: 'دفتر ملاحظات جلدي A5',       price: 68,  image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80' },
  { id: 12, name: 'شاحن لاسلكي سريع',           price: 98,  image: 'https://images.unsplash.com/photo-1608751819407-8c8672b55e47?w=400&q=80' },

  // ── المجموعة الثالثة ──
  { id: 13, name: 'سماعة أذن مع مايك',          price: 65,  image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80' },
  { id: 14, name: 'لوحة مفاتيح ميكانيكية',      price: 310, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80' },
  { id: 15, name: 'ماوس لاسلكي ألعاب',          price: 189, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80' },
  { id: 16, name: 'حزام جلد أصلي',              price: 72,  image: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?w=400&q=80' },
  { id: 17, name: 'نظارة قراءة طبية',           price: 48,  image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=80' },
  { id: 18, name: 'غطاء هاتف جلدي',             price: 39,  image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80' },

  // ── المجموعة الرابعة ──
  { id: 19, name: 'حقيبة ظهر سفر',             price: 175, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80' },
  { id: 20, name: 'وسادة تدليك رقبة',           price: 88,  image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80' },
  { id: 21, name: 'زجاجة مياه رياضية',          price: 42,  image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80' },
  { id: 22, name: 'سكين مطبخ احترافي',          price: 130, image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&q=80' },
  { id: 23, name: 'مبرد كاميرا Go Pro',         price: 210, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80' },
  { id: 24, name: 'مجموعة ألوان مائية',          price: 58,  image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80' },

  // ── المجموعة الخامسة ──
  { id: 25, name: 'مجموعة عناية بالبشرة',        price: 195, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80' },
  { id: 26, name: 'قناع وجه طبيعي (10 قطع)',    price: 55,  image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80' },
  { id: 27, name: 'شمعة عطرية فاخرة',           price: 78,  image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&q=80' },
  { id: 28, name: 'إطار صور خشبي 30x40',        price: 36,  image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400&q=80' },
  { id: 29, name: 'نبتة صناعية ديكور',           price: 45,  image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80' },
  { id: 30, name: 'سجادة صلاة مطرزة',           price: 120, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
];

/* ============================================================
   تهيئة EmailJS
   ============================================================ */
(function () {
  emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
})();

/* ============================================================
   توليد بطاقات المنتجات
   ============================================================ */
function renderProducts() {
  const grid = document.getElementById('productsGrid');

  PRODUCTS.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;
    // تأخير الظهور التدريجي
    card.style.animationDelay = `${index * 0.04}s`;

    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
             onerror="this.src='https://placehold.co/400x400/eef2f7/1a3c5e?text=صورة+المنتج'" />
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price} دينار عراقي</div>
        <div class="qty-wrap">
          <button class="qty-btn" onclick="changeQty(${product.id}, -1)" aria-label="تقليل الكمية">−</button>
          <input class="qty-input" type="number" id="qty_${product.id}"
                 value="0" min="0" max="99"
                 onchange="onQtyChange(${product.id}, this.value)"
                 oninput="onQtyChange(${product.id}, this.value)"
                 aria-label="كمية ${product.name}" />
          <button class="qty-btn" onclick="changeQty(${product.id}, 1)" aria-label="زيادة الكمية">+</button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ── تغيير الكمية بالأزرار ── */
function changeQty(productId, delta) {
  const input = document.getElementById(`qty_${productId}`);
  const current = parseInt(input.value) || 0;
  const newVal = Math.max(0, Math.min(99, current + delta));
  input.value = newVal;
  updateCardState(productId, newVal);
  updateCart();
}

/* ── تغيير الكمية يدوياً ── */
function onQtyChange(productId, val) {
  let num = parseInt(val);
  if (isNaN(num) || num < 0) num = 0;
  if (num > 99) num = 99;
  document.getElementById(`qty_${productId}`).value = num;
  updateCardState(productId, num);
  updateCart();
}

/* ── تحديث حالة بطاقة المنتج (selected / normal) ── */
function updateCardState(productId, qty) {
  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  if (!card) return;
  card.classList.toggle('selected', qty > 0);
}

/* ============================================================
   تحديث ملخص السلة
   ============================================================ */
function updateCart() {
  let totalQty = 0;
  let totalPrice = 0;

  PRODUCTS.forEach(p => {
    const qty = parseInt(document.getElementById(`qty_${p.id}`)?.value) || 0;
    totalQty += qty;
    totalPrice += qty * p.price;
  });

  const summary = document.getElementById('cartSummary');
  document.getElementById('selectedCount').textContent = totalQty;
  document.getElementById('totalPrice').textContent = totalPrice.toLocaleString('ar-SA');

  summary.classList.toggle('visible', totalQty > 0);

  // تحديث ملخص النموذج أيضاً
  updateFormSummary();
}

/* ── ملخص الطلب داخل النموذج ── */
function updateFormSummary() {
  const container = document.getElementById('formOrderSummary');
  const selectedItems = getSelectedItems();

  if (selectedItems.length === 0) {
    container.classList.remove('visible');
    container.innerHTML = '';
    return;
  }

  let html = '<h4>📦 المنتجات المختارة:</h4>';
  let total = 0;

  selectedItems.forEach(item => {
    const lineTotal = item.qty * item.price;
    total += lineTotal;
    html += `
      <div class="order-item">
        <span class="order-item-name">${item.name}</span>
        <span>${item.qty} × ${item.price} = ${lineTotal.toLocaleString('ar-IQ')} دينار عراقي</span>
      </div>`;
  });

  html += `
    <div class="order-total-line">
      <span>الإجمالي الكلي</span>
      <span>${total.toLocaleString('ar-IQ')} دينار عراقي</span>
    </div>`;

  container.innerHTML = html;
  container.classList.add('visible');
}

/* ── جمع المنتجات المختارة ── */
function getSelectedItems() {
  return PRODUCTS
    .map(p => ({ ...p, qty: parseInt(document.getElementById(`qty_${p.id}`)?.value) || 0 }))
    .filter(p => p.qty > 0);
}

/* ============================================================
   التحقق من صحة النموذج
   ============================================================ */
function validateForm() {
  let isValid = true;

  // مسح الأخطاء القديمة
  ['nameError', 'phoneError', 'addressError'].forEach(id => {
    document.getElementById(id).textContent = '';
  });
  document.getElementById('productsError').textContent = '';
  document.getElementById('customerName').classList.remove('error');
  document.getElementById('customerPhone').classList.remove('error');
  document.getElementById('customerAddress').classList.remove('error');

  const name    = document.getElementById('customerName').value.trim();
  const phone   = document.getElementById('customerPhone').value.trim();
  const address = document.getElementById('customerAddress').value.trim();

  if (!name) {
    document.getElementById('nameError').textContent = 'الاسم مطلوب';
    document.getElementById('customerName').classList.add('error');
    isValid = false;
  }

  const phoneRegex = /^[0-9+\s\-()]{7,15}$/;
  if (!phone) {
    document.getElementById('phoneError').textContent = 'رقم الهاتف مطلوب';
    document.getElementById('customerPhone').classList.add('error');
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    document.getElementById('phoneError').textContent = 'رقم الهاتف غير صحيح';
    document.getElementById('customerPhone').classList.add('error');
    isValid = false;
  }

  if (!address) {
    document.getElementById('addressError').textContent = 'العنوان مطلوب';
    document.getElementById('customerAddress').classList.add('error');
    isValid = false;
  }

  // التحقق من وجود منتج واحد على الأقل
  const selectedItems = getSelectedItems();
  if (selectedItems.length === 0) {
    document.getElementById('productsError').textContent =
      '⚠️ يرجى اختيار منتج واحد على الأقل وتحديد الكمية';
    isValid = false;
  }

  return isValid;
}

/* ============================================================
   إرسال الطلب
   ============================================================ */
document.getElementById('orderForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  if (!validateForm()) return;

  const selectedItems = getSelectedItems();
  const total = selectedItems.reduce((sum, p) => sum + p.qty * p.price, 0);

  // تجهيز نص تفاصيل المنتجات للبريد الإلكتروني
  const productsText = selectedItems
    .map(p => `• ${p.name} (${p.qty} قطعة × ${p.price} ريال = ${p.qty * p.price} ريال)`)
    .join('\n');

  // بيانات القالب التي ترسل إلى EmailJS
  // ── تأكد أن أسماء المتغيرات هنا تطابق المتغيرات في قالب EmailJS ──
  const templateParams = {
    customer_name:    document.getElementById('customerName').value.trim(),
    customer_phone:   document.getElementById('customerPhone').value.trim(),
    customer_address: document.getElementById('customerAddress').value.trim(),
    customer_notes:   document.getElementById('customerNotes').value.trim() || 'لا توجد ملاحظات',
    products_list:    productsText,
    order_total:      `${total.toLocaleString('ar-SA')} دينار عراقي`,
    order_date:       new Date().toLocaleDateString('ar-IQ', {
                        year: 'numeric', month: 'long', day: 'numeric',
                        hour: '2-digit', minute: '2-digit'
                      }),
  };

  // تفعيل حالة التحميل
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.classList.add('loading');

  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams
    );

    // إظهار رسالة النجاح
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('successMessage').classList.add('visible');

    // الانتقال إلى رسالة النجاح بسلاسة
    document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth', block: 'center' });

  } catch (error) {
    console.error('EmailJS Error:', error);
    alert('حدث خطأ أثناء إرسال الطلب. تأكد من إعدادات EmailJS أو حاول مرة أخرى.');
    btn.disabled = false;
    btn.classList.remove('loading');
  }
});

/* ============================================================
   إعادة تعيين النموذج (طلب جديد)
   ============================================================ */
function resetForm() {
  // إعادة تعيين الكميات
  PRODUCTS.forEach(p => {
    const input = document.getElementById(`qty_${p.id}`);
    if (input) input.value = 0;
    updateCardState(p.id, 0);
  });

  // إعادة تعيين حقول النموذج
  document.getElementById('orderForm').reset();
  document.getElementById('orderForm').style.display = 'block';
  document.getElementById('successMessage').classList.remove('visible');

  // إخفاء ملخص السلة
  document.getElementById('cartSummary').classList.remove('visible');
  document.getElementById('formOrderSummary').classList.remove('visible');
  document.getElementById('formOrderSummary').innerHTML = '';

  // إعادة تعيين زر الإرسال
  const btn = document.getElementById('submitBtn');
  btn.disabled = false;
  btn.classList.remove('loading');

  // التمرير للأعلى
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   التهيئة عند تحميل الصفحة
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  renderProducts();
});

