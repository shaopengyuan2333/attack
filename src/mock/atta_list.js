// module.exports = [
//     // user login
//     {
//       url: '/zhigeng/list',
//       type: 'post',
//       response: config => {
//         const { username } = config.body
//         const token = tokens[username]
  
//         // mock error
//         if (!token) {
//           return {
//             code: 60204,
//             message: 'Account and password are incorrect.'
//           }
//         }
  
//         return {
//           code: 20000,
//           data: token
//         }
//       }
//     }
// ]