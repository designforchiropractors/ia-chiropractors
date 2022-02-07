import { createStore } from "vuex";

export default createStore({
  state: {
    chiropractors: [
      {
        id: 1,
        name: "Felix Oloo",
        experience: 3,
        location: "Des Moines",
        focus: "Kids & Family",
        service1: "Attend to something that hurts",
        service2: "Make right something that was wrong",
        service3: "Fix that aching shoulder of yours",
        picture: "chiro-2.jpg",
      },
      {
        id: 2,
        name: "Sarah Barthel",
        experience: 6,
        location: "West Des Moines",
        focus: "Family",
        service1: "Attend to something that hurts",
        service2: "Make right something that was wrong",
        service3: "Fix that aching shoulder of yours",
        picture: "chiro-1.jpg",
      },
      {
        id: 3,
        name: "Tseng Kuo-Hung",
        experience: 15,
        location: "Norwalk",
        focus: "All",
        service1: "Attend to something that hurts",
        service2: "Make right something that was wrong",
        service3: "Fix that aching shoulder of yours",
        picture: "chiro-4.jpg",
      },
      {
        id: 4,
        name: "Agnes Something",
        experience: 7,
        location: "Des Moines",
        focus: "Kids",
        service1: "Attend to something that hurts",
        service2: "Make right something that was wrong",
        service3: "Fix that aching shoulder of yours",
        picture: "chiro-3.jpg",
      },
    ],
    navLinks: [
      {
        text: "APPLY TO BE LISTED",
        link: 'apply'
      },
      {
        text: "CONTACT",
        link: 'contact'
      },
      {
        text: "BLOG",
        link: 'blog'
      },
      {
        text: "VIEW CHIROPRACTORS",
        link: 'directory'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
