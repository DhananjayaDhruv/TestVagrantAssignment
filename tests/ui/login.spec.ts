
import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('@smoke Login Module', () => {

  test('Valid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await login.verifyLoginSuccess();
  });

  test('Invalid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('wrong', 'wrong');
    await login.verifyError();
  });

  test('Empty Username', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('', 'secret_sauce');
    await login.verifyError();
  });

  test('Empty Password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('standard_user', '');
    await login.verifyError();
  });

  test('Logout Validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await login.logout();
  });
});
