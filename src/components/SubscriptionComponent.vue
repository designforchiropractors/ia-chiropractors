<template>
  <div
    class="
      shadow-inner
      px-6
      md:px-10
      lg:px-20
      py-8
      md:py-12
      lg:py-16
      w-full
      mt-20
      bg-white
      mb-12
    "
  >
    <h1
      class="mb-6 text-3xl lg:text-4xl font-bold text-gray-900 text-center"
    >
      Choose Your Plan
    </h1>

    <div class="flex justify-evenly py-6">
      <div>
        <h2
          class="
            pb-8
            text-xl
            lg:text-2xl
            font-semibold
            text-center
            tracking-wide
            text-gray-900
          "
        >
          Monthly Plan
        </h2>
        <dl
          class="
            space-y-10
            md:space-y-0 md:grid md:grid-cols-1 md:gap-x-16 md:gap-y-0
          "
        >
          <subscription-benefit-component
            :text="'Appear in our directory'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Custom listing page'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Billed monthly at $29.99'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Cancel at any time'"
          ></subscription-benefit-component>
        </dl>

        <div class="flex flex-wrap gap-8 justify-center mt-14">
          <a
            href="https://buy.stripe.com/test_dR6g2t2bMaLz2Xe7ss"
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
          >
            Subscribe Monthly
          </a>
        </div>
      </div>
      <div>
        <h2
          class="
            pb-8
            text-xl
            lg:text-2xl
            font-semibold
            text-center
            tracking-wide
            text-gray-900
          "
        >
          Annual Plan
        </h2>
        <dl
          class="
            space-y-10
            md:space-y-0 md:grid md:grid-cols-1 md:gap-x-16 md:gap-y-0
          "
        >
          <subscription-benefit-component
            :text="'SAVE over 15% vs. monthly plan'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Appear in our directory'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Custom listing page'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Billed annually at $299.99'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Cancel at any time'"
          ></subscription-benefit-component>
        </dl>

        <div class="flex flex-wrap gap-8 justify-center mt-2">
          <a
            href="https://buy.stripe.com/test_4gw17zdUu4nbapG001"
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
          >
            Subscribe Annually
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubscriptionBenefitComponent from "@/components/SubscriptionBenefitComponent.vue";

export default {
  name: "SubscriptionComponent",
  components: {
    SubscriptionBenefitComponent,
  },
  setup() {},
};
</script>