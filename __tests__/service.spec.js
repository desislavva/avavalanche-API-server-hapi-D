const cChainMethods = require('../src/services/c-chain');
const pChainMethods = require('../src//services/p-chain');
const xChainMethods = require('../src/services/x-chain');



describe('C-chain', () => {
    it('test get Block By Hash without starting client', async () => {
        const result = await cChainMethods.getBlockByHashFromCChain(0x112312312312);
        expect(result[0]).toBe(0);
    });


    it('test get Block By Number on running client', async () => {
        const result = await cChainMethods.getBlockByNumberFromCChain(1940150);
        expect(result[0].result.number).toBe('0x1d9ab6');
    });

    it('test get Block By Number on running client (Wrong Input) ', async () => {
        const result = await cChainMethods.getBlockByNumberFromCChain('asdafasd');
        expect(result[1].result).toBe('connection refused to avalanche client');
    });

    it('test get Transaction By Hash on running client', async () => {
        const result = await cChainMethods.getTransactionByHashFromCChain('0xad3e63d2ce666830fed2a64e76d2a593cbff67fcc07a9ef650b6bc2975f61cb2');
        expect(result[1].result.hash).toBe('0xad3e63d2ce666830fed2a64e76d2a593cbff67fcc07a9ef650b6bc2975f61cb2');
    });

    it('test get Transaction By Hash on running client (Wrong Input)', async () => {
        const result = await cChainMethods.getTransactionByHashFromCChain(55993);
        expect(result[1].error.message).toBe('invalid argument 0: json: cannot unmarshal hex string without 0x prefix into Go value of type common.Hash');
    });

    it('test get Address Info on running client', async () => {
        const result = await cChainMethods.getAddressInfoFromCChain('0x572f4d80f10f663b5049f789546f25f70bb62a7f');
        expect(result.length).toBe(2);
    });

    it('test get X Pending Transactions After Nth on running client', async () => {
        const result = await cChainMethods.getXPendingTransactionsAfterNthFromCChain(1,1);
        expect(result.length).toBe(2);
    });
});

describe('P-chain', () => {
    it('test get Transaction By Id on running client USES ORTELIUS', async () => {
        const result = await pChainMethods.getTransactionByIdFromPChain('KFYtP5kMYAEWcLmTqyHZsQ9b2sSLpsfwAG74YCZU9eU4bPCdB');
        
        // TODO
    });

    it('test get Address Info From on running client', async () => {
        const result = await pChainMethods.getAddressInfoFromPChain('P-fuji1s3yr5cwxsq4xqnktjygdxlxk338063tyuxf8mf');
        expect(result.balance)
    });
    

    it('test get Recent Transactions on running client USES ORTELIUS', async () => {
        const result = await pChainMethods.getRecentTransactions();
        expect(result[1].chainID).toBe('11111111111111111111111111111111LpoYY')
    });
    
});

describe('X-chain', () => {
    it('test get Transaction By Id on running client USES ORTELIUS', async () => {
        const result = await xChainMethods.getTransactionByIdFromXChain('2sEjBWSRbPxGbet8qx6BPNUzoKtsA64nHxyV1NEek9Tsj5q6Lv');
    });

    it('test get Address Info on running client', async () => {
        const result = await xChainMethods.getAddressInfoByHashFromXChain('X-fuji10szy8zs7xu38nrgdfexkphwmjmejp32l9hpr5h');
        expect(result[0].balance);
    });

    it('test get Recent Transactions on running client USES ORTELIUS', async () => {
        const result = await xChainMethods.getRecentTransactions();
        expect(result[1].chainID).toBe('2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm')
    });

    
    
});