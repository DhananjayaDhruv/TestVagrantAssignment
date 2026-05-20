
import { test, expect, request } from '@playwright/test';

test('Complete Booking E2E', async () => {

  const api = await request.newContext({
    baseURL: 'https://restful-booker.herokuapp.com'
  });

  const auth = await api.post('/auth', {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });

  const authBody = await auth.json();

  const create = await api.post('/booking', {
    data: {
      firstname: 'API',
      lastname: 'Tester',
      totalprice: 500,
      depositpaid: true,
      bookingdates: {
        checkin: '2026-05-01',
        checkout: '2026-05-10'
      },
      additionalneeds: 'Lunch'
    }
  });

  const createBody = await create.json();
  const bookingId = createBody.bookingid;

  const getBooking = await api.get(`/booking/${bookingId}`);

  expect(getBooking.status()).toBe(200);

  const update = await api.put(`/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${authBody.token}`
    },
    data: {
      firstname: 'Updated',
      lastname: 'Tester',
      totalprice: 900,
      depositpaid: true,
      bookingdates: {
        checkin: '2026-05-01',
        checkout: '2026-05-15'
      },
      additionalneeds: 'Dinner'
    }
  });

  expect(update.status()).toBe(200);

  const deleteBooking = await api.delete(`/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${authBody.token}`
    }
  });

  expect(deleteBooking.status()).toBe(201);
});
