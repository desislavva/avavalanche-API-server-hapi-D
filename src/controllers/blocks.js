const dotenv = require('dotenv')

const cChainMethods = require('../services/c-chain')

dotenv.config()

exports.getBlockByHash = async (req) => {
  const blockFromCChain = await cChainMethods.getBlockByHashFromCChain(
    req.params.hash
  )

  if (blockFromCChain[0] == 1) {
    return blockFromCChain[1]
  }
  return blockFromCChain[1]
}

exports.getBlockByNumber = async (req) => {
  const cChainNumber = await cChainMethods.getBlockByNumberFromCChain(
    req.params.blocknumber
  )

  if (cChainNumber[0] == 1) {
    return cChainNumber[1]
  }
  return cChainNumber[0]
}

exports.getXBlocksFromNthFromCChain = async (req) => {
  const cChainArray = []
  let k = 0

  const blockNumber = req.params.blocknumber
  const count = req.params.count

  for (let i = blockNumber - count; i < blockNumber; ++i) {
    let hashValue = await cChainMethods.getBlockByNumberFromCChain(i)

    if (hashValue[0] == 1) {
      return hashValue[1]
    } else {
      cChainArray[k] = hashValue[1]
      k++
    }
  }

  return cChainArray
}
