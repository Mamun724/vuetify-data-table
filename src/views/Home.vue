<script setup>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import Pagination from "@/components/Pagination.vue";
import ColumnOptions from "@/components/ColumnOptions.vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import {useTheme} from "vuetify";
import {
  filterByDate,
  filterByType,
  getDateTimeString,
  getPrice,
  getStatusColor,
  getTypeColor
} from "@/helpers/utils.js";

const store = useStore();
const theme = useTheme();
const allHeaders = [
  {title: "Type", key: "type", sortable: false},
  {title: "SKU", key: "sku", sortable: false},
  {title: "Status", key: "status", sortable: false},
  {title: "Start Date", key: "startDate", value: item => getDateTimeString(item.startDate), sortable: false},
  {title: "End Date", key: "endDate", value: item => getDateTimeString(item.endDate), sortable: false},
  {title: "Your Price", key: "yourPrice", value: item => getPrice(item.yourPrice), align: "end", sortable: false},
  {title: "Discount Price", key: "discountPrice", value: item => getPrice(item.discountPrice), align: "end", sortable: false},
  {title: "Discounted Price", key: "discountedPrice", align: "end", sortable: false, cellProps: {class: "discounted-price-column"}},
  {title: "Units Sold", key: "unitsSold", value: item => item.unitsSold, align: "end", sortable: false},
  {title: "Sold Amount", key: "soldAmount", value: item => getPrice(item.soldAmount), align: "end", sortable: false},
];

const data = computed(() => store.getters.getPromotions);
const filteredData = computed(() => filterData());

const headers = ref([...allHeaders]);
const page = ref(1);
const pageSize = ref(10);

const filter = ref({
  date: [],
  type: null
});

function filterData() {
  let filteredData = data.value;
  filteredData = filterByDate(filteredData, filter.value.date);
  filteredData = filterByType(filteredData, filter.value.type);
  return filteredData;
}
</script>

<template>
  <div class="pa-4 promotions-area">
    <h2>Promotions</h2>
    <v-tabs
      v-model="filter.type"
      color="primary"
      class="tabs"
    >
      <v-tab :value="null">All</v-tab>
      <v-tab value="Buy One Get One">Promotions</v-tab>
      <v-tab value="Exclusive Discounts">Exclusive Discounts</v-tab>
      <v-tab value="Coupon">Coupons</v-tab>
    </v-tabs>
    <div class="d-flex justify-space-between mt-2">
      <v-text-field
        style="max-width: 250px"
        hide-details
        density="compact"
        placeholder="Search"
        variant="outlined"
        append-inner-icon="mdi-magnify"/>
      <div class="d-flex ml-2">
        <ColumnOptions
          :columns="allHeaders"
          v-model:selected="headers"/>
        <Datepicker
          :dark="theme.current.value.dark"
          :range="true"
          v-model="filter.date"
          :enable-time-picker="false"
          placeholder="Select Dates"/>
      </div>
    </div>
    <v-data-table
      class="mt-2"
      :items="filteredData"
      v-model:page="page"
      :items-per-page="pageSize"
      :headers="headers">
      <template v-slot:item.type="{item}">
        <v-chip label :color="getTypeColor(item.type)">{{ item.type }}</v-chip>
      </template>
      <template v-slot:item.status="{item}">
        <v-chip label :color="getStatusColor(item.status)">{{ item.status }}</v-chip>
      </template>
      <template v-slot:item.discountedPrice="{item}">
        <div>
          <v-icon color="#87CEEB">mdi-trending-down</v-icon>
          {{ getPrice(item.discountedPrice) }}
        </div>
      </template>

      <template v-slot:bottom>
        <div class="mr-1">
          <Pagination
            :data-count="filteredData.length"
            v-model:page="page"
            v-model:page-size="pageSize"/>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<style lang="scss">
.promotions-area {
  .tabs {
    border-bottom: 1px solid #333333;
  }

  .v-data-table__tr {
    color: darkgrey;

    .discounted-price-column {
      background-color: #333333;
      white-space: nowrap;
    }
  }
}
</style>
