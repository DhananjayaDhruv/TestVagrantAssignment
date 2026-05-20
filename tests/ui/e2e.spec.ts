
import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { ProductPage } from '../../src/pages/ProductPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';

test('@smoke Complete E2E Purchase Flow', async ({ page }) => {

  const login = new LoginPage(page);
  const product = new ProductPage(page);
  const checkout = new CheckoutPage(page);

  await login.navigate();

  await login.login('standard_user', 'secret_sauce');

  await product.sortLowToHigh();

  await product.addBackpack();
  await product.addBikeLight();

  await product.verifyCartCount('2');

  await product.openCart();

  await checkout.checkout('Dhananjaya', 'K', '560037');

  await checkout.finishOrder();

  await checkout.verifySuccess();
});
