//for html testing => document, window & DOM Api needed
const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')(); 
describe('index.html', () => {
  beforeEach((done) => {
   JSDOM.fromFile('public/index.html')
   .then((dom) => { //inject dom
     global.document = dom.window.document
   })
 .then(done, done);
 })
describe("unit test of title", () => {
 it("title element should say Node/Angular Todo App", () => {
  let element = document.querySelector('title') //searching in html
  expect(element).to.have.text("Node/Angular Todo App") //test the title in html against the given text
 })
})
})