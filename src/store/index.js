import { createStore } from "vuex";

export default createStore({
  state: {
    sites: [
      {
        text: 'Ankeny Chiropractors',
        link: 'https://www.ankenychiropractors.com/',
        logo: '@/assets/ankeny-chiropractors.svg',
        image: 'ankeny-chiropractors.jpg',
        description: 'Find top chiropractors located in Ankeny, Iowa to manage pain, prevent injury, and start living again',
        class: 'absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-80 duration-300 group-hover:bg-deeper-red z-10 bg-deep-red',
      },
      {
        text: 'Council Bluffs Chiropractors',
        link: 'https://www.councilbluffschiropractors.com/',
        logo: '@/assets/council-bluffs-chiropractors.svg',
        image: 'council-bluffs-chiropractors.jpg',
        description: 'Find top chiropractors in Council Bluffs, Iowa to manage pain, prevent injury, and start living again',
        class: 'absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-80 duration-300 group-hover:bg-deep-blue z-10 bg-tealish',
      },
      {
        text: 'Design for Chiropractors',
        link: 'https://www.designforchiropractors.com/',
        logo: '@/assets/design-for-chiropractors.svg',
        image: 'design-for-chiropractors.jpg',
        description: 'Web design, SEO, marketing, and outreach with a focus on serving chiropractors',
        class: 'absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-80 duration-300 group-hover:bg-blue-800 z-10 bg-blue-600',
      },
      {
        text: 'DSM Chiropractors',
        link: 'https://www.dsmchiropractors.com/',
        logo: '@/assets/dsm-chiropractors.svg',
        image: 'dsm-chiropractors.jpg',
        description: 'Find top chiropractors in Des Moines, Iowa to manage pain, prevent injury, and start living again',
        class: 'absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-80 duration-300 group-hover:bg-green-900 z-10 bg-green-700',
      },
      {
        text: 'Iowa City Chiropractors',
        link: 'https://www.iowacitychiropractors.com/',
        logo: '@/assets/iowacity-chiropractors.svg',
        image: 'iowa-city-chiropractors.jpg',
        description: 'Find top chiropractors in Iowa City, Iowa to manage pain, prevent injury, and start living again',
        class: 'absolute top-0 left-0 right-0 h-full opacity-70 group-hover:opacity-80 duration-300 group-hover:bg-gray-900 z-10 bg-iacity-black',
      },
    ],
    metaLogoImage: "",
    metaCompanyLogoImage: "https://www.designforchiropractors.com/img/design-for-chiropractors.23f0efd4.jpg"
  },
  mutations: {},
  actions: {},
  modules: {},
});
