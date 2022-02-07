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
    useMeta({ title: "Contact: DSM Chiropractors" });
  },
};
</script>
