<template>


  <div>


    <div style="position:relative;">
      　 <img src="../../static/img/download2.png" width="100%"/>
      　　
      <div style="position:absolute; z-index:10; left:50%; top:40% ">
        　　　　 <img src="../../static/img/download_a.png" width="50%" height="50%">
      </div>

      <div style="position:absolute; z-index:10; left:50%; top:55% ">
        　　　　 <img src="../../static/img/download_i.png" width="50%" height="50%">
      </div>



    </div>


    <div style="position:relative;">

      <img src="../../static/img/bg2.png" width="100%"/>

      <div style="position:absolute; z-index:10; left:0%; top:0% ">
        　　　　请关注官方文档
      </div>
      <div style="position:absolute; z-index:10; left:20%; top:10% ">
        　　　　 <img src="../../static/img/qr.jpg" width="60%" height="60%">
      </div>
    </div>

  </div>
</template>


<script>
  import {getAgentInfo} from '@/api/api'
  import {Toast} from 'mint-ui';

</script>


<style>

  body {
    margin: 0;
    padding: 0;
  }

  img {
    margin: 0;
    padding: 0;
    outline-width: 0px;
    vertical-align: top;
  }
</style>
