
import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { ProductPage } from '../../src/pages/ProductPage';

test.describe('@regression Product Module', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
  });

  test('Add Single Product', async ({ page }) => {
    const product = new ProductPage(page);
    await product.addBackpack();
    await product.verifyCartCount('1');
  });

  test('Add Multiple Products', async ({ page }) => {
    const product = new ProductPage(page);
    await product.addBackpack();
    await product.addBikeLight();
    await product.verifyCartCount('2');
  });

  test('Remove Product', async ({ page }) => {
    const product = new ProductPage(page);
    await product.addBackpack();
    await product.removeBackpack();
  });

  test('Sort Products', async ({ page }) => {
    const product = new ProductPage(page);
    await product.sortLowToHigh();
  });
});
