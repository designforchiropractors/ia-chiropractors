<template>
    <div
      class="
        mx-12
        md:mx-4 md:mb-8
        lg:mx-12
        mb-10
        lg:mb-0
        w-80
        overflow-hidden
        shadow-md
        bg-white
      "
    >
      <p class="p-8 text-gray-700">
        {{ infoCard.text }}
      </p>
      <div
        class="
          flex
          items-center
          gap-x-4
          px-8
          py-4
          rounded-tr-5xl
          text-gray-50
          bg-gray-700
        "
      >
        <svg
          class="fill-current"
          :width="infoCard.width"
          :height="infoCard.height"
          :viewBox="'0 0 ' + infoCard.width + ' ' + infoCard.height"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            :d="infoCard.svg"
          />
        </svg>
        <h2 class="font-semibold text-lg lg:text-xl">
            {{ infoCard.caption }}
        </h2>
      </div>
    </div>
</template>

<script>
export default {
  name: "infoCard",
  props: {
      infoCard: Object,
  },
  setup() {},
};
</script>
