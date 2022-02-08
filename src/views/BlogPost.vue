<template>
  <section class="lg:pb-32">
    <article>
      <div class="relative overflow-hidden h-1/6 lg:screen w-full mb-12 lg:mb-16">
        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-br bg-gray-800 opacity-50">
        </div>
        <div class="absolute h-full w-full flex flex-col items-center justify-center">
          <div class="mx-4">
            <h1 class="text-3xl lg:text-5xl font-semibold lg:mx-0 text-white">
                {{ }}
            </h1>
            <div class="flex gap-x-4 mt-4 items-center">
              <div class="h-12 w-12 rounded-lg border border-gray-50 overflow-hidden flex-shrink-0">
                <img class="w-full h-full object-cover object-bottom" src="./images/writer-1.jpg"
                  alt="A very cool Georgina Orwell.">
              </div>
              <div>
                <span class="block font-semibold text-white">Georgina Orwell</span>
                <span class="block text-sm font-medium text-gray-50">Feb 21, 2021</span>
              </div>
            </div>
          </div>
        </div>

        <!-- BG image -->
        <div class="h-screen">
          <img class="h-full w-full object-cover" src="./images/benefits-of-chiropractic-care.jpg"
            alt="A clipboard containing a diagram of a spine.">
        </div>
      </div>

      <!-- Blog Article Text -->
      <div class="max-w-prose mx-6 lg:mx-auto text-gray-600">

        <p class="mb-12 text-lg lg:text-xl font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus eligendi libero sit nihil tempora, totam reprehenderit aliquam beatae obcaecati
          ratione. Libero consequatur cumque magnam ipsam quae sequi laudantium pariatur veritatis? Totam
          reprehenderit
          aliquame.</p>
        <!-- Main Article Body-->
        <p class="mb-4">Nunc dictum nec tellus nec hendrerit. Etiam leo felis, congue vitae placerat vel, vestibulum
          id
          massa. Maecenas cursus, ante sit amet placerat rhoncus, risus est auctor diam, in pulvinar magna lectus at
          erat.</p>
        <p class="mb-4">Nullam eget neque tellus. In tellus odio, pretium ac risus vitae, bibendum dignissim lectus.
          Vestibulum hendrerit libero nec mauris feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
          faucibus purus ornare.</p>
        <p class="mb-4">Aenean rhoncus mauris id sapien gravida lobortis. Praesent vel eleifend purus. Nulla euismod
          pharetra massa sit amet vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nec
          semper quam.</p>

        <h2 class="text-xl lg:text-2xl mt-12 mb-4 text-gray-600">A Secondary Heading</h2>
        <p class="mb-4">Nunc dictum nec tellus nec hendrerit. Etiam leo felis, congue vitae placerat vel, vestibulum
          id
          massa. Maecenas cursus, ante sit amet placerat rhoncus, risus est auctor diam, in pulvinar magna lectus at
          erat.</p>
        <p class="mb-4">Nullam eget neque tellus. In tellus odio, pretium ac risus vitae, bibendum dignissim lectus.
          Vestibulum hendrerit libero nec mauris feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
          faucibus purus ornare.</p>
        <p class="mb-4">Aenean rhoncus mauris id sapien gravida lobortis. Praesent vel eleifend purus. Nulla euismod
          pharetra massa sit amet vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nec
          semper quam.</p>

        <h2 class="text-xl lg:text-2xl mt-12 mb-4 text-gray-600">Summary</h2>
        <p class="mb-4">Nullam eget neque tellus. In tellus odio, pretium ac risus vitae, bibendum dignissim lectus.
          Vestibulum hendrerit libero nec mauris feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
          faucibus purus ornare.</p>
        <p class="mb-4">Aenean rhoncus mauris id sapien gravida lobortis. Praesent vel eleifend purus. Nulla euismod
          pharetra massa sit amet vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nec
          semper quam.</p>

      </div>

    </article>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "blogPost",
  components: {},
  setup() {
    useMeta({ title: "DSM Chiropractors" });
  },
};
</script>
