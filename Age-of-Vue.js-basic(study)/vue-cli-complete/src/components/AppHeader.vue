<template>
  <header>
    <div>Header</div>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: data["propsdata"],
  methods: {
    sendEvent: function() {
      this.$emit("renew");
    }
  }
};
</script>

<style>
</style>