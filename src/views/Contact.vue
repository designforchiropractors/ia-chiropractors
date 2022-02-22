<template>
  <div class="w-full lg:flex custom_bg-pattern">
    <contact-form></contact-form>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "contact",
  components: {
    ContactForm
  },
  setup() {
    useMeta({
      title: "Contact: DSM Chiropractors",
      description: "Contact DSM Chiropractors. Inquire about our services through phone, e-mail, or contact form.",
      link: [
        { rel: "canonical", href: "https://www.dsmchiropractors.com/contact" },
      ],
      meta: [
        { property: "og:title",  content: "Contact DSM Chiropractors" },
        { property: "og:description",  content: "Contact DSM Chiropractors. Inquire about our services through phone, e-mail, or contact form." },
        { property: "og:type",  content: "website" },
        { property: "og:url",  content: "https://www.dsmchiropractors.com/contact" },
        { property: "og:image",  content: "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp" },
        { property: "twitter:title",  content: "Contact DSM Chiropractors" },
        { property: "twitter:card",  content: "summary" },
        { property: "twitter:description",  content: "Contact DSM Chiropractors. Inquire about our services through phone, e-mail, or contact form." },
        { property: "twitter:image",  content: "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp" },
      ]
     });
  },
};
</script>
