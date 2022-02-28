<template>
  <section class="custom_bg-pattern pb-32">
    <div class="lg:text-center py-8 md:py-12 lg:py-16">
        <h1 class="text-base text-green-700 font-semibold tracking-wide uppercase">
          Contact DSM Chiropractors
        </h1>
        <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in contact with us
        </h2>
        <h3 class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            Inquire about our services by phone, e-mail, or contact form and we'll get back to you.
            Get your business listed and turn casual browsers into paying clients.
        </h3>
    </div>

    <div class="w-full lg:flex">
      <div
        class="
          relative
          flex-grow
          justify-center
          px-8
          lg:px-20
          flex
          items-center
          py-20
          lg:py-28
        "
      >
        <contact-info></contact-info>
      </div>
      <contact-form></contact-form>
    </div>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactForm from "@/components/ContactForm.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  name: "contact",
  components: {
    ContactForm,
    ContactInfo
  },
  setup() {
    const metaTitle = "Contact DSM Chiropractors"
    const metaDescription = "Contact DSM Chiropractors. Inquire about our services by phone, e-mail, or contact form. Get your business listed and turn casual browsers into paying clients."
    const metaImage = "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp"
    const metaUrl = "https://www.dsmchiropractors.com/contact/"
    
    useMeta({
      title: metaTitle,
      description: metaDescription,
      link: [
        { rel: "canonical", href: metaUrl },
      ],
      meta: [
        { property: "og:title", vmid: "og:title", content: metaTitle },
        { property: "og:description", vmid: "og:description", content: metaDescription },
        { property: "og:type", vmid: "og:type", content: "website" },
        { property: "og:url", vmid: "og:url", content: metaUrl },
        { property: "og:image", vmid: "og:image",content: metaImage },
        { property: "twitter:title", vmid: "twitter:title",content: metaTitle },
        { property: "twitter:card", vmid: "twitter:card",content: "summary" },
        { property: "twitter:description", vmid: "twitter:description", content: metaDescription },
        { property: "twitter:image", vmid: "twitter:image", content: metaImage },
      ]
     });
  },
};
</script>
