
import { test, expect, request } from '@playwright/test';

test.describe('Auth API', () => {

  test('Positive Auth', async () => {
    const api = await request.newContext({
      baseURL: 'https://restful-booker.herokuapp.com'
    });

    const response = await api.post('/auth', {
      data: {
        username: 'admin',
        password: 'password123'
      }
    });

    expect(response.status()).toBe(200);
  });

  test('Negative Auth', async () => {
    const api = await request.newContext({
      baseURL: 'https://restful-booker.herokuapp.com'
    });

    const response = await api.post('/auth', {
      data: {
        username: 'wrong',
        password: 'wrong'
      }
    });

    expect(response.status()).toBe(200);
  });
});
