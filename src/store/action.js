/*商城 -- vuex */
export default{
    //这种写法等同于 再index.js中  actions:{},因为这里把mutations对象导出了，而且在入口文件中引入了actions对象
    saveUserName(context,username){
        context.commit('saveUserName', username);
    },
    saveCartCount(context,cartCount){
        context.commit('saveCartCount', cartCount);
    },
}
