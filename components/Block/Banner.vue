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
<style lang="scss" scoped>
@import "~/assets/scss/imports";

.banner {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  padding: 50px;

  position: relative;

  border-radius: 10px;

  @media screen and (max-width: $medium) {
    flex-direction: column-reverse;
    gap: 20px;
    padding: 20px;
  }

  &__buttons {
    height: fit-content;

    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  &__info {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;

    &-title {
      width: 50%;

      font-size: 35px;
      font-weight: 800;
      line-height: 1.2;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      color: var(--white);

      @media screen and (max-width: $medium) {
        width: 80%;

        font-size: 26;
        font-weight: 600;
        -webkit-line-clamp: 2;
      }
    }
    height: 100%;

    &-text {
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media screen and (max-width: $medium) {
        gap: 20px;
      }
    }

    &-tags {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &-tag {
      display: flex;
      flex-direction: row;
      gap: 10px;

      & > span {
        width: fit-content;
        height: fit-content;

        padding: 0 5px;

        border-radius: 6px;
        background: var(--light-blue);

        color: var(--white);
        font-size: 16px;
        font-family: "Times New Roman", Times, serif;

        transform: skewX(-6deg) rotate(-6deg);

        margin-right: 10px;
      }

      color: var(--white);

      &:last-child {
        color: var(--white-alpha50);
      }

      &-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        color: inherit;
      }
    }

    &-buttons {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }

  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    z-index: -1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background: radial-gradient(
        circle at top left,
        rgba(213, 225, 255, 1) -20%,
        rgba(0, 0, 0, 0) 100%
      );
      z-index: 1;
    }

    & > img {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      object-fit: cover;

      border-radius: 10px;
    }
  }
}
</style>
