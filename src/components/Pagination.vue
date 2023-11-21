<script setup>
import {computed, ref, watch} from "vue";

const pageSizes = [10, 25, 50, 100];
const props = defineProps({
  dataCount: {
    type: Number,
    required: true
  },
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(["update:page", "update:pageSize"]);
const totalPages = computed(() => Math.ceil(props.dataCount / props.pageSize));
const pageRef = ref(props.page);
const pageSizeRef = ref(props.pageSize);

watch(pageRef, (newPageNo) => emit("update:page", newPageNo));
watch(pageSizeRef, (newPageSize) => emit("update:pageSize", newPageSize));

</script>
<template>
  <div class="d-flex align-center justify-end">
    <v-pagination
      v-model="pageRef"
      :length="totalPages"
      size="small"
      variant="tonal"
      style="max-width: 350px"
    />
    <v-select
      density="compact"
      :single-line="true"
      variant="solo-filled"
      style="max-width: 90px"
      v-model="pageSizeRef"
      :items="pageSizes"
      hide-details/>
  </div>
</template>
