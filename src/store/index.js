import { createStore } from "vuex";

export default createStore({
  state: {
    sites: [
      {
        id: 1,
        text: 'Ankeny Chiropractors',
        link: 'https://www.ankenychiropractors.com/',
        logo: ''
      },
      {
        id: 2,
        text: 'Design for Chiropractors',
        link: 'https://www.designforchiropractors.com/',
        logo: ''
      },
      {
        id: 3,
        text: 'DSM Chiropractors',
        link: 'https://www.dsmchiropractors.com/',
        logo: ''
      },
    ],
    metaLogoImage: "",
    metaCompanyLogoImage: "https://www.designforchiropractors.com/img/design-for-chiropractors.23f0efd4.jpg"
  },
  mutations: {},
  actions: {},
  modules: {},
});
