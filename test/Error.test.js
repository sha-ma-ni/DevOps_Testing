const request = require('supertest')
const {ObjectId} = require('mongodb')
const app = require('./../server')

describe('ERROR 404 testing', () => {
    it('should return 404 if todo not found', (done) => {
        let iwas = new ObjectId("6329a0cf42438c7405488888")
        request(app)
        .get('/api/todos/:todo_id/${api/todos/iwas}')
        .expect(404)
        .end(done)
    })
});
