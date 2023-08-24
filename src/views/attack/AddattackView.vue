<template>
    <div >
      <el-button type="danger">危险按钮</el-button>
      <h2>添加题目表单</h2>
      <p>请输入平台:
            <select  name="platform" v-model="platform">

                <option value="son">子平台</option>
                <option value="put">公共平台</option>
            </select>
        </p>
        <p>请输入环境:
            <select  name="environment" v-model="environment">
                <option value="dev">测试环境</option>
                <option value="sim">线上测试</option>
                <option value="tech">正式环境</option>
            </select>
        </p>
      <!-- <input type="text" v-model="platform" placeholder="platform"> -->
      <!-- <input type="text" v-model="environment" placeholder="environment"> -->
      <!-- <input type="text" v-model="header" placeholder="header"> -->
      <p>请输入header:<input type="text" name="header" v-model="header"> </p>
      <input type="file" @change="handleFileUpload">
      
      <button @click="addattack_s" >提交</button>
      
      <el-button type="primary">默认按钮</el-button>
    </div>
    <div v-if="attlist.code=='200'">
      <p>添加完成,成功添加 {{ attlist.data.num }}条</p>
      </div>
    <div v-else-if="attlist.code == '403'">
      <p>添加失败 {{ attlist.data.msg }}</p>
    </div>
  </template>


<script>
import {addattack} from '@/api/attack'
// import Vue from 'vue';
// import { Button, Select } from 'element-ui';
// Vue.use(Button)
// Vue.use(Select)






export default {
  name: 'MyComponent',
  data(){
    return {
      attlist: {}
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    addattack_s(){
      let formData={
      header: this.header,
      platform: this.platform,
      environment: this.environment,
      file: this.file}

      addattack(formData)
      .then(response => {
          this.attlist=response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
}










// const BASE_URL = 'http://192.168.88.70:8000';
// export default {
//   data() {
//     return {
//       attlist: {}
//     };
//   },
//   mounted(){
//     this.createUser();
//   },
//   methods: {
//     handleFileUpload(event) {
//       this.file = event.target.files[0];
//     },
//     createUser() {
//         let formData = {
//         header: this.header,
//         platform: this.platform,
//         environment: this.environment,
//         file: this.file
//       };
//       axios.post(BASE_URL+'/zhigeng/list', formData,{headers:{'Content-Type': 'multipart/form-data'}})
//         .then(response => {
//           this.attlist=response.data;
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     },
//   }

// }

</script>
