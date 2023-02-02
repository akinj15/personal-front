<template>
  <div class="corner">
    <table>
      <thead>
        <tr>
          <th>select</th>
          <th v-for="name in props.names">
            {{ name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itens" @click="seleciona()" :style="style">
          <td><input type="checkbox" /></td>
          <td v-for="key in Object.keys(item)">{{ item[key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps({
  names: Array,
  itens: Array,
});

let tableItensKeys = ref(null);
let selected = ref(false);
let style = ref({});
let seleciona = () => {
  selected = !selecterd;
  style = {
    background: selected ? "rgba(240, 216, 254, 1)" : "",
  };
};
onMounted(() => {
  tableItensKeys.value = Object.keys(props.itens);
});
</script>
<style scoped>
thead th,
tbody td {
  border: 1px solid rgb(208, 215, 222);
  padding: 16px;
}
table {
  border-radius: 10px;
  border-spacing: 0;
  border-collapse: separate;
}
</style>
