import { ECommerceShoppingCart } from './e-commerce-shopping-cart';

export abstract class DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}
