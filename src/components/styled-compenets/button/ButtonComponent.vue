<template>
  <button :style="style">{{ name }}</button>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
const props = defineProps({
  name: String,
  color: {type: String, default: '#000'},
  background: {type: String, default: '#fff'},
  border: {type: String, default: '2px solid #000'},
  placeholderInput: String,
})

let name = ref(props.name)
let style = ref({
  color: props.color,
  background: props.background,
  border: props.border,
})
</script>

<style scoped>
button {
  padding: 12px 12px;
  letter-spacing: 3px;
  border-radius: 4px;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.01);
  transition: box-shadow 1s;
}   
button:hover {
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
}
</style>