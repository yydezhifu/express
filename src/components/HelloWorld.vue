<template>
  <div class="hello">
    <h2 style="margin: 30px">{{msg}}</h2>
    <el-form :inline="true">
      <el-form-item>
        <el-input type="text" placeholder="请输入订单号" prefix-icon="el-icon-search" v-model.trim="number" clearable></el-input>
      </el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="search()" :loading="loading">查找</el-button>
    </el-form>
    <div class="content">
      <div v-if="info.length" id="cd-timeline" class="cd-container" style="margin-top: 10px">
        <div class="cd-timeline-block" v-for="(item, index) in info" :key="item.time">
          <div :class="['cd-timeline-img', index%2!=1?'cd-movie':'cd-picture']">
            <img :src="getIcon" alt="Location">
          </div>
          <div class="cd-timeline-content">
            <h3>{{item.time}}</h3>
            <p>{{item.context}}</p>
          </div>
        </div>
      </div>
      <div v-else style="margin-top: 20px">
        <p>{{error}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        number: "",
        msg: '快递单号查询工具',
        info: [],
        company: "",
        error: "",
        loading: false
      }
    },
    computed: {
      getIcon() {
        return '../../static/images/cd-icon-location.svg'
      }
    },
    methods: {
      search: function() {
        let url = "https://api.apiopen.top/EmailSearch";
        var _this = this;
        this.loading = true;
        this.axios.post(url, this.qs.stringify({number: this.number})).then((response)=>{
          if(response.data.result.data){
            _this.company = response.data.result.com;
            _this.info = response.data.result.data;
          } else {
            _this.info = [];
            _this.error = response.data.result;
          } 
          _this.loading = false;
        }).catch((response)=>{
          console.log(response);
        })
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
    margin: 10px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
