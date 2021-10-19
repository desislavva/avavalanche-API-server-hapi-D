const dotenv = require('dotenv');

dotenv.config();

const cChainMethods = require('../services/c-chain');
const xChainMethods = require('../services/x-chain');
const pChainMethods = require('../services/p-chain');

const X_CHAIN = 'X';
const P_CHAIN = 'P';
const C_CHAIN = '0x';


exports.getAddressInfoByHash = async (req) => {
    let addressInfoFromXChain;
    let addressInfoFromCChain;
    let addressInfoFromPChain;

    if ((req.params.hash).charAt(0) == X_CHAIN) {
        addressInfoFromXChain = await xChainMethods.getAddressInfoByHashFromXChain(req.params.hash);

        if (addressInfoFromXChain[0] == 1) {
            return addressInfoFromXChain[1];
        } 
            return addressInfoFromXChain;
        
    } else if ((req.params.hash).charAt(0) == P_CHAIN) {
        addressInfoFromPChain = await pChainMethods.getAddressInfoFromPChain(req.params.hash);

        if (addressInfoFromPChain[0] == 1) {
            return addressInfoFromPChain[1];
        }
            return addressInfoFromPChain[1];
        
    } else if ((req.params.hash).slice(0, 2) == C_CHAIN){
        addressInfoFromCChain = await cChainMethods.getAddressInfoFromCChain(req.params.hash);

        if (addressInfoFromCChain[0] == 1) {
            return addressInfoFromCChain[1];
        } 
            return addressInfoFromCChain;
        
    }
        return JSON.parse('{"result":"wrong input"}');
    
};