const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // proxy:{
  //   "/api":{
  //     target: "http://192.168.88.70:8000/",
  //     changeOrigin:false,//表示是否跨域,
  //     ws: true,
  //   }
  // },

  
})

// const api_url="http://192.168.88.70::8000"

// const port=8000

// module.exports = {
//   NODE_ENV: '"development"',
//   API_BASE_URL: '"http://192.168.88.70:8000"',
//   IMAGE_BASE_URL: '"http://dev.img.com"'
// }
// export default defineConfig({
//   plugins: [vue()],
//   se
// rver:{
//     host:"localhost",//设置
//     port:8000,//设置端口
//     https:false, //是否启用https
//     open:false,//设置代理proxy
//     proxy:{
//       "/api":{
//         target: "http://192.168.88.70:8000/",
//         changeOrigin:false,//表示是否跨域
//       }
//     }
//   }
// })
