<template>
  <div class="flex-grow justify-center bg-white px-8 lg:px-20 py-20 lg:py-28">
    <div class="flex justify-center">
      <div>
        <h1 class="text-xl lg:text-xl font-medium mb-1 text-gray-700">
          Want to get listed? Have a question?
        </h1>
        <span class="text-sm mb-4 text-gray-400">
          Send us a message and we'll get in touch.
        </span>
        
        <form
          name="contact"
          data-netlify="true"
          autocomplete="off"
          netlify-honeypot="bot-field"
        >
          <p class="hidden">
            <label
              >Don’t fill this out if you’re human: <input name="bot-field"
            /></label>
          </p>
          <div class="input-animated">
            <input
              type="text"
              id="name"
              name="name"
              required
              pattern="\S+.*"
              placeholder="the placeholder"
            />
            <label htmlFor="name" class="label-name"
              ><span class="content-name">Name</span></label
            >
          </div>
          <div class="input-animated">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="the placeholder"
            />
            <label htmlFor="email" class="label-email">
              <span class="content-email">
                Email
              </span>
            </label>
          </div>
          <div>
            <textarea
              name="question"
              placeholder="Your Question"
              id="question"
              cols="40"
              rows="8"
              minLength="10"
              maxLength="100"
              required
            ></textarea>
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
            Send Message
          </button>
          <span
            id="success"
            class="
              hidden
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
          </span>
          <span
            id="error"
            class="
              hidden
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
          </span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
