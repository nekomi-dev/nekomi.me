<template>
  <div class="banner">
    <div class="banner__info">
      <div class="banner__info-text">
        <h1 class="banner__info-title">
          Перевоплотился в седьмого принца, так что я буду совершенствовать свою
          магию, как захочу
        </h1>

        <div class="banner__info-tags">
          <div class="banner__info-tag">
            <span>16+</span>

            <div class="banner__info-tag-text">
              <span>Весна</span>
              <IconIcons dot :size="3" color="var(--white)" />
              <span>2024</span>
              <IconIcons dot :size="3" color="var(--white)" />
              <span>12 серий</span>
            </div>
          </div>
          <div class="banner__info-tag">
            <div class="banner__info-tag-text">
              <span>Приключения</span>
              <IconIcons dot :size="3" color="var(--white-alpha50)" />
              <span>Исекай</span>
              <IconIcons dot :size="3" color="var(--white-alpha50)" />
              <span>Фэнтези</span>
            </div>
          </div>
        </div>
      </div>
      <div class="banner__info-buttons">
        <UIButton typeStyle="['transparent', 'icon', 'darkeed']"
          >Смотреть<IconIcons goto :size="10" color="var(--white)"
        /></UIButton>
        <UIButton typeStyle="['transparent', 'icon', 'darkeed']"
          ><IconIcons favorite :size="16" color="var(--white)"
        /></UIButton>
        <UIButton typeStyle="['transparent', 'icon', 'darkeed']"
          ><IconIcons newWindow :size="16" color="var(--white)"
        /></UIButton>
      </div>
    </div>
    <div class="banner__buttons">
      <UIButton typeStyle="['transparent', 'icon']"
        ><IconIcons info :size="16" color="var(--white)"
      /></UIButton>
      <UIButton typeStyle="['transparent', 'icon', 'blueed', 'no-interactive']"
        ><IconIcons
          checked
          :size="16"
          color="var(--white)"
        />Завершенно</UIButton
      >
    </div>
    <div class="banner__img">
      <img src="/anime_poster.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>
