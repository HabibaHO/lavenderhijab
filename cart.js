// مصفوفة لتخزين المنتجات المضافة إلى عربة التسوق
let cart = [];

// دالة لإضافة المنتج إلى عربة التسوق
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);
    alert(productName + " تم إضافته إلى عربة التسوق!");
}

// دالة للحصول على عربة التسوق
function getCart() {
    return cart;
}
// دالة لإضافة المنتج إلى عربة التسوق
function addToCart(productName, productPrice) {
    // الحصول على العربة المخزنة في LocalStorage أو إنشاء مصفوفة جديدة إذا كانت فارغة
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // إضافة المنتج إلى العربة
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);

    // تخزين العربة المحدثة في LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(productName + " تم إضافته إلى عربة التسوق!");
}

// دالة للحصول على عربة التسوق
function getCart() {
    // استرجاع العربة من LocalStorage
    return JSON.parse(localStorage.getItem('cart')) || [];
}
