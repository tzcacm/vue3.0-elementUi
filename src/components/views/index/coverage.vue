<template>
  <div class="coverage">
    <el-row>
      <el-col :span="24" :xs="24" style="padding-bottom: 4px;">
        <el-card>
          <div slot="header">集团战斗力排行榜</div>
          <chart style="width: 100%;" :options="option1"></chart>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24" style="padding-right: 4px;padding-top:4px;">
        <el-card>
          <div slot="header">集团战斗力输入</div>
          <chart style="width: 100%;" :options="option2"></chart>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24" style="padding-left: 4px;padding-top:4px;">
        <el-card>
          <div slot="header">集团战斗力输出</div>
          <chart style="width: 100%;" :options="option3"></chart>
        </el-card>
      </el-col>
      <el-col :span="24" :xs="24" style="padding-top: 8px;">
        <el-card>
          <div slot="header">集团分布区域</div>
          <div ref="MapMountNode" class="charts chart-bar map-mount-node"></div>
          <chart style="width: 100%;" :options="option4"></chart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class Coverage extends Vue {
  option1 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['董事长', '总裁', '总监', '经理', '业务员']
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'value'
      }
    ],
    yAxis: [
      {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    series: [
      {
        name: '董事长',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: { label: { show: true, position: 'insideRight' } }
        },
        data: [
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData()
        ]
      },
      {
        name: '总裁',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: { label: { show: true, position: 'insideRight' } }
        },
        data: [
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData()
        ]
      },
      {
        name: '总监',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: { label: { show: true, position: 'insideRight' } }
        },
        data: [
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData()
        ]
      },
      {
        name: '经理',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: { label: { show: true, position: 'insideRight' } }
        },
        data: [
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData()
        ]
      },
      {
        name: '业务员',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: { label: { show: true, position: 'insideRight' } }
        },
        data: [
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData()
        ]
      }
    ]
  };
  option2 = {
    title: {
      text: '星星照亮您的心',
      subtext: '航心时代',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['董事长', '总裁', '总监', '经理', '业务员']
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: {
          show: true,
          type: ['pie', 'funnel'],
          option: {
            funnel: {
              x: '25%',
              width: '50%',
              funnelAlign: 'left',
              max: 1548
            }
          }
        },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: this.randomData(), name: '董事长' },
          { value: this.randomData(), name: '总裁' },
          { value: this.randomData(), name: '总监' },
          { value: this.randomData(), name: '经理' },
          { value: this.randomData(), name: '业务员' }
        ]
      }
    ]
  };
  option3 = {
    title: {
      text: '星星照亮您的心'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['董事长', '总裁', '总监', '经理', '业务员']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '董事长',
        type: 'line',
        stack: '总量',
        data: [
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData()
        ]
      },
      {
        name: '总裁',
        type: 'line',
        stack: '总量',
        data: [
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData()
        ]
      },
      {
        name: '总监',
        type: 'line',
        stack: '总量',
        data: [
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData()
        ]
      },
      {
        name: '经理',
        type: 'line',
        stack: '总量',
        data: [
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData()
        ]
      },
      {
        name: '业务员',
        type: 'line',
        stack: '总量',
        data: [
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData(),
          this.randomData()
        ]
      }
    ]
  };
  option4 = {};
  created() {
    let mydata = [
      { name: '北京', value: this.randomData() },
      { name: '天津', value: this.randomData() },
      { name: '上海', value: this.randomData() },
      { name: '重庆', value: this.randomData() },
      { name: '河北', value: this.randomData() },
      { name: '河南', value: this.randomData() },
      { name: '云南', value: this.randomData() },
      { name: '辽宁', value: this.randomData() },
      { name: '黑龙江', value: this.randomData() },
      { name: '湖南', value: this.randomData() },
      { name: '安徽', value: this.randomData() },
      { name: '山东', value: this.randomData() },
      { name: '新疆', value: this.randomData() },
      { name: '江苏', value: this.randomData() },
      { name: '浙江', value: this.randomData() },
      { name: '江西', value: this.randomData() },
      { name: '湖北', value: this.randomData() },
      { name: '广西', value: this.randomData() },
      { name: '甘肃', value: this.randomData() },
      { name: '山西', value: this.randomData() },
      { name: '内蒙古', value: this.randomData() },
      { name: '陕西', value: this.randomData() },
      { name: '吉林', value: this.randomData() },
      { name: '福建', value: this.randomData() },
      { name: '贵州', value: this.randomData() },
      { name: '广东', value: this.randomData() },
      { name: '青海', value: this.randomData() },
      { name: '西藏', value: this.randomData() },
      { name: '四川', value: this.randomData() },
      { name: '宁夏', value: this.randomData() },
      { name: '海南', value: this.randomData() },
      { name: '台湾', value: this.randomData() },
      { name: '香港', value: this.randomData() },
      { name: '澳门', value: this.randomData() },
      {
        name: '南海诸岛',
        itemStyle: {
          normal: {
            opacity: 0,
            label: { show: false },
            borderWidth: '0',
            borderColor: '#10242b',
            areaStyle: { color: '#10242b' }
          },
          emphasis: { opacity: 0, label: { show: false } }
        }
      }
    ];
    this.option4 = {
      title: {
        text: '星星点灯',
        subtext: '',
        x: 'left'
      },
      grid: {
        borderWidth: 0,
        y: 0,
        y2: 60
      },
      tooltip: {
        trigger: 'item'
      },

      // 左侧小导航图标
      visualMap: {
        show: false,
        x: 'left',
        y: 'bottom'
      },
      //配置属性
      series: [
        {
          type: 'map',
          map: 'china',
          roam: false,
          label: {
            normal: {
              show: true //省份名称
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = [
                  '#C1232B',
                  '#B5C334',
                  '#FCCE10',
                  '#E87C25',
                  '#C1232B',
                  '#C3332B',
                  '#C1562B',
                  '#27727B',
                  '#47752B',
                  '#57582B'
                ];
                return colorList[params.dataIndex];
              }
            }
          },
          zoom: 1.26,
          data: mydata
        }
      ]
    };
  }

  randomData() {
    return Math.round(Math.random() * 500);
  }
}
</script>
<style lang="scss">
.coverage {
  margin-bottom: 100px;
}
</style>

