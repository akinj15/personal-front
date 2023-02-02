<template>
  <div class="dropdown">
    <button class="mainmenubtn" :style="style">{{ name }}</button>
    <div class="dropdown-child"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
const props = defineProps({
  name: String,
  color: {type: String, default: '#000'},
  background: {type: String, default: '#fff'},
  border: {type: String, default: '2px solid #000'}
})

let name = ref(props.name)
let style = ref({
  color: props.color,
  background: props.background,
  border: props.border
})
</script>

<style scoped>
.mainmenubtn {
  cursor: pointer;
  padding: 12px 12px;
  letter-spacing: 3px;
  border-radius: 4px;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.01);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-child {
  display: none;
  background-color: rgb(240, 236, 236);
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.01);
  position:absolute;
  border-radius: 4px;
  transition: all 1s;
  width: 100%;
}

:slotted(.dropdown-child a ){
  width: 100%;
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
}

.dropdown:hover .dropdown-child {
  display: block;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
}

:slotted(li){
  align-items: left;
  height: 44px;
}

</style>
