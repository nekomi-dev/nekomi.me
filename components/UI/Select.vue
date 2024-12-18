<template>
  <MultiSelect
    v-model="model"
    :options="props.options"
    optionLabel="name"
    filter
    :placeholder="props.placeholder"
    :maxSelectedLabels="3"
  />
</template>

<script setup>
const model = defineModel();
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
</script>
