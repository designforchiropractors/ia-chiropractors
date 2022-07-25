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
      text-center
    "
  >
    <h1
      class="mb-6 text-3xl lg:text-4xl font-bold text-gray-900 text-center"
    >
      Choose Your Plan
    </h1>

    <div class="md:flex md:flex-row
      flex-wrap justify-evenly py-6">
      <div class="p-4 mt-half">
        <h2
          class="
            pb-8
            text-xl
            lg:text-2xl
            font-semibold
            text-center
            tracking-wide
            text-deeper-red
          "
        >
          Monthly Plan ($17.99/mo)
        </h2>
        <h3
          class="
            pb-8
            text-,d
            lg:text-lg
            font-semibold
            text-center
            tracking-wide
          "
        >
          Normally <span class="line-through">$29.99/mo</span>
        </h3>
        <dl
          class="
            space-y-10
            md:text-left
            text-center
            md:space-y-0 md:grid md:grid-cols-1 md:gap-x-16 md:gap-y-0
          "
        >
          <subscription-benefit-component
            :text="'SAVE 40% vs. regular monthly rate'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Appear in our directory'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Customized listing page'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Auto-renew at SPECIAL monthly rate'"
          ></subscription-benefit-component>
        </dl>

        <div class="flex flex-wrap gap-8 justify-center mt-2">
          <a
            :href="monthlyUrl"
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
              hover:bg-ankeny-gold hover:text-gray-100 hover:shadow-md
            "
          >
            Subscribe Monthly
          </a>
        </div>
      </div>

      <div class="mt-12 md:mt-0 p-4 border-solid border-2 border-deep-red">
        <h2
          class="
            pb-8
            text-xl
            lg:text-2xl
            font-semibold
            text-center
            tracking-wide
            text-deeper-red
          "
        >
          Annual Plan ($149.99/yr)
        </h2>
        <h3
          class="
            pb-8
            text-,d
            lg:text-lg
            font-semibold
            text-center
            tracking-wide
          "
        >
          Normally <span class="line-through">$299.99/yr</span>
        </h3>
        <dl
          class="
            space-y-10
            md:text-center
            text-left
            md:space-y-0 md:grid md:grid-cols-1 md:gap-x-16 md:gap-y-0
          "
        >
          <subscription-benefit-component
            :text="'SAVE 58% vs. regular monthly rate'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Appear in our directory'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Customized listing page'"
          ></subscription-benefit-component>
          <subscription-benefit-component
            :text="'Auto-renew at SPECIAL annual rate'"
          ></subscription-benefit-component>
        </dl>

        <div class="flex flex-wrap gap-8 justify-center mt-2">
          <a
            :href="annualUrl"
            class="
              border-2
              shadow-sm
              px-4
              py-2
              uppercase
              font-medium
              transition-colors
              duration-300
              text-lg text-gray-100
              border-gray-100
              bg-shallow-red
              hover:bg-ankeny-gold hover:shadow-md
            "
          >
            Subscribe Annually
          </a>
        </div>
      </div>
    </div>
    <div class="text-sm my-6 text-gray-400">
        After completing your subscription, we will get in contact with you within 48 hours to finalize all the details of your custom listing before publishing it in our directory. Your payment will be processed by Stripe and paid to Design for Chiropractors LLC, the owner and operator of this directory. 
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
  setup() {      
      const isTest = process.env.NODE_ENV === 'development';
      const monthlyUrl = isTest ? "https://buy.stripe.com/test_fZedUl2bMcTHeFW4go" : "https://buy.stripe.com/00geW193qb3j5t63cj";
      const annualUrl = isTest ? "https://buy.stripe.com/test_9AQ2bDeYy6vj8hy8wD" : "https://buy.stripe.com/7sI5lr5Re3ARdZC5kq";
      return { monthlyUrl, annualUrl }
  },
};
</script>