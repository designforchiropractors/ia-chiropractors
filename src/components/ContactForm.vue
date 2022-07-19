<template>
  <div class="flex-grow justify-center bg-white px-8 lg:px-20 py-20 lg:py-28">
    <div class="flex justify-center">
      <div>
        <h2 class="text-xl lg:text-xl font-medium mb-1 text-gray-700">
          Want to get listed? Have a question?
        </h2>
        <span class="text-sm mb-4 text-gray-400">
          Send us a message and we'll get in touch.
        </span>

        <form
          id="contact"
          name="contact"
          method="post"
          data-netlify="true"
          autocomplete="off"
          netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div class="input-animated">
            <input
              type="text"
              id="contact-name"
              name="contact-name"
              v-model="formState.name"
              required
              minLength="2"
              maxLength="50"
              pattern="\S+.*"
              placeholder="the placeholder"
            />
            <label htmlFor="contact-name" class="label-name"
              ><span class="content-name">Name</span></label
            >
          </div>
          <span v-if="v$.name.$error">
            {{ v$.name.$errors[0].$message }}
          </span>

          <div class="input-animated">
            <input
              type="email"
              id="contact-email"
              name="contact-email"
              v-model="formState.email"
              required
              placeholder="the placeholder"
            />
            <label htmlFor="contact-email" class="label-email">
              <span class="content-email"> Email </span>
            </label>
          </div>
          <span v-if="v$.email.$error">
            {{ v$.email.$errors[0].$message }}
          </span>

          <div>
            <textarea
              name="contact-question"
              placeholder="Your Question"
              id="contact-question"
              cols="40"
              rows="8"
              minLength="10"
              maxLength="100"
              v-model="formState.question"
              required
            ></textarea>
          </div>
          <span v-if="v$.question.$error">
            {{ v$.question.$errors[0].$message }}
          </span>

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
              bg-deep-red
              transition-colors
              duration-300
              hover:shadow-md hover:bg-gray-100 hover:text-deep-red
            "
          >
            Send Message
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
</template>

<script>
import { ref, reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

export default {
  setup() {
    let showError = ref(false);
    let showSuccess = ref(false);

    const formState = reactive({
          name: '',
          email: '',
          question: '',
    });

    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(2), maxLength: maxLength(50) },
        email: { required, email },
        question: {
          required,
          minLength: minLength(10),
          maxLength: maxLength(250),
        },
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
      const form = document.getElementById("contact");
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
