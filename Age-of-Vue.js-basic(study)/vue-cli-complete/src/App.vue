<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름()="상위 컴포넌트의 데이터 이름(app.vue)"></app-header> -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
// 컴포넌트의 내용을 들고와서 컴포넌츠에 사용한다가 중요하다!
// 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
import AppHeader from "./components/AppHeader.vue";

// var AppHeader = {
//   template: '<header><h1>Header</h1></header>'
// }

// new Vue({
//   data: {
//     str: 'hi'
//   }
// })

export default {
  data: function() {
    return {
      str: "Header"
    };
  },
  components: {
    "app-header": AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = "hi";
    }
  }
};
</script>

<style>
</style>
