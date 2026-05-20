
import { test, expect, request } from '@playwright/test';

test.describe('Booking Create Update API', () => {

  test('Create Booking', async () => {
    const api = await request.newContext({
      baseURL: 'https://restful-booker.herokuapp.com'
    });

    const response = await api.post('/booking', {
      data: {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 100,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-01-01',
          checkout: '2026-01-05'
        },
        additionalneeds: 'Breakfast'
      }
    });

    expect(response.status()).toBe(200);
  });

  test('Create Booking Negative', async () => {
    const api = await request.newContext({
      baseURL: 'https://restful-booker.herokuapp.com'
    });

    const response = await api.post('/booking', {
      data: {}
    });

    expect(response.status()).toBeGreaterThanOrEqual(400);
  });
});
