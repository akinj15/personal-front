<template>
  <div class="home-container">
    <TableComponent :names="names" :itens="array" />
  </div>
</template>
<script lang="ts">
import HomeComponent from "./HomeController";
export default HomeComponent;
</script>
<style scoped>
.home-container {
  padding: 20px;
  overflow: hidden;
}
</style>
