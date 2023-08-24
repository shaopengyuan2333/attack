
import axios from 'axios'

axios.defaults.baseURL = 'http://your-api-host.com';
const BASE_URL = 'http://192.168.88.70:8000';


export function   createUser(formData) {
    return  axios.post(BASE_URL+'/zhigeng/list', formData,{headers:{'Content-Type': 'multipart/form-data'}})
  }
      


// submitForm(formData) {
//   axios.post('/api/user', formData)
//     .then(response => {
//       // 处理成功响应数据
//       console.log(response.data);
//     })
//     .catch(error => {
//       // 处理错误
//       console.error(error);
//     });
// }



// export function atta_list(param) {
//     return request({
//         url: "zhigeng/list",
//         method: "post",
//         data:param
//     });
// }

// const params = {
//   id: '123456789',
//   name: '张三'
// }
// test(params)

// // api
// export function test (params) {
// return axios({
//   url: url,
//   method: 'GET',
//   params: params
// })
// }

