import axios from 'axios'


//最终封装
export function request(config){
    //1.创建axios实例
    const instance = axios.create({
        baseURL : "http://152.136.185.210:7878/api/m5",
        timeout : 5000
    })
    //2.axios拦截器
    //2.1请求拦截的作用
    instance.interceptors.request.use(config=>{
        // console.log(config)
    //1.比如config中的一些信息不符合服务器的要求

    //2.比如每次发送请求时，都希望在界面中显示一个请求的图标

    //3.某些网络请求(比如登录(token)),必须携带一些特殊信息
        return config
    },err=>{
        console.log(err)
    })
    //2.2响应拦截
    instance.interceptors.response.use(
        res =>{
            // console.log(res)
            return res
        },
        err =>{
            console.log(err)
        }
    )

    //3.发送真正网络请求
    return  instance(config)
}

//promiss封装
// export function request(config){
//     return new Promise((resolve,reject)=>{
//          //创建axios实例
//     const instance = axios.create({
//         baseURL : 'http://123.207.32.32:8000',
//         timeout : 5000
//     })
//     //发送真正网络请求
//      instance(config)
//      .then((res)=>{
//         resolve(res)
//      }).catch((err)=>{
//         reject(err)
//      })
    
    
//     })
   
// }