<script setup>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import Pagination from "@/components/Pagination.vue";
import ColumnOptions from "@/components/ColumnOptions.vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import {useTheme} from "vuetify";

const store = useStore();
const theme = useTheme();
const allHeaders = [
  {title: "Type", key: "type", value: item => item.type},
  {title: "SKU", key: "sky", value: item => item.sku},
  {title: "Status", key: "status", value: item => item.status},
  {title: "Start Date", key: "startDate", value: item => getDateTimeString(item.startDate)},
  {title: "End Date", key: "endDate", value: item => getDateTimeString(item.endDate)},
  {title: "Your Price", key: "yourPrice", value: item => getPrice(item.yourPrice), align: "center"},
  {title: "Discount Price", key: "discountPrice", value: item => getPrice(item.discountPrice), align: "center"},
  {title: "Discounted Price", key: "discountedPrice", align: "center", cellProps: {class: "discounted-price-column"}},
  {title: "Units Sold", key: "unitsSold", value: item => item.unitsSold, align: "center"},
  {title: "Sold Amount", key: "soldAmount", value: item => getPrice(item.soldAmount), align: "center"},
];

const data = computed(() => store.getters.getPromotions);
const filteredData = computed(() => filterData());

const headers = ref([...allHeaders]);
const page = ref(1);
const pageSize = ref(10);

const date = ref();
const tab = ref(null);

function filterByDate(filteredData) {
  if (date.value && date.value[0] && date.value[1]) {
    date.value[0].setHours(0);
    date.value[0].setMinutes(0);
    date.value[0].setSeconds(0);
    date.value[1].setHours(23);
    date.value[1].setMinutes(59);
    date.value[1].setSeconds(59);
    filteredData = filteredData.filter(datum => date.value[0] <= new Date(datum.startDate) && new Date(datum.endDate) <= date.value[1]);
  }
  return filteredData;
}

function filterData() {
  let filteredData = data.value;
  filteredData = filterByDate(filteredData);
  console.log(tab.value);
  if (tab.value) {
    filteredData = filteredData.filter(datum => datum.type === tab.value);
  }
  return filteredData;
}

function getDateTimeString(isoDateTime) {
  const dateTime = new Date(isoDateTime);
  return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`
}

function getPrice(price) {
  return `$${price}`;
}

function getTypeColor(type) {
  switch (type) {
    case "Coupon":
      return "blue";
    case "Percentage Off":
      return "green";
    case "Exclusive Discounts":
      return "indigo";
    case "Buy One Get One":
      return "yellow";
    default:
      return "error";
  }
}

function getStatusColor(status) {
  switch (status) {
    case "Expired":
      return "warning";
    case "In Effect":
      return "primary";
    case "Starting Soon":
      return "secondary"
    default:
      return "error";
  }
}
</script>

<template>
  <div class="pa-4 promotions-area">
    <h2>Promotions</h2>
    <v-tabs
      v-model="tab"
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
        variant="solo-filled"/>
      <div class="d-flex ml-2">
        <ColumnOptions
          :columns="allHeaders"
          v-model:selected="headers"/>
        <Datepicker
          :dark="theme.current.value.dark"
          :range="true"
          v-model="date"
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
    }
  }
}
</style>
