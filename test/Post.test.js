const expect = require('expect')
const request = require('supertest')
const {ObjectId} = require('mongodb')
const assert = require('assert')
const app = require('./../server')
const Todo = require('./../app/models/todo')


//The before block cleans your Todo database

describe('todos', () => {
    before("remove all todos", function (done) {
        Todo.remove({}, function (err, todo) {
            done();
        });
    });

    describe('POST /todos', () => { // 1
        it('should create a new todo', (done) => {
            const text = 'Test todo text'; // 2

            request(app) // 3
                .post('/api/todos')
                .send({text})
                .expect(200).end(function (err, res) {
                if (err) {
                    return done(err)
                }
                assert.equal(res.body[0].text, text);
                return done();
            })
        })
    })
});