<script setup>
import {nextTick, ref} from "vue";

const props = defineProps({
  columnsAndValues: {
    required: true,
    type: Object
  },
  searchCriteria: {
    required: true,
    type: Array
  }
});
const emit = defineEmits(["update:searchCriteria"]);

let primaryOptions = ref(Object.keys(props.columnsAndValues));
const searchFieldOptions = ref(primaryOptions.value);
const selectionModel = ref(null);
const selectSearchField = ref(true);//when false we select search field's value
const selectedSearchCriteria = ref([...props.searchCriteria]);
const showDropdownMenu = ref(false);
const incompleteSelectOperation = ref(false);
const searchInput = ref('');
const showAutoCompleteField = ref(false);

function searchBoxClick() {
  showAutoCompleteField.value = true;
}

function focusOut() {
  if (incompleteSelectOperation.value) {
    const partiallySelectedCategory = selectedSearchCriteria.value.pop();
    primaryOptions.value.push(partiallySelectedCategory.searchField);
    selectSearchField.value = true;
    searchFieldOptions.value = primaryOptions.value;
    incompleteSelectOperation.value = false;
    clearSearchFieldAndMenu();
  }
}

function valueUpdated(value) {
  if (selectSearchField.value) {
    selectSearchField.value = false;
    searchFieldOptions.value = props.columnsAndValues[value] ?? [];
    selectedSearchCriteria.value.push({searchField: value, searchValue: null});
    incompleteSelectOperation.value = true;
    primaryOptions.value = primaryOptions.value.filter(item => item !== value);
    clearSearchFieldAndMenu(false);
  } else {
    selectSearchField.value = true;
    searchFieldOptions.value = primaryOptions.value;
    const latestItem = selectedSearchCriteria.value.pop();
    latestItem.searchValue = value;
    selectedSearchCriteria.value.push(latestItem);
    incompleteSelectOperation.value = false;
    emit("update:searchCriteria", [...selectedSearchCriteria.value]);
    clearSearchFieldAndMenu();
  }
  selectionModel.value = null;
}

function clearSearchFieldAndMenu(clearMenu = true) {
  nextTick(() => {
    searchInput.value = '';
    showDropdownMenu.value = !clearMenu;
  });
}

function unselect(value) {
  if (!primaryOptions.value.includes(value.searchField)) {
    primaryOptions.value.push(value.searchField);
  }

  const index = selectedSearchCriteria.value.findIndex(sv => sv === value);
  if (index >= 0) {
    selectedSearchCriteria.value.splice(index, 1);
    emit("update:searchCriteria", [...selectedSearchCriteria.value]);
  }
}

function capitalize(value) {
  return value[0].toUpperCase() + value.slice(1);
}
</script>

<template>
  <div class="search-box pb-2" @click="searchBoxClick">
    <div class="placeholder mt-2" v-if="selectedSearchCriteria.length === 0 && !showAutoCompleteField">Search</div>
    <div class="selected-box">
      <v-chip
        class="mr-2 mt-2"
        v-for="selected of selectedSearchCriteria"
        :key="Math.random()"
        :closable="selected.searchValue !== null"
        :label="true"
        @click:close="unselect(selected)"
      >
        <span>{{ capitalize(selected.searchField) }}</span>
        <v-icon v-if="selected.searchValue" class="ml-1" size="x-small">mdi-equal</v-icon>
        <span class="ml-1">{{ selected.searchValue }}</span>
      </v-chip>
    </div>
    <div class="autocomplete-box">
      <v-autocomplete
        v-show="showAutoCompleteField"
        class="autocomplete-field"
        hide-details
        variant="plain"
        density="compact"
        placeholder="Search"
        v-model="selectionModel"
        v-model:menu="showDropdownMenu"
        v-model:search="searchInput"
        v-model:focused="showAutoCompleteField"
        :items="searchFieldOptions"
        :autofocus="true"
        @focusout="focusOut"
        @update:modelValue="valueUpdated"/>
    </div>
  </div>
</template>

<style lang="scss">
.search-box {
  --field-width: 350px;

  width: var(--field-width);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid #333333;
  border-radius: 4px;

  &:hover {
    border-color: #666;
  }

  .placeholder {
    color: grey;
  }

  .autocomplete-box {
    position: relative;

    .v-field__append-inner {
      display: none;
    }

    .autocomplete-field {
      width: var(--field-width);
    }
  }
}
</style>
