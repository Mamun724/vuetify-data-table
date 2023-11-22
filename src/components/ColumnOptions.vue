<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  selected: {
    type: Array,
    required: true
  }
});
const emit = defineEmits(["update:selected"]);
const optionColumns = props.columns.map((header, index) => ({...header, order: index}));
const selectedColumns = ref([...optionColumns]);

watch(selectedColumns, (newColumns) => {
  const orderedColumns = [...newColumns];
  orderedColumns.sort((lhs, rhs) => lhs.order - rhs.order);
  emit("update:selected", orderedColumns);
});
</script>

<template>
  <v-menu
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        class="mr-2"
        v-bind="props"
        prepend-icon="mdi-cog"
        elevation="0">
        Column Options
      </v-btn>
    </template>
    <div class="dropdown pa-2">
      <h3>Columns to show</h3>
      <v-form>
        <v-checkbox
          v-for="column in optionColumns"
          v-model="selectedColumns"
          :value="column"
          :label="column.title"
          hide-details
          density="compact"/>
      </v-form>
    </div>
  </v-menu>
</template>

<style scoped>
.dropdown {
  background-color: #333;
  overflow: auto;
}
</style>
