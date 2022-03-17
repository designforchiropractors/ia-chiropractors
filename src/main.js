import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue3Sanitize from "vue-3-sanitize";
import "./assets/tailwind.css";
import "./assets/normalize-and-reset.css";

const sanitizeOverrides = {
    allowedTags: [ "address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
    "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
    "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
    "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
    "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
    "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
    "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr" ],
    disallowedTagsMode: "discard",
    allowedAttributes: {
        a: [ "href", "name", "target" ],
        p: [ "class" ],
        img: [ "src", "srcset", "alt", "title", "width", "height", "loading" ],
        h1: [ "class" ],
        h2: [ "class" ],
        h3: [ "class" ],
        h4: [ "class" ],
        h5: [ "class" ],
        h6: [ "class" ],
        dl: [ "class" ],
        dt: [ "class" ],
        dd: [ "class" ],
        ul: [ "class" ],
        li: [ "class" ]
    },
};

createApp(App).use(store)
    .use(router)
    .use(createMetaManager())
    .use(Vue3Sanitize, sanitizeOverrides)
    .mount("#app");
