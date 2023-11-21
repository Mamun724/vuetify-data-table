<script setup>
import {ref} from "vue";

const emit = defineEmits(["dateRangeSelected"]);
const startDateHeader = "Select Start Date";
const endDateHeader = "Select End Date";
const header = ref(startDateHeader);
const startDate = ref(null);
const endDate = ref(null);
const date = ref(null);
const startDateSelect = ref(true);
const menuOpen = ref(false);
const minDate = ref(null);

function selectDates() {
  const dateIso = date.value.toISOString();
  if (startDateSelect.value) {
    startDate.value = new Date(dateIso);
    header.value = endDateHeader;
    minDate.value = new Date(dateIso);
  } else {
    endDate.value = new Date(dateIso);
    header.value = startDateHeader;
    menuOpen.value = false;
    minDate.value = null;

    emit("dateRangeSelected", {
      startDate: startDate.value,
      endDate: endDate.value
    });
  }
  startDateSelect.value = !startDateSelect.value;
  date.value = null;
}
</script>

<template>
  <v-menu
    :close-on-content-click="false"
    v-model="menuOpen">
    <template v-slot:activator="{props}">
      <div>
        <v-btn v-bind="props">
          {{ startDate?.toLocaleDateString() ?? "Start Date" }}
          -
          {{ endDate?.toLocaleDateString() ?? "End Date" }}
        </v-btn>
      </div>
    </template>
    <div>
      <v-date-picker
        title="Select Date Range"
        :header="header"
        v-model="date"
        :min="minDate"
        @update:modelValue="selectDates"/>
    </div>
  </v-menu>
</template>

<style scoped>

</style>
