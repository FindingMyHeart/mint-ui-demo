<template>
    <div>
      <mt-header title="选择授权">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
          <!--<mt-button @click="handleClose">close</mt-button>-->
        </router-link>

        <router-link to="/" slot="right">
          <mt-button>主页</mt-button>
        </router-link>
      </mt-header>
      <mt-cell v-for="n in 4" :title="'拉老鼠 ' + n" to="/delegateList" is-link/>
    </div>
</template>

<script>
    export default {
      name: "",
      data(){
        return {
          list:[1, 2, 3]
        }
      },
      methods: {
        loadMore() {
          // this.loading = true;
          // setTimeout(() => {
          //   let last = this.list[this.list.length - 1];
          //   for (let i = 1; i <= 10; i++) {
          //     this.list.push(last + i);
          //   }
          //   this.loading = false;
          // }, 2500);
        }
      }
    }
</script>

<style scoped>

</style>
