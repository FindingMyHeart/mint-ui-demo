<template>
  <div class="top">
    <br>
    <br>
    <div>
      <mt-button  @click="open('picker1')" size="large" >2018年4月20</mt-button>
    </div>
    <div class="inner2">
      <mt-button @click="open('picker1')" size="large">2018年4月20</mt-button>
    </div>
    <div class="inner2">
      <mt-button type="primary" size="large">查    询</mt-button>
    </div>
    <br>
    <mt-datetime-picker
      ref="picker1"
      type="date"
      v-model="value1"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'hello',
    data () {
      return {
        value: null,
        value1: null,
        //show: true,
        startDate: new Date('2014-1-1'),
        endDate: new Date()
      }
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.date1 = value.toString();
        //this.show = true;
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },
    }
  }
</script>

<style scoped>
  .top{
    width: 100%;
    height: auto;
    background-color: darkgrey;
    text-align: center;
  }
  .inner2{
    margin-top: 20px;
  }
</style>
