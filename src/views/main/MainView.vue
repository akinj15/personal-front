<template>
  <nav class="navbar-bar">
    <div class="navbar-list-item brand">
      <a href="">home</a>
    </div>
   <ButtonDropdownComponent
      name="alugar uma casa "
      background="rgb(36, 41, 47)"
      color="rgba(255, 255, 255, 0.7)"
      border="rgb(36, 41, 47)"
    >
      <ul>
        <li><a href=""><span>home</span></a></li>
        <li><a href=""><span>home</span></a></li>
        <li><a href="">home</a></li>
      </ul>
    </ButtonDropdownComponent>
   <ButtonDropdownComponent
      name="teste1"
      background="rgb(36, 41, 47)"
      color="rgba(255, 255, 255, 0.7)"
      border="rgb(36, 41, 47)"
    >
      <ul>
        <li><a href="">home</a></li>
        <li><a href="">home</a></li>
      </ul>
    </ButtonDropdownComponent>
   <ButtonDropdownComponent
      name="teste1"
      background="rgb(36, 41, 47)"
      color="rgba(255, 255, 255, 0.7)"
      border="rgb(36, 41, 47)"
    >
      <ul>
        <li><a href="">home</a></li>
        <li><a href="">home</a></li>
      </ul>   
    </ButtonDropdownComponent>





  </nav>
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
  import ButtonDropdownComponent from '../../components/styled-compenets/button-dropdown/ButtonDropdownComponent.vue'
</script>

<style scoped>
.navbar-bar {
  width: 100vw;
  height: 62px;
  padding: 16px 8px;
  background-color: rgb(36, 41, 47);
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: end;
}
.navbar-list-item{
  margin: 16px;
}
.brand {
  flex-grow: 1;
  text-align: left;
}
.navbar-list-item a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 800;
  transition: color 0.6s;
}
.navbar-list-item a:hover {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 800;
}


</style>
