let baseURl;
//在package.json中，脚手架提供了一个参数 --mode （注入一个）可以传入当前的环境参数，是生产环境还是开发环境
//process是node的进程,获取当前nodejs进程中的一些环境变量，这些环境变量最终会写入到nodejs中，因为这个项目就是在nodejs服务器下面运行起来的，所以可以获取环境变量，可以通过这个来获取package.json中传入的参数
switch (process.env.NODE_ENV) {
    //这里的地址是线上真实的接口环境地址
    case 'development':
        // baseURl = 'http://dev-mall-pre.springboot.cn/api';
         baseURl = 'http://localhost:3000'; // Koa 服务器地址
        break;
    case 'test':
        baseURl = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURl = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURl = 'http://mall-pre.springboot.cn/api';
        break;
}
export default {
    baseURl
}
