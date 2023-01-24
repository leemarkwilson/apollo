<template>
  <div>
    <Header
      :pageData="currentPageData"
    />

    <section class="flex flex-row">
      <div class="hidden md:block bg-white w-64 h-auto lg:h-screen border-r border-outline-gray">
        <h2 class="w-auto leading-8 pt-8 mx-8 border-b border-outline-gray">New Schedule</h2>

        <nav>
          <ul class="mx-8">
            <li class="pt-4">
              <button
              :class="{ 'active' : this.currentChildComponent === 'ad-types', 'completed' : this.completedAdTypes }"
              class="flex items-center pl-8" type="button" name="button" @click="changeChildComponent('ad-types')">
                Ad Types
              </button>
            </li>
            <li class="pt-4">
              <button
              :class="{ 'active' : this.currentChildComponent === 'settings' }"
              class="flex items-center pl-8" type="button" name="button" @click="changeChildComponent('settings')">
                Settings
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <component
        :is="currentChildComponent"
        @changeChild="completedSection($event)"
      />
    </section>
  </div>
</template>

<script>
import adTypes from "@/components/ad-types"
import settings from "@/components/settings"

export default {
  name: 'apolloLandingPage',
  components: {
    'ad-types': adTypes,
    'settings': settings,
  },
  data() {
    return {
      completedAdTypes: false,
      currentPage: true,
      currentPageData: {
        previousPage: 'adtypes',
        previousText: 'Bid Optimization'
      },
      currentChildComponent: 'ad-types'
    }
  },
  methods: {
    completedSection(componentName) {
      this.completedAdTypes = true;
      this.changeChildComponent(componentName);
    },
    changeChildComponent(input) {
      this.currentChildComponent = input;
      this.currentPage = !this.currentPage;
    }
  }
}
</script>
