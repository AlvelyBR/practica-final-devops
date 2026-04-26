const request = require('supertest');
const app = require('../app');

test('GET / debe devolver Hola Mundo', async () => {
  const response = await request(app).get('/');
  expect(response.text).toContain('Hola Mundo');
});