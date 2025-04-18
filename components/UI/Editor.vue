<template>
  <div class="editor-wrapper">
    <editor-content :editor="editor" />
    <div class="editor-toolbar">
      <!-- <button
        v-if="editor"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        <strong>B</strong>
      </button> -->
      <UIButton
        v-if="editor"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        typeStyle="['nav', 'icon']"
      >
        <strong>B</strong>

        <template #tooltip>⌘B</template>
      </UIButton>
      <UIButton
        v-if="editor"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        typeStyle="['nav', 'icon']"
      >
        <em>i</em>

        <template #tooltip>⌘i</template>
      </UIButton>
      <UIButton
        v-if="editor"
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
        typeStyle="['nav', 'icon']"
      >
        <s>S</s>

        <template #tooltip>⌘⇧S</template>
      </UIButton>
      <UIButton
        v-if="editor"
        @click="editor.chain().focus().toggleSpoiler().run()"
        :class="{ 'is-active': editor.isActive('spoiler') }"
        typeStyle="['nav', 'icon']"
      >
        {s}

        <template #tooltip>⌘⇧R</template>
      </UIButton>
    </div>
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import { Mark } from "@tiptap/core";

const props = defineProps({
  placeholder: {
    default: "",
    type: String,
  },
});

// Расширения
const Bold = Mark.create({
  name: "bold",

  addAttributes() {
    return {
      class: {
        default: "bold-comm",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "strong",
        class: "bold-comm",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["strong", HTMLAttributes, 0];
  },
});

const Italic = Mark.create({
  name: "italic",

  addAttributes() {
    return {
      class: {
        default: "italic-comm",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "em",
        class: "italic-comm",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["em", HTMLAttributes, 0];
  },
});

const Strike = Mark.create({
  name: "strike",

  addAttributes() {
    return {
      class: {
        default: "strike-comm",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "s",
        class: "strike-comm",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["s", HTMLAttributes, 0];
  },
});

const Spoiler = Mark.create({
  name: "spoiler",

  addAttributes() {
    return {
      class: {
        default: "spoiler-comm",
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

  // Добавляем команды для переключения спойлера
  addCommands() {
    return {
      toggleSpoiler:
        () =>
        ({ commands }) => {
          return commands.toggleMark(this.name);
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      // ↓ your new keyboard shortcut
      "Mod-shift-r": () => this.editor.commands.toggleMark(this.name),
    };
  },
});

const editor = useEditor({
  content: "",
  extensions: [
    StarterKit,
    Spoiler,
    Bold,
    Italic,
    Strike,
    Placeholder.configure({
      placeholder: props.placeholder,
    }),
  ],
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
      const content = target.textContent.trim();
      target.classList.toggle("revealed");
    }
  });
});

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.editor-wrapper {
  width: 100%;
  padding: 20px 25px;

  background: var(--gray);
  border: 0.7px solid var(--white-alpha10);

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: $medium) {
    padding: 12px;
  }
}

.editor-toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 8px;

  strong {
    font-weight: bold;
  }

  em {
    rotate: 12deg;
  }

  s {
    text-decoration: line-through;
  }
}

.editor-toolbar button {
  width: 35px;
  height: 35px;

  padding: 12px;

  font-size: 14px;

  /* display: grid;
  place-content: center; */

  border-radius: 12px;

  user-select: none;
}

.editor-toolbar button:hover {
  background: var(--light-black);
}

.editor-toolbar button.is-active {
  background: var(--light-gray);
  border: 0.7px solid var(--white-alpha10);
  color: var(--white);
}

.editor-content {
  min-height: 150px;
  color: var(--white);

  font-size: 14px;
}
</style>

<style lang="scss">
p.is-editor-empty:first-child::before {
  color: var(--white-alpha50);
  font-size: 14px;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

.spoiler-comm {
  position: relative;
  display: inline-block;
  padding: 0 4px;
  border-radius: 4px;
  cursor: pointer;
  // user-select: none;
  background-color: #2a2a2a;
  width: 80px;
  height: 25px;
  text-align: left;
  margin-right: 4px;
  vertical-align: middle;

  margin: auto 0;
}

.spoiler-comm {
  color: transparent;
}

.spoiler-comm:hover {
  color: #fff;
  width: auto;
  height: auto;
  min-height: 25px;
  z-index: 1;
}

.spoiler-comm::before {
  content: "[спойлер]";
  color: #666;
  font-size: 0.9em;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 3px 8px;
  white-space: nowrap;
}

.spoiler-comm:hover::before {
  display: none;
}

.bold-comm {
  font-weight: bold;
}

.italic-comm {
  font-style: italic;
}

.strike-comm {
  text-decoration: line-through;
}
</style>
