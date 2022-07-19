<template>
  <div class="flex">
    <div class="flex-shrink-0">
      <div
        class="
          flex
          justify-center
          h-8
          md:h-12
          w-8
          md:w-12
          rounded-md
          text-white
        "
      >
        <svg
          class="fill-current text-deep-red mt-1"
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.3333 1.88L7.33333 17.88L0 10.5467L1.88 8.66667L7.33333 14.1067L21.4533 0L23.3333 1.88Z"
          />
        </svg>
      </div>
    </div>
    <div class="ml-2">
      <dt class="text-lg leading-6 font-medium text-gray-700">
        {{ text }}
      </dt>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscriptionBenefitComponent",
  props: {
    text: String,
  },
  setup() {},
};
</script>
