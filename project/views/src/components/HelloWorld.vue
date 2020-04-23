<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  mounted() {
    this.$http.get('http://localhost:3000/data').then((rs)=>{
      console.log(rs);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
