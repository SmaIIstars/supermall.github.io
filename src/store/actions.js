import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutations.-type"

export default {
  addCart(context, payload) {
    // 添加新商品
    // let oldProduct = null
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }


    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // oldProduct.count++
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品+1')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })
  }
}
