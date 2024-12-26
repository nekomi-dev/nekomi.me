<template>
  <div class="editor-wrapper">
    <editor-content :editor="editor" />
    <div class="editor-toolbar">
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        <strong>B</strong>
      </button>
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <em>I</em>
      </button>
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        <s>S</s>
      </button>
      <button
        v-if="editor"
        @click="editor.chain().focus().toggleSpoiler().run()"
        :class="{ 'is-active': editor.isActive('spoiler') }"
      >
        [s]
      </button>
    </div>
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import { Mark } from "@tiptap/core";
import { onMounted } from "vue";

// Создаем расширение для спойлера
const Spoiler = Mark.create({
  name: "spoiler",

  addAttributes() {
    return {
      class: {
        default: "spoiler-comm revealed",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span",
        class: "spoiler-comm",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", HTMLAttributes, 0];
  },

  addCommands() {
    return {
      toggleSpoiler:
        () =>
        ({ commands }) => {
          return commands.toggleMark("spoiler", {
            class: "spoiler-comm revealed",
          });
        },
    };
  },
});

const editor = useEditor({
  extensions: [StarterKit, Spoiler],
  content: "",
  editorProps: {
    attributes: {
      class: "editor-content",
    },
  },
});

// Перемещаем обработчик клика в onMounted
onMounted(() => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("spoiler-comm")) {
      const target = e.target;
      target.classList.toggle("revealed");

      // Обновляем data-content при открытии спойлера
      if (target.classList.contains("revealed")) {
        target.setAttribute("data-content", target.textContent.trim());
      }
    }
  });
});
</script>

<style scoped>
.editor-wrapper {
  border-radius: 8px;
  background: #1a1a1a;
  padding: 12px;
}

.editor-toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.editor-toolbar button {
  background: transparent;
  border: none;
  color: #666;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}

.editor-toolbar button:hover {
  background: #2a2a2a;
}

.editor-toolbar button.is-active {
  color: #4b7bf5;
}

.editor-content {
  min-height: 150px;
  color: #fff;
}

:deep(.editor-content) {
  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  s {
    text-decoration: line-through;
  }

  .spoiler-comm {
    background: #2a2a2a;
    padding: 2px 4px;
    border-radius: 4px;
    cursor: pointer;
  }

  p {
    margin: 0.5em 0;
  }
}
</style>

<style lang="scss">
.spoiler-comm:not(.revealed)::before {
  content: "[спойлер] показать";
  color: #666;
  font-size: 0.9em;
}

.spoiler-comm.revealed::before {
  content: "[" attr(data-content) "]" " скрыть";
  color: #666;
  font-size: 0.9em;
}

.spoiler-comm:not(.revealed) > * {
  display: none;
}

/* Добавляем стиль для контейнера спойлера */
.spoiler-comm {
  position: relative;
  display: inline-block;
}

/* Скрываем оригинальный контент при закрытом спойлере */
.spoiler-comm:not(.revealed) {
  color: transparent;
}
</style>
