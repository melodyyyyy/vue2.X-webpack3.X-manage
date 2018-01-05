<template>
<div>
	<el-breadcrumb seperator="/">
          <el-breadcrumb-item><i class="fa fa-table"></i> 地图</el-breadcrumb-item>
      </el-breadcrumb>
       <div class="plugins-tips">
            vue-amap ：一套基于Vue 2.0和高德地图的地图组件。
            访问地址：<a href="https://github.com/ElemeFE/vue-amap" target="_blank">vue-amap </a>
      </div>    
  	<div class="amap-page-container">
	      <el-amap
	        vid="amapDemo"  
	        :center="center"
	        :zoom="zoom"  
	        class="amap-demo"
	        :events="events">
	      </el-amap>
	      <div class="toolbar">
	        position: [{{ lng }}, {{ lat }}] address: {{ address }}
	      </div>
    </div>
</div>
 
</template>

<script>
    export default {
      data() {
        let self = this;

        return {
          zoom: 12,
          center: [121.59996, 31.197646],
          address: '',
          events: {
            click(e) {
              let { lng, lat } = e.lnglat;
              self.lng = lng;
              self.lat = lat;

              // 这里通过高德 SDK 完成。
              var geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
              });        
              geocoder.getAddress([lng ,lat], function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                  if (result && result.regeocode) {
                    self.address = result.regeocode.formattedAddress;
                    self.$nextTick();
                  }
                }
              });        
            }
          },
          lng: 0,
          lat: 0
        };
      }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .amap-demo {
      height: 500px;
  }
 .amap-page-container{
 	margin-top: 10px
 }
 .plugins-tips{
    background: #eef1f6;
    padding: 20px 10px;
    margin-bottom: 20px;
    margin-top: 10px;
}
</style>
