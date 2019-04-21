const request = require('supertest');
const app = require('./app');

describe('GET /' , () =>{
  it('Should respond with a message' , () =>{
    const message = "🦄🌈✨👋🌎🌍🌏✨🌈🦄";
    return request(app)
      .get('/')
      .expect('Content-Type' , 'application/json; charset=utf-8')
      .expect(200)
      .then((res) =>{
        expect(res.body.message).toBe(message);
      });
  });
});