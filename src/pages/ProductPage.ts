
import { Page, expect } from '@playwright/test';

export class ProductPage {

  constructor(private page: Page) {}

  async addBackpack() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
  }

  async addBikeLight() {
    await this.page.click('#add-to-cart-sauce-labs-bike-light');
  }

  async removeBackpack() {
    await this.page.click('#remove-sauce-labs-backpack');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async verifyCartCount(count: string) {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count);
  }

  async sortLowToHigh() {
    await this.page.selectOption('.product_sort_container', 'lohi');
  }
}
