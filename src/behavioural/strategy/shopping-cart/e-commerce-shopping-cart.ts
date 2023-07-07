import { ECommerceProductProtocol } from './e-commerce-product-protocol';
import { DiscountStrategy } from './discount-strategy';

export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy | null = null;

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy
      ? this._discountStrategy.getDiscount(this)
      : this.getTotal();
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
