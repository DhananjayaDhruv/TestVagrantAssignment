
import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { ProductPage } from '../../src/pages/ProductPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';

test.describe('@regression Checkout Module', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    const product = new ProductPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await product.addBackpack();
    await product.openCart();
  });

  test('Successful Checkout', async ({ page }) => {
    const checkout = new CheckoutPage(page);

    await checkout.checkout('John', 'Doe', '560001');
    await checkout.finishOrder();
    await checkout.verifySuccess();
  });

  test('Missing First Name', async ({ page }) => {
    const checkout = new CheckoutPage(page);

    await checkout.checkout('', 'Doe', '560001');
    await checkout.verifyValidationError();
  });

  test('Missing Postal Code', async ({ page }) => {
    const checkout = new CheckoutPage(page);

    await checkout.checkout('John', 'Doe', '');
    await checkout.verifyValidationError();
  });
});
