<template>
  <div class="finance">
    <el-button type="primary" plain class="financeButton" @click="htmlCanvas">打印报表</el-button>
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr class="thead">
          <td>集团名称</td>
          <td>联系人/手机号码</td>
          <td>提现方式</td>
          <td>提现人</td>
          <td>提现账号</td>
          <td>可提现额度(元)</td>
          <td>申请提现额度(元)</td>
          <td>审核状态</td>
        </tr>
      </thead>
      <tbody>
        <tr class="tbody" v-for="(items,index) in finaList.data" :key="index">
          <td>{{items.company}}</td>
          <td>{{items.phone}}</td>
          <td>{{items.type}}</td>
          <td>{{items.name}}</td>
          <td>{{items.account}}</td>
          <td>{{items.packMoney}}</td>
          <td>{{items.limitMoney}}</td>
          <td>{{items.state}}</td>
        </tr>
      </tbody>
    </table>
    <el-pagination
      class="formPagination"
      background
      layout="prev, pager, next"
      :total="finaList.total"
      @current-change="currentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name:"finance",
  data(){
      return{
          finaList : {
            data: [
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              },
              {
                company: '星星点灯',
                phone: '1357878454545',
                type: '自提',
                name: '唐总',
                account: '9527',
                packMoney: '100000000.00',
                limitMoney: '120000000.00',
                state: '待审核'
              }
            ],
            total: 13
          }
      }
  },
  created() {
    localStorage.setItem('currentList', JSON.stringify(this.finaList.data));
  },
  methods:{
      currentChange(event) {
        let index = event;
        if (index == 1) {
          this.finaList.data = JSON.parse(localStorage.getItem('currentList'));
        } else {
          this.finaList.data = [this.finaList.data[this.finaList.data.length - 1]];
        }
      },
      htmlCanvas() {
        let html = window.open(window.location.href);
        let data = this.finaList.data;
        let day =
          new Date().getFullYear() +
          '-' +
          (new Date().getMonth() + 1) +
          '-' +
          new Date().getDate();
        html.onload = function() {
          let innerhtml = '';
          innerhtml = "<H1 style='text-align:center'>财务报表</H2></br>";
          innerhtml +=
            "<H4 style='text-align:center'>日期：" + day + '</H2></br></br></br>';
          innerhtml +=
            "<table width='100%'><tr height='50px'><th>集团名称</th><th>联系人/手机</th><th>提现方式</th><th>提现人</th><th>提现账号</th><th>可提现额度（元）</th><th>申请提现额度(元)</th><th>操作</th></tr>";
          data.forEach((element, index) => {
            innerhtml +=
              "<tr height='50px'><td>" +
              element.company +
              '</td><td>' +
              element.phone +
              '</td><td>' +
              element.type +
              '</td><td>' +
              element.name +
              '</td><td>' +
              element.account +
              '</td><td>' +
              element.packMoney +
              '</td><td>' +
              element.limitMoney +
              '</td><td>' +
              element.state +
              '</td></tr>';
          });
    
          html.document.body.innerHTML = innerhtml;
          html.document.title = '打印';
          html.print();
        };
      }
  }
}
</script>

<style lang="scss">
table {
  width: 100%;
  border-radius: 5px;
  background: #ecf5ff;
  td {
    height: 50px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #ccc;
    padding: 5px;
  }
  .thead {
    font-weight: bold;
  }
  .tbody {
    background: #fff;
  }
}
.formPagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.financeButton {
  margin-bottom: 15px;
}
</style>

