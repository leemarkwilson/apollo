<template>
  <div class="sticky top-0 md:mt-24 pb-4 lg:mr-8">
    <h2 class="border-solid border border-outline-gray rounded-t-lg min-w-full bg-white divide-gray-200 text-base py-4 px-4 font-medium">
      Target {{selectedTarget[0].toUpperCase() + selectedTarget.substring(1)}} Metrics
    </h2>

    <div class="flex flex-row flex-wrap border-solid border border-t-0 border-outline-gray rounded-b-lg min-w-full bg-white divide-gray-200 text-sm px-4 pt-4 font-medium">
      <div class="flex flex-col border-r border-outline-gray w-6/12 pr-4 mb-4">
        <h3>Total Ad Groups Selected</h3>
        <p class="text-xl font-medium">19</p>
      </div>
      <div class="flex flex-col w-6/12 pl-4">
        <h3>Total Targeting Selected</h3>
        <p class="text-xl font-medium">962</p>
      </div>

      <div class="flex flex-col border-r border-outline-gray w-6/12 pr-4 mb-4">
        <h3>Last 7 Day {{selectedTarget[0].toUpperCase() + selectedTarget.substring(1)}}</h3>
        <p class="text-xl font-medium">37.13k</p>
      </div>
      <div class="flex flex-col w-6/12 pl-4">
        <h3>Average Daily {{selectedTarget[0].toUpperCase() + selectedTarget.substring(1)}}</h3>
        <p class="text-xl font-medium">5.39k</p>
      </div>

      <div class="flex flex-col border-r border-outline-gray w-6/12 pr-4 mb-4">
        <h3>Av. {{selectedTarget[0].toUpperCase() + selectedTarget.substring(1)}} per Targeting</h3>
        <p class="text-xl font-medium">71</p>
      </div>
      <div class="flex flex-col w-6/12 pl-4">
        <h3>Av. {{selectedTarget[0].toUpperCase() + selectedTarget.substring(1)}} per Order</h3>
        <p class="text-xl font-medium">631</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Settings',
  props: {
    selectedTarget: {
      type: String,
      required: true,
    }
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
