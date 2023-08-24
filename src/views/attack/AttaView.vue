<template>
    <div class="atta">
        <!-- <style>
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
        </style> -->

        <!-- <button onclick="window.location.href='/'">返回首页</button> -->
        <li><a  onclick="window.location.href='/'" target="_blank" rel="noopener">返回首页</a></li>

        <table border="1">
            <tr>
                <td>平台</td>
                <td>环境</td>
                <td>token</td>
        </tr>

        <tr>
            <td class="align-middle">result.platform </td>
            <td class="align-middle">result.environment </td>
            <td>result.header </td>
            <td>
                <button >-</button>
                result.count 
                <button >+</button>
            </td>
        </tr>
        </table>

    </div>
  </template>
  