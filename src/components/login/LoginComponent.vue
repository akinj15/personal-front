<template>
  <div class="container-login">
    <h1>login</h1>
    <div class="item-login">
      <InputComponent 
        typeInput="text" 
        labelInput="login" 
        placeholderInput="login" 
        ref="loginValue"
      />
    </div>
    <div class="item-login">
      <InputComponent 
        typeInput="password" 
        labelInput="password" 
        placeholderInput="password" 
        ref="loginValue"
      /> 
    </div>
    <div class="item-login">
      <ButtonComponent 
        background="rgb(36, 41, 47)" 
      color="rgba(255, 255, 255, 0.7)" 
        name="logar" 
        :border="'3px solid rgb(36, 41, 47)'"
        @click="login"
      >
      </ButtonComponent>
    </div>
  </div>
</template>
<script lang="ts">
  import ButtonComponent from '../styled-compenets/button/ButtonComponent.vue';
  import LoginComponent from './LoginController'
  export default LoginComponent
</script>
<style scoped>
  h1 {
    text-align: center;
  }

  .container-login {
    margin:200px auto;
    padding: 60px 0;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    box-shadow: 1px 1px 1px 2px rgba(0,0,0,0.2);
    border-radius: 0.6em;
  }

  .item-login{
    display: flex;
    justify-content: center;
    margin: 15px 7px;
  }

  @media (max-width:620px) {
    .container-login {
      box-shadow: none;
      border-radius: none;
      margin: 100px auto;
    } 
  }
</style>
