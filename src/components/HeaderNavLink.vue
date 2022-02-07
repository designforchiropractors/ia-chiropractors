<template>
    <router-link
        :to="{ name: '' + navLink.link + '' }"
        class="
            w-mc
            transition-colors
            duration-300
            hover:text-white hover:bg-gray-700
            p-4
        "
        >
        {{ navLink.text }}
    </router-link>
</template>

<script>
export default {
    name: "headerNavLink",
    props: {
        navLink: Object,
    },
    setup() {},
}
</script>
