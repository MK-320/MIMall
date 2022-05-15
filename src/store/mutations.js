/*商城 -- vuex */

export default{
    //这种写法等同于 再index.js中  mutations:{},因为这里把mutations对象导出了，而且在入口文件中引入了mutations
    saveUserName(state,username){
       state.username = username;
    },
    saveCartCount(state,cartCount){
        state.cartCount = cartCount;
    },
}
