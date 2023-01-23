<template>
  <section class="main-section w-full md:w-2/3 flex flex-col md:flex-row">
    <div class="w-5/6 md:w-7/12 mx-auto">
      <div class="h-36 xsm:h-32 md:h-24">
        <h2 class="text-lg text-left font-medium pt-8">Settings</h2>

        <p>Enter the Settings to complete the Schedule Setup in order to run the Schedule</p>
      </div>
      <section class="w-full">
        <div>
          <div class="pb-4 lg:mr-8">
            <h2 class="border-solid border border-outline-gray rounded-t-lg min-w-full bg-white divide-gray-200 text-base py-4 px-4 font-medium">
              Name your Bid Optimization Schedule
            </h2>

            <div class="flex flex-row border-solid border border-t-0 border-outline-gray rounded-b-lg min-w-full bg-white divide-gray-200 text-sm p-4 font-medium">
                <input class="inline-block w-3/4 p-2 border-solid border border-outline-gray rounded" type="text" name="" value="" placeholder="Enter Schedule Name">
            </div>
          </div>

          <radioSelect
            optionName="target"
            title="Target to Increase"
            :selected="selectedTarget"
            :optionInformation="targetInfo"
            @selectValue="changeSelectedTarget($event)"
          />

          <radioSelect
            optionName="bids"
            title="Bid Increase Settings"
            :selected="selectedBid"
            :optionInformation="bidInfo"
            @selectValue="changeSelectedBid($event)"
          >
            <div
              v-if="selectedBid === 'fixed'"
              class="flex flex-col border-solid border border-t-0 border-outline-gray rounded-b-lg min-w-full bg-white divide-gray-200 text-sm p-4 pt-2 font-medium"
            >
              <p class="w-fit inline-block border-dashed border-b border-black">Fixed Step Increase</p>
              <div class="bid-increase flex flex-row pt-3">
                <input class="inline-block w-1/4 p-2 border-solid border border-outline-gray rounded rounded-l-none" type="text" name="" v-model="fixedBid" placeholder="Fixed Step">
              </div>
            </div>

            <div
              v-else-if="selectedBid === 'percentage'"
              class="flex flex-col min-w-full bg-white divide-gray-200 text-sm p-4 pt-2 font-medium"
            >
              <p class="w-fit inline-block border-dashed border-b border-black">Percentage Increase</p>
              <div class="bid-increase percentage flex flex-row pt-3">
                <input class="inline-block w-1/4 p-2 border-solid border border-outline-gray rounded rounded-l-none" type="text" name="" v-model="percentageBid" placeholder="Fixed Step">
              </div>
            </div>
          </radioSelect>

          <NuxtLink class="hidden md:block bg-button-blue float-right text-white rounded py-2 px-12 text-base hover:bg-blue-900" to="/">Publish</NuxtLink>
        </div>
      </section>
    </div>

    <div
      v-if="selectedTarget.length"
      class="w-5/6 md:w-5/12 mx-auto"
    >
      <sub-statPanel
        :selectedTarget="selectedTarget"
      />

      <NuxtLink class="block md:hidden bg-button-blue float-right text-white rounded py-2 px-12 text-base hover:bg-blue-900" to="/">Publish</NuxtLink>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Settings',
  data() {
    return {
      selectedTarget: '',
      selectedBid: '',
      fixedBid: 0.05,
      percentageBid: 5,
      targetInfo: [
        {
          title: 'Impressions',
          value: 'impressions',
          description: 'Enter a target for the number of Impressions your would like to achieve per Targeting'
        }, {
          title: 'Clicks',
          value: 'clicks',
          description: 'Enter a target for the number of Impressions your would like to achieve per Targeting'
        }
      ],
      bidInfo: [
        {
          title: 'Fixed Step Increase',
          value: 'fixed',
          description: 'Increase bids by a constant value every time the Schedule runs'
        }, {
          title: 'Percentage Increase',
          value: 'percentage',
          description: 'Increase bids by a constant percentage every time the Schedule runs'
        }
      ],
    }
  },
  mounted() {

  },
  methods: {
    changeSelectedTarget(input) {
      this.selectedTarget = input;
    },
    changeSelectedBid(input) {
      this.selectedBid = input;
    }
  }
}
</script>
