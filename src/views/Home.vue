<template>
  <section class="cover relative bg-gradient-to-r from-gray-700 to-gray-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center">
    <div class="dsm_chiropractors h-full absolute top-0 left-0 right-0 z-0">
      <img :src="require('@/assets/dsm-chiropractors.jpg')" alt="DSM Chiropractors" class="w-full h-full object-cover opacity-20" />
    </div>

    <div
      class="
        col-start-1 col-end-3
        lg:col-start-2
        flex flex-col
        justify-center
        mx-4
        z-10
      "
    >
      <h1 class="text-7xl font-bold text-gray-50">
        Take back your life.
      </h1>
      <p
        class="
          text-xl
          mt-10
          mb-20
          leading-relaxed
          md:leading-loose
          max-w-prose
          lg:w-2/3
          text-gray-50
        "
      >
        Find a chiropractor near you to manage pain, prevent injury, and start living again
      </p>
    </div>
  </section>

  <!--start of Cards section-->
  <section
    id="benefit"
    class="
      custom_bg-pattern
      relative
      md:flex md:flex-row
      flex-wrap
      justify-center
      items-center
      py-12
      z-10
      shadow-inner
      bg-gray-200
    "
  >
    <!-- Card -->
    <div
      class="
        mx-12
        md:mx-4
        md:mb-8
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
        Chiropractic care has helped countless people manage pain and improve their general health.
        It is typically less invasive and less expensive than other forms of treatment.
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
          width="19"
          height="27"
          viewBox="0 0 19 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6667 2.66667H8L6.66667 0H12L10.6667 2.66667ZM18.6667 14.6667V26.6667H0V14.6667C0 10.9867 2.98667 8 6.66667 8V5.33333H5.33333V4H13.3333V5.33333H12V8C15.68 8 18.6667 10.9867 18.6667 14.6667ZM16 14.6667C16 12.4667 14.2 10.6667 12 10.6667H6.66667C4.46667 10.6667 2.66667 12.4667 2.66667 14.6667V24H16V14.6667ZM13.3333 18.6667H10.6667V21.3333H8V18.6667H5.33333V16H8V13.3333H10.6667V16H13.3333V18.6667Z"
          />
        </svg>
        <h2 class="font-semibold text-lg lg:text-xl">
          Chiropractic Care
        </h2>
      </div>
    </div>

    <!-- Card -->
    <div
      class="
        mx-12
        md:mx-4
        md:mb-8
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
        Spinal adjustments are the most common form of treatment utilized in chiropractic care.
        A variety of techniques can help you on your way to a life with less pain and more freedom.
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.3333 2.66667V21.3333H2.66667V2.66667H21.3333ZM21.3333 0H2.66667C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.8133 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8133 24 21.3333V2.66667C24 1.18667 22.8133 0 21.3333 0ZM12 4C12.7333 4 13.3333 4.6 13.3333 5.33333V6.66667H17.56C17.8 7.08 18 7.53333 18.2133 8H13.3333V9.33333H18.6667C18.8 9.77333 18.8933 10.2267 18.92 10.6667H13.3333V12H18.9333C18.88 12.4667 18.8667 12.92 18.8 13.3333H13.3333V14.6667H18.6667C18.6667 14.6667 18.5867 18.6667 16.6667 18.6667C14.8667 18.6667 15.3333 16.6267 13.3333 16V18.6667C13.3333 19.4 12.7333 20 12 20C11.2667 20 10.6667 19.4 10.6667 18.6667V16C8.66667 16.6267 9.13333 18.6667 7.33333 18.6667C5.41333 18.6667 5.33333 14.6667 5.33333 14.6667H10.6667V13.3333H5.2C5.13333 12.92 5.12 12.4667 5.06667 12H10.6667V10.6667H5.08C5.10667 10.2267 5.21333 9.77333 5.33333 9.33333H10.6667V8H5.78667C6 7.53333 6.2 7.08 6.44 6.66667H10.6667V5.33333C10.6667 4.6 11.2667 4 12 4Z"
          />
        </svg>
        <h2 class="font-semibold text-lg lg:text-xl">
          Spinal Manipulation
        </h2>
      </div>
    </div>

    <!-- Card -->
    <div
      class="
        mx-12
        md:mx-4
        md:mb-8
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
        Treatment by a licensed professional can both help heal current injuries and prevent future ones.
        Athletes and office workers alike can experience the benefits of chiropractic care.
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
          width="18"
          height="27"
          viewBox="0 0 18 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.3333 13.6533V26.6667H16.08V13.6533C16.08 13.4533 16 13.3333 15.9067 13.1867C15.8536 13.1306 15.7895 13.0862 15.7183 13.0564C15.6471 13.0265 15.5705 13.0119 15.4933 13.0133C15.4078 13.008 15.322 13.0207 15.2416 13.0505C15.1612 13.0804 15.088 13.1268 15.0267 13.1867C14.9067 13.3333 14.8533 13.4667 14.8533 13.6533V14.88H13.64V14C12.7067 13.7733 11.8667 13.3867 11.1333 12.84C10.4 12.2933 9.78667 11.6533 9.28 10.92L8.81333 12.52C8.66667 13.08 8.66667 13.6533 8.66667 14.24V15.1067L11.1333 18.5867V26.6667H8.66667V20.4533L6.42667 17.3333L6.2 21.6667L2.48 26.6667L0.506667 25.16L3.69333 20.8533V14.24C3.69333 13.5333 3.76 12.84 3.88 12.1467L4.33333 10.0533L2.48 11.0933V15.5067H0V9.64L6.66667 5.86667C7.05333 5.68 7.45333 5.57333 7.88 5.57333C8.30667 5.57333 8.72 5.69333 9.10667 5.92C9.53333 6.16 9.85333 6.50667 10.0933 6.97333L11.08 9.06667C11.4667 9.84 12.0533 10.4933 12.8533 11.0133C13.64 11.5333 14.52 11.8 15.4933 11.8C16 11.8 16.4267 12 16.8 12.32C17.1733 12.6667 17.3333 13.1067 17.3333 13.6533ZM9.33333 0C10.0406 0 10.7189 0.280951 11.219 0.781048C11.719 1.28115 12 1.95942 12 2.66667C12 4.14667 10.8133 5.33333 9.33333 5.33333C8.62609 5.33333 7.94781 5.05238 7.44772 4.55229C6.94762 4.05219 6.66667 3.37391 6.66667 2.66667C6.66667 1.95942 6.94762 1.28115 7.44772 0.781048C7.94781 0.280951 8.62609 0 9.33333 0Z"
          />
        </svg>
        <h2 class="font-semibold text-lg lg:text-xl">
          Injury Prevention
        </h2>
      </div>
    </div>
  </section>

  <section
    class="pt-16 lg:py-36 -mt-8 mx-6 md:mx-32 lg:mx-auto max-w-screen-xl"
  >
    <div>
      <div class="flex flex-col lg:mx-8 lg:flex-row mb-20 lg:mb-0">
        <div class="w-full mt-8 lg:mt-0">
          <svg
            class="fill-current h-10 w-10 text-gray-600"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6667 9.33333C16.0812 9.33333 17.4377 9.89524 18.4379 10.8954C19.4381 11.8956 20 13.2522 20 14.6667C20 16.0812 19.4381 17.4377 18.4379 18.4379C17.4377 19.4381 16.0812 20 14.6667 20C13.2522 20 11.8956 19.4381 10.8954 18.4379C9.89524 17.4377 9.33333 16.0812 9.33333 14.6667C9.33333 13.2522 9.89524 11.8956 10.8954 10.8954C11.8956 9.89524 13.2522 9.33333 14.6667 9.33333ZM2.73333 16H0V13.3333H2.73333C3.33333 7.77333 7.77333 3.33333 13.3333 2.73333V0H16V2.73333C21.56 3.33333 26 7.77333 26.6 13.3333H29.3333V16H26.6C26 21.56 21.56 26 16 26.6V29.3333H13.3333V26.6C7.77333 26 3.33333 21.56 2.73333 16ZM14.6667 5.33333C12.1913 5.33333 9.81734 6.31666 8.067 8.067C6.31666 9.81734 5.33333 12.1913 5.33333 14.6667C5.33333 17.142 6.31666 19.516 8.067 21.2663C9.81734 23.0167 12.1913 24 14.6667 24C17.142 24 19.516 23.0167 21.2663 21.2663C23.0167 19.516 24 17.142 24 14.6667C24 12.1913 23.0167 9.81734 21.2663 8.067C19.516 6.31666 17.142 5.33333 14.6667 5.33333Z"
            />
          </svg>
          <h2 class="mt-4 mb-10 font-bold text-4xl text-gray-700">
            The Right Location
          </h2>
          <p class="text-gray-600 leading-loose mb-6">
            This online directory features a plethora of licensed chiropractic practices spread all over the Des Moines metro area.
            No matter where you live in Central Iowa, the right local practice is not too far away and ready to offer treatment.
          </p>
          <svg
            class="fill-current h-10 w-10 text-gray-600"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6667 9.33333C16.0812 9.33333 17.4377 9.89524 18.4379 10.8954C19.4381 11.8956 20 13.2522 20 14.6667C20 16.0812 19.4381 17.4377 18.4379 18.4379C17.4377 19.4381 16.0812 20 14.6667 20C13.2522 20 11.8956 19.4381 10.8954 18.4379C9.89524 17.4377 9.33333 16.0812 9.33333 14.6667C9.33333 13.2522 9.89524 11.8956 10.8954 10.8954C11.8956 9.89524 13.2522 9.33333 14.6667 9.33333ZM2.73333 16H0V13.3333H2.73333C3.33333 7.77333 7.77333 3.33333 13.3333 2.73333V0H16V2.73333C21.56 3.33333 26 7.77333 26.6 13.3333H29.3333V16H26.6C26 21.56 21.56 26 16 26.6V29.3333H13.3333V26.6C7.77333 26 3.33333 21.56 2.73333 16ZM14.6667 5.33333C12.1913 5.33333 9.81734 6.31666 8.067 8.067C6.31666 9.81734 5.33333 12.1913 5.33333 14.6667C5.33333 17.142 6.31666 19.516 8.067 21.2663C9.81734 23.0167 12.1913 24 14.6667 24C17.142 24 19.516 23.0167 21.2663 21.2663C23.0167 19.516 24 17.142 24 14.6667C24 12.1913 23.0167 9.81734 21.2663 8.067C19.516 6.31666 17.142 5.33333 14.6667 5.33333Z"
            />
          </svg>
          <h2 class="mt-4 mb-10 font-bold text-4xl text-gray-700">
            The Right Chiropractor
          </h2>
          <p class="text-gray-600 leading-loose mb-6">
            With so many options in the Des Moines metro area, it will not be difficult to find the right chiropractor for you and your needs.
            Just take a look through our directory to find the professional and the treatment that is right for you.
          </p>
        </div>
        <div class="relative w-full pb-96 overflow-hidden lg:pb-0 lg:ml-44">
          <img
            class="absolute w-full h-full object-cover"
            src="../assets/people.jpg"
            alt="A row of happy chiropractors."
          />
        </div>
      </div>
    </div>
  </section>

  <!-- View Directory -->
  <section
    class="
      chiropractor_select
      relative
      h-full
      py-24
      lg:h-96
      flex flex-col
      items-center
      justify-center
      shadow-inner
      bg-fixed
    "
  >
    <!-- Dark Overlay -->
    <div class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-80 z-10">
    </div>
    <div class="relative z-20">
      <h2
        class="
          text-center
          mb-4
          mx-4
          lg:mx-0
          font-semibold
          text-5xl text-gray-50
        "
      >
        Search the Directory
      </h2>
      <p
        class="text-xl text-center mx-4 lg:mx-auto mb-12 text-gray-100"
      >
        Looking for a chiropractor in your area?
        <br/>
        Start browsing the directory now to find what professionals are nearby!
      </p>
      <div class="flex flex-wrap gap-8 justify-center">
        <router-link
          :to="{ name: 'directory' }"
          class="
            border-2
            shadow-sm
            px-4
            py-2
            uppercase
            font-medium
            transition-colors
            duration-300
            text-lg text-black
            border-gray-100
            bg-gray-200
            hover:bg-gray-700 hover:text-gray-100 hover:shadow-md
          "
          href="/chiropractors-camps-bay.html"
        >
          View the Directory
        </router-link>
      </div>
    </div>
  </section>

  <!-- start of Blog Article section -->
  <section
    class="
      relative
      px-4
      shadow-inner
      sm:px-8
      lg:px-16
      xl:px-40
      2xl:px-64
      py-12
      md:py-32
      bg-gray-100
    "
  >
    <div class="relative z-20">
      <h2
        class="
          text-center
          mb-4
          mx-4
          lg:mx-0
          font-semibold
          text-5xl text-gray-700
        "
      >
        List Your Business
      </h2>
      <p class="text-xl text-center mx-4 lg:mx-auto lg:w-2/3 mb-12 text-gray-900">
        Are you a chiropractor in the Des Moines metro area?
        <br/>
        Get more clients through the door by getting listed in our directory!
      </p>
      <div class="flex flex-wrap gap-8 justify-center">
        <router-link
          :to="{ name: 'apply' }"
          class="
            border-2
            shadow-sm
            px-4
            py-2
            uppercase
            font-medium
            transition-colors
            duration-300
            text-lg
            border-gray-100
            hover:bg-gray-100
            hover:text-gray-900
            bg-gray-700 
            text-gray-100 
            hover:shadow-md
          "
          href="/chiropractors-camps-bay.html"
        >
          List Your Business
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "home",
  components: {},
  setup() {
    useMeta({ title: "DSM Chiropractors" })
  }
};
</script>