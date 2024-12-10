// عند تحميل صفحة الدفع، نقوم بتحميل المنتجات في العربة
window.onload = function() {
    // هنا يمكن عرض محتويات العربة (إن أردت) قبل إتمام الدفع
    displayCartSummary();
};

// دالة لعرض محتويات العربة (مجموع المنتجات)
function displayCartSummary() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    const cartSummary = document.createElement('div');
    cartSummary.innerHTML = `
        <h2>المنتجات في عربة التسوق:</h2>
        <ul>
            ${cartItems.map(item => `<li>${item.name} - ${item.price} جنيه</li>`).join('')}
        </ul>
        <p>إجمالي السعر: ${total} جنيه</p>
    `;
    
    document.querySelector('.checkout-section').prepend(cartSummary);
}

// دالة لإتمام الدفع
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل تقليدي

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // يمكنك هنا إضافة الكود لإرسال هذه البيانات إلى الخادم أو قاعدة بيانات، لكن هنا سنعرضها فقط
    alert(`تم إتمام الشراء بنجاح!\n\nتفاصيل العميل:\nالاسم: ${name}\nالعنوان: ${address}\nالبريد الإلكتروني: ${email}\nالهاتف: ${phone}\nطريقة الدفع: ${paymentMethod}`);

    // بعد إتمام الدفع، يمكن مسح العربة وتوجيه العميل إلى صفحة تأكيد
    localStorage.removeItem('cart'); // مسح عربة التسوق بعد الدفع
    window.location.href = 'confirmation.html'; // توجيه العميل إلى صفحة تأكيد
});
