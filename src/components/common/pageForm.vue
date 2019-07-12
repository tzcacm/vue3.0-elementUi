<template>
  <div class="pageForm">
    <div class="form">
      <el-row>
        <el-col :span="12" :xs="24" :sm="24" :md="12">
          <div class="formItem">
            <span class="formTitle">姓名</span>
            <el-input class="formName" v-model="formItemData.name" @change="changeName"></el-input>
          </div>
        </el-col>
        <el-col :span="12" :xs="24" :sm="24" :md="12">
          <div class="formItem">
            <span class="formTitle">年龄</span>
            <el-input class="formName" v-model="formItemData.age" @change="changeAge"></el-input>
          </div>
        </el-col>
        <el-col :span="12" :xs="24" :sm="24" :md="12">
          <div class="formItem">
            <span class="formTitle">性别</span>
            <el-radio-group v-model="formItemData.sex" @change="changeSex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </div>
        </el-col>
        <el-col :span="12" :xs="24" :sm="24" :md="12">
          <div class="formItem">
            <span class="formTitle">职位</span>
            <el-select
              class="formName"
              v-model="formItemData.power"
              placeholder="职位选择"
              @change="changePower"
            >
              <el-option label="董事长" value="董事长"></el-option>
              <el-option label="总裁" value="总裁"></el-option>
              <el-option label="总监" value="总监"></el-option>
              <el-option label="经理" value="经理"></el-option>
              <el-option label="业务员" value="业务员"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12" :xs="24" :sm="24" :md="12">
          <div class="formItem">
            <span class="formTitle">婚姻</span>
            <el-select
              class="formName"
              v-model="formItemData.marriage"
              placeholder="婚姻状况"
              @change="changeMarriage"
            >
              <el-option label="未婚" value="未婚"></el-option>
              <el-option label="已婚" value="未婚"></el-option>
              <el-option label="离异" value="离异"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12" :xs="24" :sm="24" :md="12">
          <div class="formItem">
            <span class="formTitle">签到时间</span>
            <el-date-picker
              class="formName"
              type="date"
              placeholder="选择日期"
              v-model="formItemData.time"
              @change="changeTime"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="12" :xs="24" :sm="24" :md="12">
          <div class="formItem">
            <span class="formTitle">负责区域</span>
            <el-select
              class="formName"
              v-model="formItemData.area"
              placeholder="区域选择"
              @change="changeArea"
            >
              <el-option label="广东" value="广东"></el-option>
              <el-option label="澳门" value="澳门"></el-option>
              <el-option label="香港" value="香港"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12" :xs="24" :sm="24" :md="12">
          <div class="formItem">
            <span class="formTitle">角色权限</span>
            <el-select
              class="formName"
              v-model="formItemData.authority"
              placeholder="权限选择"
              @change="changeAuthority"
            >
              <el-option label="顶级" value="顶级"></el-option>
              <el-option label="高级" value="高级"></el-option>
              <el-option label="中级" value="中级"></el-option>
              <el-option label="初级" value="初级"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="formItem">
            <span class="formTitle">个性标签</span>
            <el-checkbox-group
              class="formCheckBox"
              v-model="formItemData.label"
              @change="changeLabel"
            >
              <el-checkbox-button label="阳光" value="阳光"></el-checkbox-button>
              <el-checkbox-button label="乐观" value="乐观"></el-checkbox-button>
              <el-checkbox-button label="积极" value="积极"></el-checkbox-button>
              <el-checkbox-button label="窈窕淑女" value="窈窕淑女"></el-checkbox-button>
              <el-checkbox-button label="强壮" value="强壮"></el-checkbox-button>
              <el-checkbox-button label="奋斗" value="奋斗"></el-checkbox-button>
              <el-checkbox-button label="可爱" value="可爱"></el-checkbox-button>
              <el-checkbox-button label="老当益壮" value="老当益壮"></el-checkbox-button>
              <el-checkbox-button label="少女心" value="少女心"></el-checkbox-button>
            </el-checkbox-group>
          </div>
        </el-col>
        <el-col :span="24" align="center" style="margin-top:50px">
          <el-button type="primary" @click="editForm">修改</el-button>
          <el-button @click="closeForm">关闭</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component
export default class PageForm extends Vue {
  formItemData: object = {};
  @Prop() formItem: object;
  created() {
    this.formItemData = {
      id: this.formItem['id'],
      name: this.formItem['name'],
      age: this.formItem['age'],
      sex: this.formItem['sex'],
      power: this.formItem['power'],
      marriage: this.formItem['marriage'],
      label: this.formItem['label'],
      area: this.formItem['area'],
      time: this.formItem['time'],
      authority: this.formItem['authority']
    };
  }

  //更改名字
  changeName(event) {
    this.formItemData['name'] = event;
  }

  //更改年龄
  changeAge(event) {
    this.formItemData['age'] = event;
  }

  //更改性别
  changeSex(event) {
    this.formItemData['sex'] = event;
  }

  //更改职位
  changePower(event) {
    this.formItemData['power'] = event;
  }

  //更改婚姻
  changeMarriage(event) {
    this.formItem['marriage'] = event;
  }
  //更改区域
  changeArea(event) {
    this.formItemData['area'] = event;
  }
  //更改权限
  changeAuthority(event) {
    this.formItemData['authority'] = event;
  }
  //更改时间
  changeTime(event) {
    this.formItemData['time'] = event;
  }
  //更改标签
  changeLabel(event) {
    this.formItemData['label'] = event;
  }

  editForm() {
    this.$emit('editForm', this.formItemData);
  }

  closeForm() {
    this.$emit('closeForm');
  }
}
</script>
<style lang="scss">
.pageForm {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  .form {
    width: 70%;
    margin: 10% auto;
    border-radius: 16px;
    background: #fff;
    padding: 50px 0px 50px 20px;
    .formItem {
      height: 60px;
      display: flex;
      align-items: center;
      .formTitle {
        width: 80px;
        font-size: 16px;
        text-align: right;
        margin-right: 15px;
      }
      .formName {
        width: 50%;
      }
      .formCheckBox {
        width: 70%;
        display: flex;
        overflow: hidden;
        overflow-x: scroll;
      }
      .el-radio-group {
        display: inline-block;
        height: 60px;
        line-height: 75px;
      }
      ::-webkit-scrollbar {
        height: 0px;
      }
    }
  }
}
</style>

