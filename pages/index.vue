<template>
  <div>
    <Header/>

    <h1 class="border-solid border-b border-outline-gray rounded-t min-w-full bg-white font-medium text-xl divide-y divide-gray-200 text-sm py-2 px-4 flex items-center justify-between flex-wrap xsm:flex-no-wrap h-32 xsm:h-16">
      <span class="text-xl ml-2 md:ml-4">Bid Optimisation</span>

      <NuxtLink class="btn bg-button-blue text-white rounded py-2 mr-2 text-base md:mr-4 hover:bg-blue-900" to="/newschedule">Add New Schedule</NuxtLink>
    </h1>

    <Sub-schedulesTable/>
  </div>
</template>

<script>
export default {
  name: 'apolloLandingPage'
}
</script>
