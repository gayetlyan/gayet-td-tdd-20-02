// cart.js
function createCart() {
  let items = [];

  return {
    items,
    addItem(item) {
      this.items.push(item);
    },
    total() {
      return this.items.reduce((total, item) => total + item.price, 0);
    },
  };
}

function createItem(name, price) {
  return { id: Math.random().toString(), name, price };
}

function applyCouponToCart(cart, coupon, itemId) {
  const itemIndex = cart.items.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    cart.items[itemIndex].price -= coupon.discount;
    if (cart.items[itemIndex].price < 0) {
      cart.items[itemIndex].price = 0;
    }
  }
}

module.exports = { createCart, createItem, applyCouponToCart };
