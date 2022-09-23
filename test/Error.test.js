const request = require('supertest')
const {ObjectId} = require('mongodb')
const app = require('./../server')

describe('ERROR 404 testing', () => {
    it('should return 404 if todo not found', (done) => {
        //created todo with unused id
        let iwas = new ObjectId("6329a0cf42438c7405488888")
        request(app) 
        //request our database to get an existing todo matching our newObject
        .get('/api/todos/:todo_id/${api/todos/iwas}')
        .expect(404)//return should be 404
        .end(done)
    })
});
