<template>
  <div class="statistics">
    <el-row :gutter="24">
      <el-col :span="6" :xl="6" :sm="12" :xs="12">
        <div class="mainBox">
          <el-col :span="3" :xs="24">
            <div class="mainIcon">
              <i class="el-icon-s-custom icon"></i>
            </div>
          </el-col>
          <el-col :span="21" :xs="0">
            <div class="mainContent">
              <div class="mainTitle">人员</div>
              <div class="mainCount">{{dataInfo[0]}}</div>
            </div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="6" :xl="6" :sm="12" :xs="12">
        <div class="mainBox">
          <el-col :span="3" :xs="24">
            <div class="mainIcon">
              <i class="el-icon-message-solid icon"></i>
            </div>
          </el-col>
          <el-col :span="21" :xs="0">
            <div class="mainContent">
              <div class="mainTitle">消息</div>
              <div class="mainCount">{{dataInfo[1]}}</div>
            </div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="6" :xl="6" :sm="12" :xs="12">
        <div class="mainBox">
          <el-col :span="3" :xs="24">
            <div class="mainIcon">
              <i class="el-icon-money icon"></i>
            </div>
          </el-col>
          <el-col :span="21" :xs="0">
            <div class="mainContent">
              <div class="mainTitle">基金</div>
              <div class="mainCount">{{dataInfo[2]}}</div>
            </div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="6" :xl="6" :sm="12" :xs="12">
        <div class="mainBox">
          <el-col :span="3" :xs="24">
            <div class="mainIcon">
              <i class="el-icon-postcard icon"></i>
            </div>
          </el-col>
          <el-col :span="21" :xs="0">
            <div class="mainContent">
              <div class="mainTitle">购物车</div>
              <div class="mainCount">{{dataInfo[3]}}</div>
            </div>
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "statistics",
  data() {
    return {
      dataInfo: [0, 0, 0, 0]
    };
  },
  created() {
    this.dataInfo = [
      this.randomData(),
      this.randomData(),
      this.randomData(),
      this.randomData()
    ];
  },
  methods: {
    randomData() {
      return Math.round(Math.random() * 1000);
    }
  }
};
</script>
<style lang="scss">
.mainBox {
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  .mainIcon {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    margin: 0 auto;
    cursor: pointer;
    .icon {
      font-size: 50px;
      color: #36a3f7;
    }
  }
  .mainIcon:hover {
    background: #36a3f7;
  }
  .icon:hover {
    color: #ffffff;
  }
  .mainContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
    .mainTitle {
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
    }
    .mainCount {
      font-size: 20px;
      color: #666;
      margin-top: 10px;
    }
  }
}
</style>