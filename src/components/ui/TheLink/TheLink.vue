<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { handleI18n } from "@/i18n/util";

export type TheLinkProps = {
  id: string | number;
  label: string;
  url: string;
  a?: boolean;
  disabled?: boolean;
  target?: string;
};

const props = withDefaults(defineProps<TheLinkProps>(), {
  label: "Link",
  a: true,
  disabled: false,
  target: "",
});

const { t } = useI18n();

const labelHandled = computed(() => {
  return handleI18n(props.label);
});

const ariaLink = computed(() => ({
  able: t("aria.link.able", { label: labelHandled.value }),
  disable: t("aria.link.disable", { label: labelHandled.value }),
}));
</script>

<template>
  <span :class="{ disabled }">
    <span v-if="disabled" class="link" :aria-label="ariaLink.disable">
      {{ labelHandled }}
    </span>

    <RouterLink
      v-else-if="!a"
      :to="{ name: url }"
      :aria-label="ariaLink.able"
      :target="target"
      class="link"
    >
      {{ labelHandled }}
    </RouterLink>

    <a
      v-else
      :href="url"
      :aria-label="ariaLink.able"
      :target="target"
      class="link"
    >
      {{ labelHandled }}
    </a>
  </span>
</template>
