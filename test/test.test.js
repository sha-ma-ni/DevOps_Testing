const assert = require('assert')
const waitPort = require('wait-port');
const PORT = process.env.PORT || 8080;
const {expect} = require('chai');

describe('server listening', () => {
    it('should be listening', async () => {
        const server = require('../server.js');
        const isOpen = await waitPort({port: PORT});
        expect(isOpen).to.be.true;
        // await timeOut();
        //
        // function timeOut(ms) {
        //     return new Promise(
        //         resolve => setTimeout(resolve, 1000)
        //     )
        // }
    });
});
