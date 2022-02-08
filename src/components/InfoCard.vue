<template>
    <div
      class="
        mx-12
        my-8
        md:mx-4
        md:my-4
        lg:mx-12
        w-80
        overflow-hidden
        shadow-md
        bg-white
      "
    >
      <p class="p-8 text-gray-700 leading-snug">
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
          bg-green-700
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
