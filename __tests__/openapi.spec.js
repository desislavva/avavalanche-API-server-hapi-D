const jestOpenAPI = require('jest-openapi').default;
const { default: axios } = require('axios');
const path = require('path');
require('dotenv').config()

jestOpenAPI(path.join(__dirname, '../openapi/openapi.yml'));

describe('GET /network', () => {
    it('should satisfy OpenAPI spec', async () => {
        const res = await axios.get(`http://localhost:4444/network`)

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

describe('GET /address/hash/{hash}', () => {
    it('should satisfy OpenAPI spec', async () => {
        const hash = 'X-fuji1xpmx0ljrpvqexrvrj26fnggvr0ax9wm32gaxmx'
        const res = await axios.get(`http://localhost:4444/address/hash/${hash}`)

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

describe('GET /blocks/hash/{hash}', () => {
    it('should satisfy OpenAPI spec', async () => {
        const hash = '0x0bcd0c4e5635f21dd4352aa82692a5e29bcf2c5373da9427e5ab38bd4c7cfd33'
        const res = await axios.get(`http://localhost:4444//blocks/hash/${hash}`)

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

describe('GET /blocks/number/{blockNumber}', () => {
    it('should satisfy OpenAPI spec', async () => {
        const blockNumber = 1940150;
        const res = await axios.get(`http://localhost:4444//blocks/number/${blockNumber}`)

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

describe('GET /transactions/hash/{hash}', () => {
    it('should satisfy OpenAPI spec', async () => {
        const hash = '0x118e1747566adeaab6afede9de76ebeb5b10bb56ec510a099fb5a82221e9d0e7';
        const res = await axios.get(`http://localhost:4444/transactions/hash/${hash}`)

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

describe('GET /transactions/{address}/{n}/{x}', () => {
    it('should satisfy OpenAPI spec', async () => {
        const address = 'X-fuji1xpmx0ljrpvqexrvrj26fnggvr0ax9wm32gaxmx';
        const n = 10;
        const x = 5;
        const res = await axios.get(`http://localhost:4444/transactions/${address}/${n}/${x}`)

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

describe('GET /transactions/{n}/{x}', () => {
    it('should satisfy OpenAPI spec', async () => {
        const n = 10;
        const x = 5;
        const res = await axios.get(`http://localhost:4444/transactions/${n}/${x}`)

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

describe('GET /transactions/recentxchain', () => {
    it('should satisfy OpenAPI spec', async () => {
        const res = await axios.get(`http://localhost:4444/transactions/recentxchain`)

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

describe('GET /transactions/recentpchain', () => {
    it('should satisfy OpenAPI spec', async () => {
        const res = await axios.get(`http://localhost:4444/transactions/recentpchain`)

        expect(res.status).toEqual(200);
        expect(res).toSatisfyApiSpec();
       
    });
});

