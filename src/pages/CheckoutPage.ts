
import { Page, expect } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  async checkout(first: string, last: string, zip: string) {
    await this.page.click('#checkout');
    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', zip);
    await this.page.click('#continue');
  }

  async finishOrder() {
    await this.page.click('#finish');
  }

  async verifySuccess() {
    await expect(this.page.locator('.complete-header')).toContainText('Thank you');
  }

  async verifyValidationError() {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
  }
}
