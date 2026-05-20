
import { test, expect, request } from '@playwright/test';

test.describe('Delete Booking API', () => {

  test('Delete Invalid Booking', async () => {

    const api = await request.newContext({
      baseURL: 'https://restful-booker.herokuapp.com'
    });

    const response = await api.delete('/booking/999999');

    expect([403,405]).toContain(response.status());
  });
});
