const request = require('supertest');
const app = require('../../server');

describe('GET /sum', () => {

  test('should return correct sum', async () => {

    const response = await request(app).get('/sum?a=10&b=20');

    expect(response.body.result).toBe(30);

  });

});