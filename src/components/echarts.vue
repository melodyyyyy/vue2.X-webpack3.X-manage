<template>
   <div>
      <el-breadcrumb seperator="/">
          <el-breadcrumb-item><i class="fa fa-table"></i> 图表</el-breadcrumb-item>
      </el-breadcrumb>
       <div class="plugins-tips">
            Vue-ECharts ：基于 ECharts v3.8.5+ 开发，依赖 Vue.js v2.2.6+。
            访问地址：<a href="https://github.com/Justineo/vue-echarts/blob/master/README.zh_CN.md" target="_blank"> Vue-ECharts</a>      
      </div>     
       <el-row>
		  <el-col :span="12"><echarts :options="polar"></echarts></el-col>
		  <el-col :span="12"><echarts :options="line"></echarts></el-col>
	  </el-row>
   </div>
</template>
<script>
     import echarts from 'vue-echarts'
    export default {
        data: function(){
        	let data = []
	     for (let i = 0; i <= 360; i++) {
	        let t = i / 180 * Math.PI
	        let r = Math.sin(2 * t) * Math.cos(2 * t)
	        data.push([r, i])
	    }
            return {            
		      polar: {
		        title: {
		          text: '极坐标双数值轴'
		        },
		        legend: {
		          data: ['line']
		        },
		        polar: {
		          center: ['50%', '54%']
		        },
		        tooltip: {
		          trigger: 'axis',
		          axisPointer: {
		            type: 'cross'
		          }
		        },
		        angleAxis: {
		          type: 'value',
		          startAngle: 0
		        },
		        radiusAxis: {
		          min: 0
		        },
		        series: [
		          {
		            coordinateSystem: 'polar',
		            name: 'line',
		            type: 'line',
		            showSymbol: false,
		            data: data
		          }
		        ],
		        animationDuration: 2000
		      },
		      line:{
		      	 title: {
			        text: '堆叠区域图'
			    },
			    tooltip : {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross',
			            label: {
			                backgroundColor: '#6a7985'
			            }
			        }
			    },
			    legend: {
			        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
			    },
			    toolbox: {
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['周一','周二','周三','周四','周五','周六','周日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'邮件营销',
			            type:'line',
			            stack: '总量',
			            areaStyle: {normal: {}},
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'联盟广告',
			            type:'line',
			            stack: '总量',
			            areaStyle: {normal: {}},
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'视频广告',
			            type:'line',
			            stack: '总量',
			            areaStyle: {normal: {}},
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			        {
			            name:'直接访问',
			            type:'line',
			            stack: '总量',
			            areaStyle: {normal: {}},
			            data:[320, 332, 301, 334, 390, 330, 320]
			        },
			        {
			            name:'搜索引擎',
			            type:'line',
			            stack: '总量',
			            label: {
			                normal: {
			                    show: true,
			                    position: 'top'
			                }
			            },
			            areaStyle: {normal: {}},
			            data:[820, 932, 901, 934, 1290, 1330, 1320]
			        }
			    ]
		      }
               
            }
        },
        components: {
            echarts
        },
       
        methods: {
            
           
        },
       

    }
</script>

<style scoped>
.plugins-tips{
    background: #eef1f6;
    padding: 20px 10px;
    margin-bottom: 20px;
    margin-top: 10px;
}
.echarts {
  height: 300px;
  width: 700px
}

</style>