/*
storage 封装
* */
const STORAGE_KEY = "mall";
export default {
    //存储值，这个值可以是简单的，可以是复杂的，也可以是一个json对象
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            //如果没有传入模块就获取所有,返回了一个json对象
            let obj = this.getStorage();
            obj[key] = value;

            //需要先将json对象转为字符串
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
        }

    },
    //获取值
    getItem(key, module_name) {
        //整个module_name就是想要获取整个下面的某一个值的时候，需要传入一个key 也就是module_name 来获取 ，当然如果没有就直接获取整个
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) return val[key];
        }
        return this.getStorage()[key];//这个是调用自己封装的方法(通过传入的key)先拿到整个下面的值
    },
    //获取整个值，这个是自己封装的不是原有的api
    getStorage() {
        //通过原生api 获取到,转换成json对象更加的容易操作
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
        //删除某一个值或者整个删除
    clear(key,module_name) {
         let obj =   this.getStorage();
         if(module_name){
             //删除某个模块下面的某个值
             if(!obj[module_name]) return ;
             delete obj[module_name][key];
         }else{
             //如果没有传入模块，就直接删除整个属性
             delete obj[key];
         }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(obj));

    }

}
