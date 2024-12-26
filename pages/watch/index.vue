<template>
  <div class="container">
    <div class="player">
      <div class="player__container">
        <div class="player__video">
          <div class="player__iframe">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=1234567890"
              frameborder="0"
            ></iframe>
            <div class="player__episodes"></div>
          </div>

          <div class="player__info">
            <div class="player__info-text">
              <h1 class="player__info-title">Реинкарнация Безработного</h1>

              <p class="player__info-tags">
                <span>12 серий</span>
                <IconIcons dot :size="3" color="var(--white-alpha50)" />
                <span>Реклама</span>
                <IconIcons dot :size="3" color="var(--white-alpha50)" />
                <span>nekomi.player</span>
              </p>
            </div>
            <div class="player__info-tools">
              <UIButton typeStyle="['blue', 'icon']">
                <IconIcons mic :size="16" color="var(--white)" />
                Озвучка
              </UIButton>

              <UIButton typeStyle="['nav', 'icon']">
                <IconIcons favorite filled :size="16" color="var(--white)" />
              </UIButton>

              <UIButton typeStyle="['nav', 'icon']">
                <IconIcons chat :size="16" color="var(--white)" />
              </UIButton>
            </div>
          </div>
        </div>

        <div class="player__comments">
          <h2 class="player__comments-title">Комментарии</h2>

          <UIEditor placeholder="Оставить комментарий..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>



</style>
