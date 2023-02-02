<template>
  <div>
    <label 
      class="label"
      :for="label"
      :style="style"
    >
      {{ label }}
    </label>
    <input 
      :type="type" 
      v-model="value" 
      :id="label" 
      class="input" 
      :placeholder="placeholder"
      :style="style"
    >
  </div>

</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  typeInput: String,
  labelInput: String,
  placeholderInput: String,
  widthInput: {type: String, default: '300px'},
})

let type = ref(props.typeInput)
let value = ref(null)
let label = ref(props.labelInput)
let placeholder = ref(props.placeholderInput)
let style = ref({
  width: props.widthInput,
})
defineExpose({value})
</script>
<style scoped>
.input {
  box-shadow: none;
  padding: 10px 10px;
  letter-spacing: 1px;
  box-shadow: 1px 1px 1px 2px rgba(0,0,0,0.2);
  color: rgba(0, 0, 0, 0.75);
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  outline: none !important;
  height: 45px;
}   
.label {
  padding-left: 5px;
  display: block;
  margin: 5px;
}
</style>