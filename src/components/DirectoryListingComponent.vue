<template>
    <div class="relative w-full h-64 lg:h-full">
      <img
        class="absolute h-full w-full object-cover"
        :src="require('@/assets/' + chiropractor.picture)"
        :alt="formatName(chiropractor)"
      />
    </div>

    <div class="py-6 lg:py-12 mx-6 lg:mx-12">
      <h3 class="mb-6 text-3xl lg:text-4xl font-bold text-gray-800">
        {{ formatName(chiropractor) }}
      </h3>
      <div class="flex gap-x-8 mb-4">
        <div v-if="chiropractor.experience != ''">
          <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
            Experience
          </h4>
          <span class="font-xl font-bold text-gray-800"
            >{{ chiropractor.experience }} years</span
          >
        </div>
        <div v-if="chiropractor.location != ''">
          <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
            Location
          </h4>
          <span class="font-xl font-bold text-gray-800">{{
            chiropractor.location
          }}</span>
        </div>
        <div v-if="chiropractor.focus != ''">
          <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
            Patient Focus
          </h4>
          <span class="font-xl font-bold text-gray-800">{{
            chiropractor.focus
          }}</span>
        </div>
      </div>
      <hr class="mb-8" />
      <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8">
        <div v-if="chiropractor.education != ''">
          <h4 class="uppercase font-bold text-xs mb-2 text-green-700">
            Education
          </h4>
          <p>
            {{ chiropractor.education }}
          </p>
        </div>
        <div v-if="chiropractor.specialization != ''">
          <h4 class="uppercase font-bold text-xs mb-2 text-green-700">
            Specialization
          </h4>
          <p>
            {{ chiropractor.specialization }}
          </p>
        </div>

        <div v-if="chiropractor.websiteUrl != '' && chiropractor.websiteName != ''">
          <h4 class="uppercase font-bold text-xs mb-2 text-green-700">
            Business
          </h4>
          <p>
            <a :href="chiropractor.websiteUrl" target="_blank">
              <u>
                {{ chiropractor.websiteName }}
              </u>
            </a>
          </p>
        </div>
        <div
          v-if="chiropractor.contactUrl != ''"
          class="flex flex-col justify-center mb-8 lg:mb-0"
        >
          <a
            class="
              inline-block
              uppercase
              text-center
              font-semibold
              px-6
              py-3
              shadow-sm
              text-gray-50
              bg-green-700
              transition-colors
              duration-300
              hover:shadow-md hover:bg-gray-50 hover:text-gray-700
              w-full
              sm:w-3/4
              md:w-1/2
              lg:w-full
            "
            :href="chiropractor.contactUrl"
            target="_blank"
            >Contact {{ formatName(chiropractor) }}</a
          >
        </div>
      </div>
    </div>

    <div
      v-if="chiropractor.about != ''"
      class="col-start-1 col-end-2 p-6 lg:p-12 bg-gray-900"
    >
      <h3
        class="
          uppercase
          font-semibold
          text-xs
          mb-2
          tracking-widest
          text-gray-400
        "
      >
        About
      </h3>
      <p class="max-w-prose text-gray-300">
        {{ chiropractor.about }}
      </p>
    </div>
    <div
      v-if="chiropractor.extras != ''"
      class="col-start-2 col-end-3 p-6 pb-10 lg:pb-12 lg:p-12 bg-gray-900"
    >
      <h3
        class="
          uppercase
          font-semibold
          text-xs
          mb-2
          tracking-widest
          text-gray-400
        "
      >
        Extras
      </h3>
      <p class="max-w-prose text-gray-300">
        {{ chiropractor.extras }}
      </p>
    </div>
</template>

<script>

import ChiropractorService from "@/services/ChiropractorService";

export default {
  name: "directoryListing",
  components: {},
    props: {
    chiropractor: Object,
  },
  setup() {
    const formatName = (chiropractor) => {
      return ChiropractorService.formatName(chiropractor);
    };

    return { formatName };
  },
};
</script>
