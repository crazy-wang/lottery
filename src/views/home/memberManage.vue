<!--
  name: memberManage
  desc: 个人中心 -> 代理中心 -> 会员管理
-->
<template>
  <div class="memberManage">
    <Navbar>
      <router-link slot="headleft" to="/agentCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">会员管理</span>
    </Navbar>

    <div class="content">
      <table>
        <tr>
          <th>帐号</th>
          <th>类型</th>
          <th>登录时间</th>
          <th>下级人数</th>
        </tr>
        <tr v-for="(item, index) in member" :key="index">
          <td>{{item.accountNum}}</td>
          <td>{{item.style}}</td>
          <td>{{item.loginTime}}</td>
          <td>{{item.subNum}}</td>
        </tr>
        <tr v-show="member.length!=0">
          <td colspan="4">已显示全部内容</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'memberManage',
    data () {
      return {
        member: [
          {
            accountNum: '34132424',
            style: '代理',
            loginTime: '2018-09-07 18:28:23',
            subNum: 3
          }
        ]
      }
    },
    components: {
      Navbar
    },
    methods: {
      toPage (src) {
        this.$router.push(src);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
    background: #efeef4;

    table, tr, th, td {
      border-top: 1px solid #cccccc;
      border-collapse: collapse;
    }
    table {
      border-top: none;
      width: 100%;
      background: #ffffff;
      border-spacing: 0;
      text-align: center;
      color: #666666;
      font-size: px2rem(34px);
      tr {
        height: px2rem(88px);
        &:nth-child(1) {
          border-top: none;
          background: #f3f3f3;
          th {
            border-top: none;
            padding: 0;
            font-weight: 400;
          }
        }
        td {
          font-size: px2rem(28px);
          color: #000;
          &:nth-child(1) {
            color: rgb(51, 136, 255);
          }
          &:last-child {
            color: #000;
          }
        }
      }
    }
  }

</style>
