import computePriceAndNumber from './computePriceAndNumber'
import { multiply } from './computePriceAndNumber'

export default function playMethods (type, details, selectedData) {
  let number = 0
  let price = 0
  let selectedDataFiltered = ''
  // if(type == '一星' && details == '复式') {
  //   let numberList = []
  //   // console.log(selectedData)
  //   for(let i in selectedData) {
  //     selectedData[i].data.forEach(v => {
  //       numberList.push(v.label)
  //     })
  //   }
  //   number = numberList.length
  //   price = numberList.length * 2
  //   return {
  //     number: number,
  //     price: price
  //   }
  // }
  if(type == '前二' && details == '直选复式') {
    console.log('-----------------------------')
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for(let i in selectedData) {
      if(selectedData[i].data.length >0) {
        counter[i] = 1
        cache[i] = selectedData[i].data.length
      }
    }

    if(counter.length >= YminLimit) {
      number = multiply(cache)
      price = number * 2
    }
    return {
      number: number,
      price: price
    }
  }
}
