<script setup>
import Editor from "primevue/editor";
import { ref } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
});

const value = ref("");
defineEmits(["update:modelValue"]);

const editorOptions = {
  modules: {
    toolbar: [
      ["bold", "italic", "underline"],
      ["link", "image"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  },
  theme: "snow",
};
</script>

<template>
  <div class="editor">
    <Editor
      v-model="value"
      editorStyle="height: 320px"
      :placeholder="placeholder"
      :modules="editorOptions.modules"
    >
      <template #toolbar>
        <span class="ql-formats">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-color"></button>
          <button class="ql-link"></button>
        </span>
      </template>
    </Editor>
  </div>
</template>

<style lang="scss">
.editor {
  border-radius: 8px;
  background: var(--gray);
  border: 0.5px solid var(--white-alpha10);

  .ql-toolbar {
    border-bottom: 0.5px solid var(--white-alpha10);
    padding: 8px;

    .ql-formats {
      display: flex;
      gap: 8px;
    }

    button {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      color: var(--white);

      &:hover {
        background: var(--white-alpha10);
      }

      .ql-stroke {
        stroke: var(--white);
      }

      .ql-fill {
        fill: var(--white);
      }
    }
  }

  .ql-container {
    border: none;

    .ql-editor {
      min-height: 120px;
      color: var(--white);

      &.ql-blank::before {
        color: var(--white-alpha50);
      }
    }
  }
}
</style>
