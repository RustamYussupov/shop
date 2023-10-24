<script setup lang="ts">
import UIText from "~/ui/UIText.vue";
import UILink from "~/ui/UILink.vue";

export interface Props {
  title?: string;
  linkText?: string;
  linkTo?: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="content-block-wrap">
    <div class="container">
      <div class="content-block-wrap__header">
        <div class="content-block-wrap__header-col-1">
          <UIText font-size="40px" font-weight="700" latter-spacing="-1px">
            {{ props.title }}
          </UIText>

          <div
            v-if="props.linkTo || $slots['after-title']"
            class="content-block-wrap__header-link-wrap"
          >
            <slot name="after-title">
              <UILink :to="props.linkTo">
                {{ linkText }}
              </UILink>
            </slot>
          </div>
        </div>
      </div>

      <div class="content-block-wrap__box mt-40">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-block-wrap {
  &__header {
  }

  &__header-col-1 {
    display: flex;
    align-items: flex-end;
  }

  &__header-link-wrap {
    margin-left: 34px;
    padding-bottom: 10px;
  }

  &__box {
  }
}
</style>
