<script setup>
const search = ref("");
const view = ref("grid");
</script>
<template>
  <div class="grid">
    <div class="grid__filters">
      <BlockFilter />
    </div>
    <div class="grid__container">
      <div class="grid__tools">
        <div class="grid__search">
          <input
            v-model="search"
            type="text"
            placeholder="Поиск по каталогу..."
          />
          <span
            v-if="search.trim().length > 0"
            @click="search = ''"
            class="grid__search-reset"
          >
            <IconIcons cancle />
          </span>
          <button class="grid__search-button">
            <IconIcons search />
          </button>
        </div>
        <div class="grid__view">
          <div class="grid__view-buttons">
            <button
              @click="view = 'columns'"
              class="grid__view-button"
              :class="{ 'grid__view-button--active': view === 'columns' }"
            >
              <IconIcons columns />
            </button>
            <button
              @click="view = 'grid'"
              class="grid__view-button"
              :class="{ 'grid__view-button--active': view === 'grid' }"
            >
              <IconIcons grid />
            </button>
          </div>
        </div>
      </div>
      <div class="grid__wrapper">
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
        <UICard></UICard>
      </div>
    </div>
  </div>
</template>
