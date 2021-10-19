const networkMethods = require('../services/p-chain');

module.exports = {
    method: 'GET',
    path: '/network',
    handler: async (request, h) => {
        const response = await networkMethods.getNetWorkActivity();
        return { returnData };
    }
}