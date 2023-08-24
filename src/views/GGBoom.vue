<template>
    <div>
        
        <h1 style="text-align: center;">欢迎来到GGBoom的世界</h1>
        <!-- <li><a href="atta" target="_blank" rel="noopener">知更系统</a></li> -->
        <!-- <button onclick="window.location.href='addatta'" target="_blank" rel="noopener">知更系统</button> -->
        <!-- <button onclick="window.location.href='atta'" >上传题目</button> -->
        <!-- <button onclick="window.location.href='/'">导入用户</button> -->
        <!-- <button onclick="window.location.href='/'">删除题目</button> -->
        <nav>
          <router-link to="/attalist">hahah1</router-link> |
          <router-link to="/about">Ab导入用户out</router-link> |
          <router-link to="/">删除题目</router-link>|
          <router-link to="/add">上传题目</router-link>
        </nav>
    </div>
</template>

<style>
div {
  color: red;
  font-size: 16px;
}
button {
  display: block;
  margin: 0 auto;
  color: red;
  width: 100px;
  height: 50px;
}
</style>