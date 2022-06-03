<template>
  <section class="py-16 md:py-20 bg-gray-100 custom_bg-pattern">
    <div class="flex-grow justify-center bg-white px-8 lg:px-20 py-20 lg:py-28">
      <div class="flex justify-center">
        <div>
          <h2 class="text-xl lg:text-xl font-medium mb-8 text-gray-700">
            Fill us in on the details!
          </h2>
          <form
            id="application"
            name="application"
            method="post"
            data-netlify="true"
            autocomplete="off"
            netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="application" />

            <label htmlFor="application-firstName" class="application-label"
              >First Name*</label
            >
            <div>
              <input
                type="text"
                id="application-firstName"
                name="application-firstName"
                v-model="formState.firstName"
                minLength="2"
                maxLength="40"
                pattern="\S+.*"
                placeholder="First name"
                required
              />
            </div>
            <span v-if="v$.firstName.$error">
              {{ v$.firstName.$errors[0].$message }}
            </span>

            <label htmlFor="application-lastName" class="application-label"
              >Last Name*</label
            >
            <div>
              <input
                type="text"
                id="application-lastName"
                name="application-lastName"
                v-model="formState.lastName"
                minLength="2"
                maxLength="40"
                pattern="\S+.*"
                placeholder="Last name"
                required
              />
            </div>
            <span v-if="v$.lastName.$error">
              {{ v$.lastName.$errors[0].$message }}
            </span>

            <label htmlFor="application-business" class="application-label"
              >Business*</label
            >
            <div>
              <textarea
                id="application-business"
                name="application-business"
                v-model="formState.business"
                cols="40"
                rows="2"
                minLength="2"
                maxLength="80"
                pattern="\S+.*"
                placeholder="Business"
                required
              />
            </div>
            <span v-if="v$.business.$error">
              {{ v$.business.$errors[0].$message }}
            </span>

            <label htmlFor="application-email" class="application-label"
              >Contact Email</label
            >
            <div>
              <input
                type="email"
                id="application-email"
                name="application-email"
                v-model="formState.email"
                required
                placeholder="Contact email"
              />
            </div>
            <span v-if="v$.email.$error">
              {{ v$.email.$errors[0].$message }}
            </span>

            <label htmlFor="application-location" class="application-label"
              >Location</label
            >
            <div>
              <textarea
                id="application-location"
                name="application-location"
                v-model="formState.location"
                cols="40"
                rows="2"
                minLength="2"
                maxLength="80"
                pattern="\S+.*"
                placeholder="Location"
              />
            </div>
            <span v-if="v$.location.$error">
              {{ v$.location.$errors[0].$message }}
            </span>

            <label htmlFor="application-experience" class="application-label"
              >Experience in Years</label
            >
            <div>
              <input
                type="number"
                id="application-experience"
                name="application-experience"
                v-model="formState.experience"
                maxLength="2"
                numeric
                placeholder="Experience in years"
              />
            </div>
            <span v-if="v$.experience.$error">
              {{ v$.experience.$errors[0].$message }}
            </span>

            <label htmlFor="application-patientFocus" class="application-label"
              >Patient Focus</label
            >
            <div>
              <textarea
                name="application-patientFocus"
                id="application-patientFocus"
                cols="40"
                rows="2"
                minLength="2"
                maxLength="80"
                v-model="formState.patientFocus"
                placeholder="Patient Focus"
              ></textarea>
            </div>
            <span v-if="v$.patientFocus.$error">
              {{ v$.patientFocus.$errors[0].$message }}
            </span>

            <label htmlFor="application-service1" class="application-label"
              >Services (up to 3)</label
            >
            <div>
              <textarea
                name="application-service1"
                id="application-service1"
                cols="40"
                rows="2"
                minLength="2"
                maxLength="80"
                v-model="formState.service1"
                placeholder="Service #1"
              ></textarea>
            </div>
            <span v-if="v$.service1.$error">
              {{ v$.service1.$errors[0].$message }}
            </span>
            <div>
              <textarea
                name="application-service2"
                id="application-service2"
                cols="40"
                rows="2"
                minLength="2"
                maxLength="80"
                v-model="formState.service2"
                placeholder="Service #2"
              ></textarea>
            </div>
            <span v-if="v$.service3.$error">
              {{ v$.service3.$errors[0].$message }}
            </span>
            <div>
              <textarea
                name="application-service3"
                id="application-service3"
                cols="40"
                rows="2"
                minLength="2"
                maxLength="80"
                v-model="formState.service3"
                placeholder="Service #3"
              ></textarea>
            </div>
            <span v-if="v$.service3.$error">
              {{ v$.service3.$errors[0].$message }}
            </span>

            <label htmlFor="application-website" class="application-label"
              >Website URL</label
            >
            <div>
              <textarea
                name="application-website"
                id="application-website"
                cols="40"
                rows="2"
                minLength="5"
                maxLength="80"
                url
                v-model="formState.website"
                placeholder="Website URL"
              ></textarea>
            </div>
            <span v-if="v$.website.$error">
              {{ v$.website.$errors[0].$message }}
            </span>

            <label htmlFor="application-education" class="application-label"
              >Education</label
            >
            <div>
              <textarea
                name="application-education"
                id="application-education"
                cols="40"
                rows="5"
                minLength="10"
                maxLength="500"
                v-model="formState.education"
                placeholder="Education"
              ></textarea>
            </div>
            <span v-if="v$.education.$error">
              {{ v$.education.$errors[0].$message }}
            </span>

            <label
              htmlFor="application-specialization"
              class="application-label"
              >Specialization</label
            >
            <div>
              <textarea
                name="application-specialization"
                id="application-specialization"
                cols="40"
                rows="5"
                minLength="10"
                maxLength="500"
                v-model="formState.specialization"
                placeholder="Specialization"
              ></textarea>
            </div>
            <span v-if="v$.specialization.$error">
              {{ v$.specialization.$errors[0].$message }}
            </span>

            <label htmlFor="application-about" class="application-label"
              >About</label
            >
            <div>
              <textarea
                name="application-about"
                id="application-about"
                cols="40"
                rows="5"
                minLength="10"
                maxLength="500"
                v-model="formState.about"
                placeholder="About"
              ></textarea>
            </div>
            <span v-if="v$.about.$error">
              {{ v$.about.$errors[0].$message }}
            </span>

            <label htmlFor="application-extras" class="application-label"
              >Extras</label
            >
            <div>
              <textarea
                name="application-extras"
                id="application-extras"
                cols="40"
                rows="5"
                minLength="10"
                maxLength="500"
                v-model="formState.extras"
                placeholder="Extras"
              ></textarea>
            </div>
            <span v-if="v$.extras.$error">
              {{ v$.extras.$errors[0].$message }}
            </span>

            <label htmlFor="application-picture" class="application-label"
              >Picture</label
            >
            <div>
              <input
                type="file"
                name="application-picture"
                id="application-picture"
                placeholder="Picture"
                accept=".png,.jpg,.svg"
              />
            </div>

            <button
              type="submit"
              id="submit-button"
              class="
                w-full
                font-semibold
                uppercase
                text-center
                px-5
                py-3
                shadow-md
                my-4
                lg:mb-0
                focus:ring-4 focus:ring-blue-300
                text-gray-50
                bg-green-700
                transition-colors
                duration-300
                hover:shadow-md hover:bg-gray-100 hover:text-green-700
              "
            >
              Submit
            </button>
            <div
              id="success"
              v-show="showSuccess"
              class="
                absolute
                mt-2
                px-4
                py-2
                font-medium
                border
                rounded-sm
                border-green-500
                bg-green-100
                text-green-600
              "
            >
              Thanks! We'll be in touch soon.
            </div>
            <div
              id="error"
              v-show="showError"
              class="
                absolute
                mt-2
                px-4
                py-2
                font-medium
                border
                rounded-sm
                border-red-500
                bg-red-100
                text-red-600
              "
            >
              Whoops... Something went wrong.
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import { useStore } from "vuex";

import { ref, reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import {
  between,
  email,
  maxLength,
  minLength,
  numeric,
  required,
  url,
} from "@vuelidate/validators";

export default {
  name: "application-form",
  components: {},
  setup() {
    const store = useStore();

    const metaTitle = "Application to Be Listed on DSM Chiropractors";
    const metaDescription =
      "Application to Be Listed on DSM Chiropractors. Complete this form to provide the details of your customized listing.";
    const metaUrl = "https://www.dsmchiropractors.com/application-form/";

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

    let showError = ref(false);
    let showSuccess = ref(false);

    const formState = reactive({
      firstName: "",
      lastName: "",
      business: "",
      email: "",
      location: "",
      experience: "",
      patientFocus: "",
      service1: "",
      service2: "",
      service3: "",
      website: "",
      education: "",
      specialization: "",
      about: "",
      extras: "",
      picture: null
    });

    const rules = computed(() => {
      return {
        firstName: {
          maxLength: maxLength(40),
          minLength: minLength(2),
          required,
        },
        lastName: {
          maxLength: maxLength(40),
          minLength: minLength(2),
          required,
        },
        business: {
          maxLength: maxLength(80),
          minLength: minLength(2),
          required,
        },
        email: {
          email,
          required,
        },
        location: { maxLength: maxLength(80), minLength: minLength(2) },
        experience: {
          between: between(0, 99),
          numeric,
        },
        patientFocus: {
          maxLength: maxLength(80),
          minLength: minLength(2),
        },
        service1: {
          maxLength: maxLength(80),
          minLength: minLength(2),
        },
        service2: {
          maxLength: maxLength(80),
          minLength: minLength(2),
        },
        service3: {
          maxLength: maxLength(80),
          minLength: minLength(2),
        },
        website: {
          maxLength: maxLength(80),
          minLength: minLength(2),
          url,
        },
        education: {
          maxLength: maxLength(500),
          minLength: minLength(10),
        },
        specialization: {
          maxLength: maxLength(500),
          minLength: minLength(10),
        },
        about: {
          maxLength: maxLength(500),
          minLength: minLength(10),
        },
        extras: {
          maxLength: maxLength(500),
          minLength: minLength(10),
        }
      };
    });

    const v$ = useValidate(rules, formState);

    const handleErrors = (response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = document.getElementById("application");
      const formData = new FormData(form);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(handleErrors)
        .then(() => {
          showSuccess.value = true;
        })
        .catch((error) => {
          showError.value = true;
          console.log(error);
        });
    };

    return {
      showError,
      showSuccess,
      formState,
      v$,
      handleSubmit,
    };
  },
};
</script>