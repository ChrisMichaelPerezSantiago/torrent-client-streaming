const request = require('supertest');
const app = require('../../app');

describe('GET /tvshow' , () =>{
  it('Should respond with a 200 status code' , () =>{
    request(app)
    .get('/tvshow')
    .expect('Content-Type' , 'application/json; charset=utf-8')
    .expect(200);
  });
});
