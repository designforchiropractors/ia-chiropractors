<template>
  <div class="flex flex-col gap-y-32 px-4 mb-12 sm:mb-18 md:mb-24 lg:mb-32">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 shadow-md overflow-hidden bg-white"
    >
      <div class="relative h-96 lg:h-auto">
        <img
          class="absolute h-full w-full object-cover"
          :src="require('@/assets/' + chiropractor.picture)"
          :alt="chiropractor.name"
        />
      </div>
      <div class="py-8 mx-6 md:mx-12">
        <h3 class="mb-6 text-4xl font-bold text-gray-800">
          {{ chiropractor.name }}
        </h3>
        <div class="flex gap-x-8 mb-6">
          <div>
            <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
              Experience
            </h4>
            <span class="font-xl font-bold text-gray-800">
              {{ chiropractor.experience }} years
            </span>
          </div>
          <div>
            <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
              Location
            </h4>
            <span class="font-xl font-bold text-gray-800">
              {{ chiropractor.location }}
            </span>
          </div>
          <div>
            <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
              Patient Focus
            </h4>
            <span class="font-xl font-bold text-gray-800">
              {{ chiropractor.focus }}
            </span>
          </div>
        </div>
        <hr class="mb-8" />
        <div class="mb-8">
          <h4 class="uppercase font-semibold text-xs mb-4 text-gray-400">
            Services
          </h4>
          <ul class="font-medium">
            <div class="flex gap-x-4 mb-2">
              <div
                class="
                  h-6
                  w-6
                  flex
                  justify-center
                  items-center
                  rounded-full
                  border border-gray-700
                "
              >
                <span class="font-bold text-xs text-gray-700"> 1 </span>
              </div>
              <li class="text-gray-700 flex justify-center items-center">
                {{ chiropractor.service1 }}
              </li>
            </div>
            <div class="flex gap-x-4 mb-2">
              <div
                class="
                  h-6
                  w-6
                  flex
                  justify-center
                  items-center
                  rounded-full
                  border border-gray-700
                "
              >
                <span class="font-bold text-xs text-gray-700"> 2 </span>
              </div>
              <li class="text-gray-700 flex justify-center items-center">
                {{ chiropractor.service2 }}
              </li>
            </div>
            <div class="flex gap-x-4 mb-2">
              <div
                class="
                  h-6
                  w-6
                  flex
                  justify-center
                  items-center
                  rounded-full
                  border border-gray-700
                "
              >
                <span class="font-bold text-xs text-gray-700"> 3 </span>
              </div>
              <li class="text-gray-700 flex justify-center items-center">
                {{ chiropractor.service3 }}
              </li>
            </div>
          </ul>
        </div>
        <a
          class="
            inline-block
            uppercase
            font-semibold
            px-6
            py-3
            shadow-sm
            text-gray-50
            bg-gray-700
            transition-colors
            duration-300
            hover:shadow-md hover:bg-gray-50 hover:text-gray-700
          "
          href="/chiropractors-felix-oloo.html"
        >
          View Full Profile
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "directoryItemComponent",
  props: {
    chiropractor: Object,
  },
  setup() {},
};
</script>
