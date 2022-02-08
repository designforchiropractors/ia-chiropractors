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
        id: 1,
        text: "APPLY TO BE LISTED",
        link: 'apply'
      },
      {
        id: 2,
        text: "CONTACT",
        link: 'contact'
      },
      {
        id: 3,
        text: "BLOG",
        link: 'blog'
      },
      {
        id: 4,
        text: "VIEW CHIROPRACTORS",
        link: 'directory'
      }
    ],
    infoCards: [
      {
        id: 1,
        caption: "Chiropractic Care",
        text: "Chiropractic care has helped countless people manage pain and improve their general health. It is typically less invasive and less expensive than other forms of treatment.",
        svg: "M10.6667 2.66667H8L6.66667 0H12L10.6667 2.66667ZM18.6667 14.6667V26.6667H0V14.6667C0 10.9867 2.98667 8 6.66667 8V5.33333H5.33333V4H13.3333V5.33333H12V8C15.68 8 18.6667 10.9867 18.6667 14.6667ZM16 14.6667C16 12.4667 14.2 10.6667 12 10.6667H6.66667C4.46667 10.6667 2.66667 12.4667 2.66667 14.6667V24H16V14.6667ZM13.3333 18.6667H10.6667V21.3333H8V18.6667H5.33333V16H8V13.3333H10.6667V16H13.3333V18.6667Z",
        width: "19",
        height: "27"
      },
      {
        id: 2,
        caption: "Spinal Manipulation",
        text: "Spinal adjustments are the most common form of treatment utilized in chiropractic care. A variety of techniques can help you on your way to a life with less pain and more freedom.",
        svg: "M21.3333 2.66667V21.3333H2.66667V2.66667H21.3333ZM21.3333 0H2.66667C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.8133 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8133 24 21.3333V2.66667C24 1.18667 22.8133 0 21.3333 0ZM12 4C12.7333 4 13.3333 4.6 13.3333 5.33333V6.66667H17.56C17.8 7.08 18 7.53333 18.2133 8H13.3333V9.33333H18.6667C18.8 9.77333 18.8933 10.2267 18.92 10.6667H13.3333V12H18.9333C18.88 12.4667 18.8667 12.92 18.8 13.3333H13.3333V14.6667H18.6667C18.6667 14.6667 18.5867 18.6667 16.6667 18.6667C14.8667 18.6667 15.3333 16.6267 13.3333 16V18.6667C13.3333 19.4 12.7333 20 12 20C11.2667 20 10.6667 19.4 10.6667 18.6667V16C8.66667 16.6267 9.13333 18.6667 7.33333 18.6667C5.41333 18.6667 5.33333 14.6667 5.33333 14.6667H10.6667V13.3333H5.2C5.13333 12.92 5.12 12.4667 5.06667 12H10.6667V10.6667H5.08C5.10667 10.2267 5.21333 9.77333 5.33333 9.33333H10.6667V8H5.78667C6 7.53333 6.2 7.08 6.44 6.66667H10.6667V5.33333C10.6667 4.6 11.2667 4 12 4Z",
        width: "24",
        height: "24"
      },
      {
        id: 3,
        caption: "Injury Prevention",
        text: "Treatment by a licensed professional can both help heal current injuries and prevent future ones. Athletes and office workers alike can experience the benefits of chiropractic care.",
        svg: "M17.3333 13.6533V26.6667H16.08V13.6533C16.08 13.4533 16 13.3333 15.9067 13.1867C15.8536 13.1306 15.7895 13.0862 15.7183 13.0564C15.6471 13.0265 15.5705 13.0119 15.4933 13.0133C15.4078 13.008 15.322 13.0207 15.2416 13.0505C15.1612 13.0804 15.088 13.1268 15.0267 13.1867C14.9067 13.3333 14.8533 13.4667 14.8533 13.6533V14.88H13.64V14C12.7067 13.7733 11.8667 13.3867 11.1333 12.84C10.4 12.2933 9.78667 11.6533 9.28 10.92L8.81333 12.52C8.66667 13.08 8.66667 13.6533 8.66667 14.24V15.1067L11.1333 18.5867V26.6667H8.66667V20.4533L6.42667 17.3333L6.2 21.6667L2.48 26.6667L0.506667 25.16L3.69333 20.8533V14.24C3.69333 13.5333 3.76 12.84 3.88 12.1467L4.33333 10.0533L2.48 11.0933V15.5067H0V9.64L6.66667 5.86667C7.05333 5.68 7.45333 5.57333 7.88 5.57333C8.30667 5.57333 8.72 5.69333 9.10667 5.92C9.53333 6.16 9.85333 6.50667 10.0933 6.97333L11.08 9.06667C11.4667 9.84 12.0533 10.4933 12.8533 11.0133C13.64 11.5333 14.52 11.8 15.4933 11.8C16 11.8 16.4267 12 16.8 12.32C17.1733 12.6667 17.3333 13.1067 17.3333 13.6533ZM9.33333 0C10.0406 0 10.7189 0.280951 11.219 0.781048C11.719 1.28115 12 1.95942 12 2.66667C12 4.14667 10.8133 5.33333 9.33333 5.33333C8.62609 5.33333 7.94781 5.05238 7.44772 4.55229C6.94762 4.05219 6.66667 3.37391 6.66667 2.66667C6.66667 1.95942 6.94762 1.28115 7.44772 0.781048C7.94781 0.280951 8.62609 0 9.33333 0Z",
        width: "18",
        height: "27"
      }
    ],
    rightCards: [
      {
        id: 1,
        caption: "The Right Location",
        text: "This online directory features a plethora of licensed chiropractic practices spread all over the Des Moines metro area. No matter where you live in Central Iowa, the right local practice is not too far away and ready to offer treatment."
      },
      {
        id: 2,
        caption: "The Right Chiropractor",
        text: "With so many options in the Des Moines metro area, it will not be difficult to find the right chiropractor for you and your needs. Just take a look through our directory to find the professional and the treatment that is right for you."
      }
    ],
    listingBenefits: [
      {
        id: 1,
        caption: "Advertise your business",
        text: "Not only is a listing in an online direfctory one more way to capture the attention of potential customers, it can be more effective than traditional advertising."
      },
      {
        id: 2,
        caption: "Get more website traffic",
        text: "Most of your potential customers are trying to find your services on the Internet. An online listing means more exposure and more visibility for your website."
      },
      {
        id: 3,
        caption: "Take control of your business image",
        text: "When a third party directory such as this lists your practice, you establish more legitimacy and trust for your business and its services."
      },
      {
        id: 4,
        caption: "Keep costs low",
        text: "The fees for an online listing average about only $25 per month -- a very low cost for the high value of more web traffic and more clients."
      }
    ],
    blogPosts: [
      {
        id: 1,
        authorName: "Cody Eklov",
        authorTitle: "Chief Operating Manager",
        authorCompany: "Design for Chiropractors LLC",
        authorImage: "cody-eklov.png",
        postLink: "simple-ways-to-grow-chiropractor-business-online",
        postTitle: "3 Simple Ways to Grow Your Chiropractor Business Online",
        postImage: "benefits-of-chiropractic-care.jpg",
        postContents: "<h2>An example header</h2>",
        postDate: "Feb 8, 2022",
        postCategory: "Advice"
      },
      {
        id: 2,
        authorName: "Cody Eklov",
        authorTitle: "Chief Operating Manager",
        authorCompany: "Design for Chiropractors LLC",
        authorImage: "cody-eklov.png",
        postLink: "benefits-chiropractic-care",
        postTitle: "The Benefits of Chiropractic Care - A Brief Overview",
        postImage: "benefits-of-chiropractic-care.jpg",
        postContents: "<h2>An example header</h2>",
        postDate: "Jan 5, 2022",
        postCategory: "Lesson"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
