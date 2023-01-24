<template>
  <div class="main-section">
    <h2 class="w-5/6 mx-auto lg:w-auto text-lg font-medium mt-8">Ad Types</h2>
    <p class="w-5/6 mx-auto lg:w-auto">Each Ad Type will change what Ad Groups appear during the Ad Groups step</p>

    <div class="py-4 w-5/6 mx-auto lg:w-auto">
      <h2 class="border-solid border border-outline-gray rounded-t-lg min-w-full bg-white divide-gray-200 text-sm py-4 px-4 font-medium">
        Choose Campaign Types to Optimize
      </h2>

      <div class="flex items-center flex-col lg:flex-row border-solid border border-t-0 border-outline-gray rounded-b-lg min-w-full bg-white divide-gray-200 text-sm p-4 font-medium">
        <button
          :class="{ 'active' : selectedAdType === 'products' }"
          class="flex flex-col m-2 border border-outline-grey rounded h-60 xsm:h-80 w-60 xsm:w-80 bg-white"
          @click="toggleAdType('products')"
        >
          <h2 class="border-solid border-b border-outline-gray relative rounded-t min-w-full divide-gray-200 text-sm p-2 text-center">
            Sponsored Products

            <div
              :class="{ 'available' : selectedAdType === 'products' }"
              class="product"
            >
              &#10003
            </div>
          </h2>

          <div class="flex-1"></div>

          <p class="flex items-center border-t border-outline-gray p-2 text-center font-normal h-20">Optimize bids for Sponsored Products Campaigns Including Keywork and Product Targeting</p>
        </button>

        <button class="flex flex-col m-2 border border-outline-grey rounded h-60 xsm:h-80 w-60 xsm:w-80 bg-white">
          <h2 class="relative border-solid border-b border-outline-gray rounded-t min-w-full bg-white divide-gray-200 text-sm p-2 text-center">
            Coming Soon: Sponsored Brands

            <div class="hidden md:product">
              &#10003
            </div>
          </h2>

          <div class="flex-1"></div>

          <p class="flex items-center border-t border-outline-gray p-2 text-center font-normal h-20">Optimize bids for Sponsored Brands Campaigns Including all Ad Formats such as Product Collection and Video</p>
        </button>

        <button class="flex flex-col m-2 border border-outline-grey rounded h-60 xsm:h-80 w-60 xsm:w-80 bg-white">
          <h2 class="relative border-solid border-b border-outline-gray rounded-t min-w-full bg-white divide-gray-200 text-sm p-2 text-center">
            Coming Soon: Sponsored Display

            <div class="hidden md:product">
              &#10003
            </div>
          </h2>

          <div class="flex-1"></div>

          <p class="flex items-center border-t border-outline-gray p-2 text-center font-normal h-20">Optimize bids for Sponsored Display Campaigns including Product and Cateogry Targeting</p>
        </button>
      </div>
    </div>

    <div class="w-5/6 lg:float-right mx-auto">
      <button
        :class="[ !selectedAdType ? 'bg-banner-gray hover:bg-banner-gray' : 'bg-button-blue hover:bg-blue-900' ]"
        class="float-right text-white rounded py-2 px-12 text-base "
        :disabled="!selectedAdType"
        @click="$emit('changeChild', 'settings')"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdTypes',
  data() {
    return {
      selectedAdType: null,
    }
  },
  methods: {
    toggleAdType( adType ) {
      if ( this.selectedAdType === adType ) {
        this.selectedAdType = null;
      } else {
        this.selectedAdType = adType;
      }
    }
  }
}
</script>
