<template>
  <div
    class="bg-banner-black border-solid border-b border-banner-gray flex items-center px-2 py-2 h-14 sm:px-4"
  >
    <img
      v-if="!pageData"
      class="py-2 px-4"
      src="@/assets/images/white-apollo-logo.svg"
      width="130"
    >

    <template v-else>
      <NuxtLink
        class="text-white text-xl font-medium"
        to="/"
      >
        &#60;
      </NuxtLink>

      <span class="text-white text-xl font-medium ml-2">{{pageData.previousText}}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  props: {
    pageData: {
      type: Object,
    }
  },
}
</script>
