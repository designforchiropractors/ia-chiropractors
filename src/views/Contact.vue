<template>
  <section class="custom_bg-pattern pb-32">
    <h1
      class="
        font-bold
        text-xl
        md:text-2xl
        text-center
        pt-12
        pb-8
        md:pt-16 md:pb-12
        text-gray-700
      "
    >
      Contact DSM Chiropractors
    </h1>

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
        { property: "og:title",  content: metaTitle },
        { property: "og:description",  content: metaDescription },
        { property: "og:type",  content: "website" },
        { property: "og:url",  content: metaUrl },
        { property: "og:image",  content: metaImage },
        { property: "twitter:title",  content: metaTitle },
        { property: "twitter:card",  content: "summary" },
        { property: "twitter:description",  content: metaDescription },
        { property: "twitter:image",  content: metaImage },
      ]
     });
  },
};
</script>
