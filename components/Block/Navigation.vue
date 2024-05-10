<template>
  <div class="navigation" style="background: var(--light-black)">
    <div class="navigation__container">
      <div class="navigation__container-item">
        <UILogo class="navigation__logo"></UILogo>

        <UIButton typeStyle="['nav']">Каталог</UIButton>
        <UIButton typeStyle="['nav']">Новости</UIButton>
        <UIButton typeStyle="['nav']">Расписание</UIButton>
        <UIButton typeStyle="['nav']">Поддержать проект</UIButton>
      </div>

      <div class="navigation__container-item">
        <NuxtLink :to="`/watch/${anilibriaStore.infoRandom.code}`"
          ><UIButton typeStyle="['nav', 'icon']"
            ><IconIcons random :size="18" color="var(--white)" /></UIButton
        ></NuxtLink>
        <UIButton typeStyle="['nav', 'icon']"
          ><IconIcons search :size="18" color="var(--white)"
        /></UIButton>
        <UIButton typeStyle="['nav', 'icon']"
          ><IconIcons settings :size="18" color="var(--white)"
        /></UIButton>
        <UIButton @click="visible = true" typeStyle="['blue']">Войти</UIButton>
        <Dialog
          v-model:visible="visible"
          modal
          header="Edit Profile"
          :style="{ width: '25rem' }"
        >
          <span class="p-text-secondary block mb-5"
            >Update your information.</span
          >
          <div class="flex align-items-center gap-3 mb-3">
            <label for="username" class="font-semibold w-6rem">Username</label>
            <InputText
              :modelValue="user"
              id="username"
              class="flex-auto"
              autocomplete="off"
            />
          </div>
          <div class="flex align-items-center gap-3 mb-5">
            <label for="email" class="font-semibold w-6rem">Email</label>
            <InputText
              :modelValue="email"
              id="email"
              class="flex-auto"
              autocomplete="off"
            />
          </div>
          <div class="flex justify-content-end gap-2">
            <Button
              type="button"
              label="Cancel"
              severity="secondary"
              @click="visible = false"
            ></Button>
            <Button
              type="button"
              label="Save"
              @click="console.log(user + email)"
            ></Button>
          </div>
        </Dialog>
      </div>
    </div>
  </div>
</template>
<script setup>
import { anilibria } from "@/store/anilibria";
const anilibriaStore = anilibria();

await anilibriaStore.getTitleRandom();

const visible = ref(false);
const user = ref("");
const email = ref("");
</script>
