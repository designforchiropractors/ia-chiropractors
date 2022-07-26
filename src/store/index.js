import { createStore } from "vuex";

export default createStore({
  state: {
    sites: [
      {
        id: 1,
        text: 'Ankeny Chiropractors',
        link: 'https://www.ankenychiropractors.com/',
        logo: '@/assets/ankeny-chiropractors.svg',
        image: 'ankeny-chiropractors.jpg',
        description: 'Find top chiropractors located in Ankeny, Iowa to manage pain, prevent injury, and start living again',
        class: 'absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-80 duration-300 group-hover:bg-gray-900 z-10 bg-deep-red',
      },
      {
        id: 2,
        text: 'Design for Chiropractors',
        link: 'https://www.designforchiropractors.com/',
        logo: '@/assets/design-for-chiropractors.svg',
        image: 'design-for-chiropractors.jpg',
        description: 'Web design, SEO, marketing, and outreach with a focus on serving chiropractors',
        class: 'absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-80 duration-300 group-hover:bg-gray-900 z-10 bg-blue-600',
      },
      {
        id: 3,
        text: 'DSM Chiropractors',
        link: 'https://www.dsmchiropractors.com/',
        logo: '@/assets/dsm-chiropractors.svg',
        image: 'dsm-chiropractors.jpg',
        description: 'Find top chiropractors in Des Moines, Iowa to manage pain, prevent injury, and start living again',
        class: 'absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-80 duration-300 group-hover:bg-gray-900 z-10 bg-green-800',
      },
    ],
    metaLogoImage: "",
    metaCompanyLogoImage: "https://www.designforchiropractors.com/img/design-for-chiropractors.23f0efd4.jpg"
  },
  mutations: {},
  actions: {},
  modules: {},
});
