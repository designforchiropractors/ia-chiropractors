<template>
  <div class="flex flex-col gap-y-32 px-4 mb-12 sm:mb-12 md:mb-18 lg:mb-24">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 shadow-md overflow-hidden bg-white"
    >
      <div class="relative h-96 lg:h-auto">
        <img
          class="absolute h-full w-full object-cover"
          :src="require('@/assets/' + chiropractor.picture)"
          :alt="formatName(chiropractor)"
        />
      </div>
      <div class="py-8 mx-6 md:mx-12">
        <h3 class="mb-6 text-4xl font-bold text-gray-800">
          {{ formatName(chiropractor) }}
        </h3>
        <div class="flex gap-x-8 mb-6">
          <div v-if="chiropractor.experience != ''">
            <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
              Experience
            </h4>
            <span class="font-xl font-bold text-gray-800">
              {{ chiropractor.experience }} years
            </span>
          </div>
          <div v-if="chiropractor.location != ''">
            <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
              Location
            </h4>
            <span class="font-xl font-bold text-gray-800">
              {{ chiropractor.location }}
            </span>
          </div>
          <div v-if="chiropractor.focus != ''">
            <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
              Patient Focus
            </h4>
            <span class="font-xl font-bold text-gray-800">
              {{ chiropractor.focus }}
            </span>
          </div>
        </div>
        <hr class="mb-8" />
        <div v-if="chiropractor.services.length != 0" class="mb-8">
          <h4 class="uppercase font-semibold text-xs mb-4 text-gray-400">
            Services
          </h4>
          <ul class="font-medium">
            <div
              v-for="(service, index) in chiropractor.services"
              :key="index"
              class="flex gap-x-4 mb-2">
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
                <span class="font-bold text-xs text-deep-red"> {{ index + 1 }} </span>
              </div>
              <li class="text-gray-700 flex justify-center items-center">
                {{ service }}
              </li>
            </div>
          </ul>
        </div>
        <router-link
          class="
            inline-block
            uppercase
            font-semibold
            px-6
            py-3
            shadow-sm
            text-gray-50
            bg-deep-red
            transition-colors
            duration-300
            hover:shadow-md hover:bg-gray-50 hover:text-gray-700
          "
          :to="{ name: 'directoryListing', params: { directoryLink: chiropractor.link } }"
        >
          View Full Profile
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ChiropractorService from "@/services/ChiropractorService";

export default {
  name: "directoryItemComponent",
  props: {
    chiropractor: Object,
  },
  setup() {
    const formatName = (chiropractor) => {
      return ChiropractorService.formatName(chiropractor);
    };
    return { formatName }
  },
};
</script>
