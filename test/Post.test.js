const request = require('supertest')
const {ObjectId} = require('mongodb')
const assert = require('assert')
const app = require('./../server')

// post test
describe('todos', () => {
    describe('POST /todos', () => { // describe the test
        it('should create a new todo', (done) => {
            const text = 'Test todo text'; //created new todo and save it 
            request(app) //test against the app
                .post('/api/todos')//make post request to /api/todos
                .send({text}) //sending created todo as the body of the request
                .expect(200).end(function (err, res) {  //expect status to be 200
                if (err) {
                    return done(err)
                }
                assert.equal(res.body[res.body.length - 1].text, text); //todo should be put at the end of the list
                return done();
            })
        })
    })
});