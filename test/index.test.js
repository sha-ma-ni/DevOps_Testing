const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();
describe('index.html', () => {
  beforeEach((done) => {
   JSDOM.fromFile('public/index.html')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })
describe("Level 1 title", () => {
 it("title element should say Node/Angular Todo App", () => {
  let element = document.querySelector('title')
  expect(element).to.have.text("Node/Angular Todo App")
 })
})
})