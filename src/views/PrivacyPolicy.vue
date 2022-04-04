<template>
  <!-- Start of Privacy Policy text-->
  <section class="pt-24 pb-40 lg:pt-28 lg:pb-40 flex justify-center">
    <article class="max-w-screen-xl lg:mx-8">
      <div class="inline-block p-3 lg:p-4 rounded-full mb-1 ml-5 bg-green-700">
        <svg
          class="h-8 w-8"
          width="24"
          height="30"
          viewBox="0 0 24 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3.25333L21.3333 7.4V13.6667C21.3333 19.6933 17.36 25.2533 12 26.9067C6.64 25.2533 2.66667 19.6933 2.66667 13.6667V7.4L12 3.25333ZM12 0.333328L0 5.66666V13.6667C0 21.0667 5.12 27.9867 12 29.6667C18.88 27.9867 24 21.0667 24 13.6667V5.66666L12 0.333328ZM10.6667 8.33333H13.3333V11H10.6667V8.33333ZM10.6667 13.6667H13.3333V21.6667H10.6667V13.6667Z"
            fill="white"
          />
        </svg>
      </div>
      <h1 class="text-3xl lg:text-4xl mx-4 lg:mx-0 font-semibold text-gray-700">
        Privacy Policy
      </h1>
      <!-- Privacy Policy Text -->
      <div class="max-w-prose mx-6 lg:mx-auto text-gray-600 mt-12">
        <p class="mb-4 leading-relaxed">
          The following Privacy Policy governs the online information collection
          practices of www.dsmchiropractors.com (“we” or “us” or “Site”). By
          visiting and using the Site, you agree that your use of our Site, and
          any dispute over privacy, is governed by this Privacy Policy. This
          Site strives to offer its visitors the many advantages of Internet
          technology and to provide an interactive and personalized experience.
          We may use Personally Identifiable Information (your name and/or
          e-mail address) subject to the terms of this privacy policy. We will
          never sell, barter, or rent your email address to any unauthorized
          third party.
        </p>

        <p class="mb-4 leading-relaxed">
          We may collect and store personal or other information that you
          voluntarily supply to us online while using the Site (e.g., while on
          the Site or in responding via email to a feature provided on the
          Site). This Site only contacts individuals who specifically request
          that we do so or in the event that they have signed up to receive our
          free newsletters or have purchased one of our products. This Site
          collects personally identifying information from our users during
          online registration and online purchasing. All of this information is
          provided to us by you.
        </p>

        <p class="mb-4 leading-relaxed">
          We also collect and store information that is generated automatically
          as you navigate online through the Site. For example, we may collect
          information about your computer’s connection to the Internet, which
          allows us, among other things, to improve the delivery of our web
          pages to you and to measure traffic on the Site. We also may use a
          standard feature found in browser software called a “cookie” to
          enhance your experience with the Site. Cookies are small files that
          your web browser places on your hard drive for record-keeping
          purposes. By showing how and when visitors use the Site, cookies help
          us deliver advertisements, identify how many unique users visit us,
          and track user trends and patterns.
        </p>

        <p class="mb-4 leading-relaxed">
          The Site also includes links to websites we endorse or sponsor and
          provides access to products and services offered by third parties,
          whose privacy policies we do not control. Some of the links we provide
          are “affiliate links.” This means if you click on the link and
          purchase the item connected to that link, we will receive an affiliate
          commission. When you access another website or purchase third-party
          products or services through the Site, use of any information you
          provide is governed by the privacy policy of the operator of the site
          you are visiting or the provider of such products or services.
        </p>

        <p class="mb-4 leading-relaxed">
          We may also make some content, products and services available through
          our Site through cooperative relationships with third-party providers,
          where the brands of our provider partner appear on the Site in
          connection with such content, products and/or services. We may share
          with our provider partner any information you provide, or that is
          collected, in the course of visiting any pages that are made available
          in cooperation with our provider partner. In some cases, the provider
          partner may collect information from you directly, in which cases the
          privacy policy of our provider partner may apply to the provider
          partner’s use of your information. The privacy policy of our provider
          partners may differ from ours. If you have any questions regarding the
          privacy policy of one of our provider partners, you should contact the
          provider partner directly for more information.
        </p>

        <p class="mb-4 leading-relaxed">
          Your information is stored at the list server that delivers this
          Site’s newsletters. Your information can only be accessed by those who
          help manage those lists in order to deliver e-mail to those who would
          like to receive this Site’s newsletters. All of the newsletters or
          emails that are sent to you by this Site include an unsubscribe link
          in them. You can remove yourself at any time from our newsletters or
          mailing list by clicking on the unsubscribe link that can be found in
          every communication that we send you.
        </p>
      </div>
    </article>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import { useStore } from "vuex";

export default {
  name: "privacy-policy",
  components: {},
  setup() {
    const store = useStore();

    const metaTitle = "Privacy Policy for Des Moines Chiropractors";
    const metaDescription =
      "The Privacy Policy that governs online information collection practices for visiting DSM Chiropractors.";
    const metaUrl = "https://www.dsmchiropractors.com/privacy-policy/";

    useMeta({
      title: metaTitle,
      description: metaDescription,
      link: [{ rel: "canonical", href: metaUrl }],
      meta: [
        { property: "og:title", vmid: "og:title", content: metaTitle },
        {
          property: "og:description",
          vmid: "og:description",
          content: metaDescription,
        },
        { property: "og:type", vmid: "og:type", content: "website" },
        { property: "og:url", vmid: "og:url", content: metaUrl },
        {
          property: "og:image",
          vmid: "og:image",
          content: store.state.metaLogoImage,
        },
        {
          property: "twitter:title",
          vmid: "twitter:title",
          content: metaTitle,
        },
        { property: "twitter:card", vmid: "twitter:card", content: "summary" },
        {
          property: "twitter:description",
          vmid: "twitter:description",
          content: metaDescription,
        },
        {
          property: "twitter:image",
          vmid: "twitter:image",
          content: store.state.metaLogoImage,
        },
      ],
    });
  },
};
</script>
