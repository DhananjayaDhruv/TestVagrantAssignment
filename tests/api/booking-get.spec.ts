
import { test, expect, request } from '@playwright/test';

test.describe('Booking GET API', () => {

  test('Get All Bookings', async () => {
    const api = await request.newContext({
      baseURL: 'https://restful-booker.herokuapp.com'
    });

    const response = await api.get('/booking');

    expect(response.status()).toBe(200);
  });

  test('Get Invalid Booking', async () => {
    const api = await request.newContext({
      baseURL: 'https://restful-booker.herokuapp.com'
    });

    const response = await api.get('/booking/999999');

    expect(response.status()).toBe(404);
  });
});
