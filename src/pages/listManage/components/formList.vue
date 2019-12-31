<template>
  <div class="formList">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr class="thead">
          <td>姓名</td>
          <td>年龄</td>
          <td>性别</td>
          <td>职位</td>
          <td>婚姻状况</td>
          <td>个性标签</td>
          <td>负责区域</td>
          <td>签到时间</td>
          <td>角色权限</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr class="tbody" v-for="(items,index) in listData.data">
          <td>{{items['name']}}</td>
          <td>{{items['age']}}</td>
          <td>{{items['sex']}}</td>
          <td>{{items['power']}}</td>
          <td>{{items['marriage']}}</td>
          <td>
            <div class="label" v-for="(val,key) in items['label']">{{val}}</div>
          </td>
          <td>{{items['area']}}</td>
          <td>{{items['time']}}</td>
          <td>{{items['authority']}}</td>
          <td>
            <div class="edit" @click="showList(index)">编辑</div>
            <div class="del" @click="delList(index)">删除</div>
          </td>
        </tr>
      </tbody>
    </table>
    <el-pagination
      class="formPagination"
      background
      layout="prev, pager, next"
      :total="listData.total"
      @current-change="currentChange"
    ></el-pagination>
    <pageForm
      v-if="isForm"
      :isForm="isForm"
      :formItem="formItem"
      v-on:closeForm="closeForm"
      v-on:editForm="editForm"
    ></pageForm>
  </div>
</template>

<script>
import pageForm from "./pageForm.vue";
export default {
  name: "formList",
  components:{
    pageForm
  },
  data() {
    return {
      isForm: false,
      formItem: {},
      roleData: ["董事长", "总裁", "总监", "经理", "业务员"],
      listData: {
        data: [
          {
            id: 1,
            name: "唐总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "奋斗"],
            area: "广东",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 2,
            name: "叶总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "窈窕淑女"],
            area: "澳门",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 3,
            name: "吴总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "老当益壮", "少女心"],
            area: "香港",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 4,
            name: "吴总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "老当益壮", "少女心"],
            area: "香港",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 5,
            name: "吴总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "老当益壮", "少女心"],
            area: "香港",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 6,
            name: "吴总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "老当益壮", "少女心"],
            area: "香港",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 7,
            name: "吴总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "老当益壮", "少女心"],
            area: "香港",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 8,
            name: "吴总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "老当益壮", "少女心"],
            area: "香港",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 9,
            name: "吴总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "老当益壮", "少女心"],
            area: "香港",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 10,
            name: "吴总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "老当益壮", "少女心"],
            area: "香港",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 11,
            name: "吴总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "老当益壮", "少女心"],
            area: "香港",
            time: new Date().getTime(),
            authority: "顶级"
          },
          {
            id: 12,
            name: "吴总",
            age: "30",
            sex: "男",
            power: "董事长",
            marriage: "未婚",
            label: ["乐观", "积极", "阳光", "老当益壮", "少女心"],
            area: "香港",
            time: new Date().getTime(),
            authority: "顶级"
          }
        ],
        total: 13
      }
    };
  },
  created() {
    localStorage.setItem("currentList", JSON.stringify(this.listData.data));
  },
  destroyed() {
    localStorage.removeItem("currentList");
  },
  methods: {
    showList(index) {
      this.isForm = true;
      this.formItem = this.listData.data[index];
    },
    editForm(data) {
      this.listData.data.map(item => {
        if (item["id"] == data["id"]) {
          item["name"] = data["name"];
          item["age"] = data["age"];
          item["sex"] = data["sex"];
          item["power"] = data["power"];
          item["marriage"] = data["marriage"];
          item["label"] = data["label"];
          item["area"] = data["area"];
          item["time"] = data["time"];
          item["authority"] = data["authority"];
        }
      });
      this.$message({
        message: "修改成功",
        type: "success"
      });
      this.isForm = false;
    },
    currentChange(event) {
      let index = event;
      if (index == 1) {
        this.listData.data = JSON.parse(localStorage.getItem("currentList"));
      } else {
        this.listData.data = [
          this.listData.data[this.listData.data.length - 1]
        ];
      }
    },
    closeForm() {
      this.isForm = false;
    },
    delList(index) {
      this.$confirm("此操作将永久删除该职位，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.listData.data.splice(index, 1);
        this.$message({
          message: "删除成功",
          type: "success"
        });
      });
    }
  }
};
</script>

<style lang="scss">
.formList {
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
    .label {
      display: inline-block;
      padding: 5px;
      background: hsl(214, 81%, 69%);
      color: #fff;
      border: 1px solid hsl(239, 81%, 75%);
      border-radius: 8px;
      margin: 5px 2.5px;
    }
    .edit {
      display: inline-block;
      width: 50px;
      height: 25px;
      line-height: 25px;
      border: 1px solid #ccc;
      text-align: center;
      border-radius: 8px;
      cursor: pointer;
      margin: 5px 3% 2.5px 0;
    }
    .edit:hover {
      background: #29aff6;
      color: #fff;
    }
    .del {
      display: inline-block;
      width: 50px;
      height: 25px;
      line-height: 25px;
      border: 1px solid #ccc;
      text-align: center;
      background: red;
      color: #fff;
      border-radius: 8px;
      cursor: pointer;
      margin: 5px 0 2.5px 0;
    }
    .del:hover {
      background: #000;
    }
  }
  .formPagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
}
</style>

