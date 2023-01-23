<template>
  <div class="rounded-lg pl-4 sm:p-4 py-5 sm:ml-4 lg:mr-8">
    <h2 class="border-solid border border-b-0 border-outline-gray rounded-t min-w-full bg-white divide-y divide-gray-200 text-sm py-4 px-4 font-medium">
      All Schedules
    </h2>

    <div class="border-solid border border-b-0 border-outline-gray min-w-full bg-header-gray divide-y divide-gray-200 text-sm py-2 px-4">
      <input class="inline-block w-64 p-2 border-solid border border-outline-gray rounded" type="text" name="" value="" placeholder="Search for Schedules Name or ID">
    </div>

    <div class="overflow-hidden overflow-x-auto">
      <table class="min-w-full rounded bg-white divide-y divide-gray-200 text-sm table-auto">
        <thead class="bg-header-gray">
          <tr>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              <div class="flex items-center gap-2">
                Active
              </div>
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              <div class="flex items-center gap-2">
                Schedule Name
              </div>
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              <div class="flex items-center gap-2">
                Date Created
              </div>
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              <div class="flex items-center gap-2">
                ID
              </div>
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              <div class="flex items-center gap-2">
                Campaign Sources
              </div>
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              <div class="flex items-center gap-2">
                Target ACoS
              </div>
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              7 Day ACoS
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              7 Day Sales
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              30 Day ACoS
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              30 Day Sales
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Last Run
            </th>
            <th
              class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Last Status
            </th>
          </tr>
        </thead>

        <tbody
          v-for="(schedule, index) in schedules.data"
          :key="index"
          class="divide-y divide-gray-200"
        >
          <tr class="border-solid border-l border-outline-gray">
            <td class="flex justify-center inset-y-0 px-3 py-5">
              <div class="flex">
                <label :for="'active-status-' + schedule.id" class="relative h-6 w-10 cursor-pointer">
                  <input type="checkbox" :id="'active-status-' + schedule.id" class="peer sr-only" />

                  <span
                    class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"
                  ></span>

                  <span
                    class="absolute inset-0 m-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4"
                  ></span>
                </label>
              </div>
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-900">
              {{schedule.scheduleName}}
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-700">
              <p>{{schedule.dateCreated | formatDate}}</p>
              <p>{{schedule.dateCreated | formatTime}}</p>
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-700">
              {{schedule.id}}
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-700">
              {{schedule.campaignSources}}
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-700">
              {{schedule.targetAcos}}
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-700">
              <template v-if="schedule.sevenDayAcos && schedule.sevenDayAcos.length">
                {{schedule.sevenDayAcos}}
              </template>
              <template v-else>
                -
              </template>
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-700">
              {{schedule.sevenDaySales}}
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-700">
              <template v-if="schedule.thirtyDayAcos && schedule.thirtyDayAcos.length">
                {{schedule.thirtyDayAcos}}
              </template>
              <template v-else>
                -
              </template>
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-700">
              {{schedule.thirtyDaySales}}
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-700">
              <p>{{schedule.lastRun | formatDate}}</p>
              <p>{{schedule.lastRun | formatTime}}</p>
            </td>
            <td class="border-solid border border-outline-gray whitespace-nowrap px-4 py-2 text-gray-700">
              <p>{{schedule.lastStatus}}</p>
              <p class="w-auto inline-block border-dashed border-b border-black">Details</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="border-solid border border-t-0 border-outline-gray min-w-full bg-white divide-gray-200 text-sm p-2 flex flex-wrap xsm:flex-no-wrap justify-end items-center gap-3">
      <span>Go To</span>
      <input class="inline-block text-center w-12 p-2 border-solid border border-outline-gray" type="number" name="" v-model="currentPage" @change="changePage(currentPage)">
      <span>Total {{Object.keys(schedulesData).length}}</span>

      <div class="custom-dropdown">
        <div class="inline-flex items-stretch rounded-md border bg-white">

          <div class="relative">
            <button
              type="button"
              class="inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-100 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              @click="viewPerPageDropdown = !viewPerPageDropdown"
            >
              <span class="rounded-l-md pr-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700">{{ viewPerPage }}/page</span>

              <span class="sr-only">View per page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <div
              v-if="viewPerPageDropdown"
              class="absolute right-0 z-10 mt-4 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
              role="menu"
            >
              <div class="p-2">
                <button
                  class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  @click="setViewPerPage(10)"
                >
                  10/page
                </button>

                <button
                  class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  @click="setViewPerPage(25)"
                >
                  25/page
                </button>

                <button
                  class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  @click="setViewPerPage(50)"
                >
                  50/page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="text-dropdown-gray-400 mr-3" @click="prevPage" type="button" name="button">&#60;</button>

      <button class="text-dropdown-gray-400 mr-3" @click="nextPage" type="button" name="button">&#62;</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: 'SchedulesTable',
  data() {
    return {
      currentPage: 1,
      viewPerPage: 10,
      viewPerPageDropdown: false,
      schedulesData: [],
      schedules: [],
    }
  },
  mounted() {
    this.callSchedules();
  },
  methods: {
    setViewPerPage(count) {
      this.viewPerPage = count;
      this.callSchedules();
      this.currentPage = 1;
      this.viewPerPageDropdown = !this.viewPerPageDropdown;
    },
    changePage(page) {
      if (page <= Object.keys(this.schedulesData).length) {
        this.schedules = this.schedulesData[page - 1];
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.schedules = this.schedulesData[this.currentPage - 2];
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < Object.keys(this.schedulesData).length) {
        this.schedules = this.schedulesData[this.currentPage];
        this.currentPage++;
      }
    },
    callSchedules() {
      axios.get(
        "https://0c9c1b38-7c97-4e54-a392-79fefa7d3882.mock.pstmn.io/schedules", {
          params: {
            viewPerPage: this.viewPerPage
          }
        }
      ).then(response  => {
        this.schedulesData = response.data
        this.schedules = this.schedulesData[this.currentPage - 1];
        console.log('API call success!')
      }).catch((error) => {
        console.log('API call errored')
      })
    }
  }
}
</script>
