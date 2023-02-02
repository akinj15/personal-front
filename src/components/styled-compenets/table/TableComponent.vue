<template>
    <table>
      <thead>
        <tr>
          <th v-for="name in props.names">
            {{ name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itens">
          <td><input type="checkbox" /></td>
          <td v-for="key in Object.keys(item)">{{item[key]}}</td>
        </tr>
      </tbody>
    </table>

</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps({
  names: Array,
  itens: Array,
})

let tableItensKeys = ref(null)

onMounted(() => {
  tableItensKeys.value = Object.keys(props.itens)
})

</script>
<style scoped>

</style>
