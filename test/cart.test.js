// cart.test.js
const { applyCouponToCart, createCart, createItem } = require("./cart");

describe("applyCouponToCart", () => {
  it("should apply coupon correctly to an item", () => {
    const cart = createCart();
    const item = createItem("Article", 100);
    cart.addItem(item);
    const coupon = { code: "DISCOUNT10", discount: 15 }; // Coupon for 15€ discount

    applyCouponToCart(cart, coupon, item.id);

    const expectedTotal = 85; // 100€ - 15€
    expect(cart.total()).toEqual(expectedTotal);
    expect(cart.items[0].price).toEqual(expectedTotal);
  });
});
