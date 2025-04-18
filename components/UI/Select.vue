<template>
  <MultiSelect
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :options="options"
    optionLabel="name"
    filter
    :placeholder="placeholder"
    :maxSelectedLabels="2"
  />
</template>
<script>
export default {
  props: {
    modelValue: null,
    options: { type: Array, required: true },
    placeholder: { type: String, required: true },
  },
  emits: ["update:modelValue"],
};
</script>
