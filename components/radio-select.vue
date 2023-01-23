<template>
  <div class="border-solid border border-outline-gray overflow-auto rounded-lg mb-4 lg:mr-8">
    <h2 class="border-solid border-b border-outline-gray min-w-full bg-white divide-gray-200 text-base py-4 px-4 font-medium">
      {{title}}
    </h2>

    <div class="flex flex-col min-w-full bg-white divide-gray-200 text-sm p-4 font-medium">
      <div
        v-for="(option, index) in optionInformation"
        :key="index"
        :class="{ 'selected': selected === option.value, 'border-solid border-b border-outline-gray pb-4' : option.value === 'percentage' && (selected === 'percentage' || selected === 'fixed') }"
        class="custom-radio flex flex-row items-start py-2"
      >
        <input class="mt-1" type="radio" :id="option.value" :name="optionName" @click="select(option.value)">
        <div class="flex flex-col pl-8 pr-2">
          <label :for="option.value">{{option.title}}</label>
          <label :for="option.value">{{option.description}}</label>
        </div>
      </div>
    </div>

    <slot/>
  </div>
</template>

<script>

export default {
  name: 'RadioSelect',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    selected: {
      type: String,
      required: true,
      default: '',
    },
    optionInformation: {
      type: Array,
      required: true,
    },
    optionName: {
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
    select(target) {
      this.$emit('selectValue', target);
    }
  }
}
</script>
