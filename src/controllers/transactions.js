const dotenv = require('dotenv');

dotenv.config();

const cChainMethods = require('../services/c-chain');
const xChainMethods = require('../services/x-chain');
const pChainMethods = require('../services/p-chain');

const X_CHAIN = 'X';
const P_CHAIN = 'P';
const C_CHAIN = '0x';

exports.getTransactionByHash = async (req) => {
    let xChainTransaction;
    let cChainTransaction;
    let pChainTransaction;

    xChainTransaction = await xChainMethods.getTransactionByIdFromXChain(req.params.hash);
    cChainTransaction = await cChainMethods.getTransactionByHashFromCChain(req.params.hash);
    pChainTransaction = await pChainMethods.getTransactionByIdFromPChain(req.params.hash);

        
    if (xChainTransaction != 1) {
        return xChainTransaction;

    } else if (cChainTransaction[0] != 1) {
        return cChainTransaction[1];

    } else if (pChainTransaction != 1) {
         return pChainTransaction;
    }
    return JSON.parse('{"result":"connection refused to avalanche client or api call rejected"}');

};

exports.getXTransactionsAfterNthFromAddress = async (req) => {
    let xChainTransactions;
    let pChainTransactions;
    let cChainTransactions;

    if ((req.params.address).charAt(0) == X_CHAIN) {
        xChainTransactions = await xChainMethods.getXTransactionsAfterNthFromAddressFromXChain(req.params.address, req.params.n, req.params.x);

        if (xChainTransactions[0] == 1) {
            return xChainTransactions[1];
        } 
            return xChainTransactions[1];

    } else if ((req.params.address).charAt(0) == P_CHAIN) {
        pChainTransactions = await pChainMethods.getXTransactionsAfterNthFromAddressFromPChain(req.params.address, req.params.n, req.params.x);
        
        if (pChainTransactions == 1) {
            return JSON.parse('{"result":"api call rejected or not enough transactions"}');
        } 
            return pChainTransactions;
        
    } else if ((req.params.address).slice(0, 2) == C_CHAIN) {
        cChainTransactions = await cChainMethods.getXTransactionsAfterNthFromAddressFromCChain(req.params.address, req.params.n, req.params.x);

        return cChainTransactions;
    }
        return JSON.parse('{"result":"wrong chain"}');
    
};

exports.getXPendingTransactionsAfterNth = async (req) => {
    if (req.params.n > 0 && req.params.x > 0) {
        cChainTransactions = await cChainMethods.getXPendingTransactionsAfterNthFromCChain(req.params.n, req.params.x);

        if (cChainTransactions[0] == 1) {
            return cChainTransactions[1];
        } 
            return cChainTransactions[1];
        }
     
        return JSON.parse('{"result":"n and x < 0"}');
    };


exports.getRecentTransactionsFromXChain = async () => {
    xChainTransaction = await xChainMethods.getRecentTransactions();

    if (xChainTransaction[0] == 1) {
        return xChainTransaction[1];
    } 
        return xChainTransaction[1];
    
};

exports.getRecentTransactionsFromPChain = async () => {
    pChainTransaction = await pChainMethods.getRecentTransactions();

    if (pChainTransaction[0] == 1) {
        return pChainTransaction[1];
    } 
        return pChainTransaction[1];
    
};