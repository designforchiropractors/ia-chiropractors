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
        name: "Agnes Johnson",
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
        authorImage: "cody-eklov.webp",
        postLink: "5-reasons-your-business-should-be-listed-in-an-online-directory",
        postTitle: "5 Reasons Your Business Should Be Listed in an Online Directory",
        postImage: "5-reasons-your-business-should-be-listed-in-an-online-directory.webp",
        postImageUrl: "https://www.dsmchiropractors.com/img/reasons-business-should-be-listed-online-directory.118ada9c.webp",
        postImageAlt: "A library card catalog",
        postSnippet: "From added business exposure to an SEO boost, there are so many reasons to have your business listed in an online directory.",
        postContents: "<p class='mb-4 leading-relaxed'>A listing in an online directory can be of tremendous value to businesses large and small.</p><p class='mb-4 leading-relaxed'>Websites that serve as online directories list a variety of useful information (services provided, contact information, etc.) that help paying customers find you and your business. They are kind of like a glorified phonebook -- only <strong>way better.</strong></p><p class='mb-4 leading-relaxed'>There are a number of serious benefits to having your business listed in such an online directory. Here are just a few.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Advertise your business</h2><p class='mb-4 leading-relaxed'>The simplest and most obvious reason your business should be listed in an online directory is that it is one more way to advertise your business. A listing in an online directory is one more way to capture the attention of potential customers.</p><p class='mb-4 leading-relaxed'>And, it is a more <strong>effective</strong> way to advertise your business than traditional advertising. That is because -- unlike paid advertisements that appear on websites in an annoying and haphazard way -- your future customers are already looking for your services.</p><p class='mb-4 leading-relaxed'>For example, your future patrons are already searching Google for things like 'chiropractors in Los Angeles' and finding their way to these online directories. If you have a listing in an online directory, the chances they find their way to your business are <strong>significantly</strong> increased.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Boost your SEO</h2><p class='mb-4 leading-relaxed'>Search Engine Optimization, or SEO for short, is basically a way to get the eyes of <strong>more</strong> and <strong>better</strong> potential clients on your website. That means you want more of it.</p><p class='mb-4 leading-relaxed'>More specifically, SEO means doing things <strong>on</strong> and <strong>for </strong> your website to get it to rank higher up on search engines like Google.</p><p class='mb-4 leading-relaxed'>Now, there is a lot that goes into boosting SEO.But simply put, the <strong>external links</strong> (links on other websites that point to your website) from listings in an online directory are great for SEO.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Get more website traffic</h2><p class='mb-4 leading-relaxed'>Are your potential customers trying to find you by flipping through the pages of a phonebook? Probably not.</p><p class='mb-4 leading-relaxed'>Most of your potential customers are trying to find your services on the Internet.Naturally, a listing in an online directory can provide a boost to your website traffic. That means <strong>more exposure</strong> and <strong>more visibility.</strong></p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Take control of your business image</h2><p class='mb-4 leading-relaxed'>This is arguably the most significant benefit of listing your business in an online directory.</p><p class='mb-4 leading-relaxed'>Having your business listed in an online directory provides a natural reassurance to your potential clients.When they see your business listed by a third party, it lends a higher degree of <strong>legitimacy</strong> and <strong>trust</strong> to your business and its services.</p><p class='mb-4 leading-relaxed'>What's more, some online directories allow you to customize the information in your listing. For example, you can often write your own description of services offered.This helps get the <strong>right</strong> customers to your website and through your door.</p><p class='mb-4 leading-relaxed'>Some online directories even perform (or require) reviews of your services.Some will even post customer testimonials. The point is: with a listing in an online directory <strong>you can take control of your business image.</strong></p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Keep costs low</h2><p class='mb-4 leading-relaxed'>The icing on the cake is that a listing in an online directory usually doesn't cost that much.</p><p class='mb-4 leading-relaxed'>Most online directories provide listings for only a small fee. The cost of a listing in an online directory largely depends on what kind of services your business provides.</p><p class='mb-4 leading-relaxed'>For example, the cost of listing an attorney with a nationwide business is far more expensive than that of a chiropractor in a small town. Most of the time, this fee can be as small as <strong>$100, $50, or even $25 per month.</strong></p><p class='mb-4 leading-relaxed'>The simple fact, though, is that a small monthly fee for a listing in an online directory can provide a <strong>ton</strong> of value. And that makes it <strong>cheap.</strong></p>",
        postDate: new Date("2022/02/16"),
        postCategory: "Advice",
        postOrigin: "https://www.designforchiropractors.com/blog/5-reasons-your-business-should-be-listed-in-an-online-directory/"
      },
      {
        id: 2,
        authorName: "Cody Eklov",
        authorTitle: "Chief Operating Manager",
        authorCompany: "Design for Chiropractors LLC",
        authorImage: "cody-eklov.webp",
        postLink: "3-simple-ways-to-grow-your-chiropractor-business-online",
        postTitle: "3 Simple Ways to Grow Your Chiropractor Business Online",
        postImage: "3-simple-ways-to-grow-your-chiropractor-business-online.webp",
        postImageUrl: "https://www.dsmchiropractors.com/img/simple-ways-grow-chiropractor-business-online.bac47bd1.webp",
        postImageAlt: "Graph showing increasing value over time",
        postSnippet: "There are three simple ways you can grow your chiropractor business online. And it all boils down to having an online presence and taking control of it.",
        postContents: "<p class='mb-4 leading-relaxed'>An online presence is absolutely essential for a business to make it in the modern world. But it's not enough just to <em>have</em> an online presence. You need to have a <strong>good</strong> online presence.</p><p class='mb-4 leading-relaxed'>There are three simple ways you can grow your business: 1) get a website; 2) get listed; and 3) get reviewed.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Get a website</h2><p class='mb-4 leading-relaxed'>You <strong>must</strong> have a website.</p><p class='mb-4 leading-relaxed'>Simply put, if you don't have a website, you don't exist. Sure, someone <em>might</em> be able to find your practice if they search on Google maps, but what will happen when they don't see a link to your website?</p><p class='mb-4 leading-relaxed'>They will keep searching and forget they ever saw your business.</p><p class='mb-4 leading-relaxed'>By the way, a Facebook page is <strong>not</strong> a substitute for a real website.</p><p class='mb-4 leading-relaxed'>Businesses that have only a Facebook page can come off to their online audience as unprofessional, offputting, and lazy. People searching for someone to heal their pain will feel much more comfortable if they see something serious.</p><p class='mb-4 leading-relaxed'>But there's more to it than just <em>having</em> a website. Your website needs to be:</p><ul class='list-disc'><li class='mb-4 ml-6 leading-6'><strong>attractive</strong> - it needs to be attractive in appearance and engaging</li><li class='mb-4 ml-6 leading-6'><strong>mobile-friendly</strong> - it needs to look good on mobile devices because that is how most people will be viewing your website.</li><li class='mb-4 ml-6 leading-6'><strong>clear</strong> - it needs to be obvious where visitors can find what they're looking for</li><li class='mb-4 ml-6 leading-6'><strong>and more</strong> - it needs professional touches beyond the scope of this article</li></ul><p class='mb-4 leading-relaxed'>The bottom line: if you want to grow your business as a chiropractor online, <strong>a website is the single most effective thing you can have.</strong></p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Get listed</h2><p class='mb-4 leading-relaxed'>The next thing you want to do is that your business and website can be found online in as many places as possible.</p><p class='mb-4 leading-relaxed'>You need to submit your business to a number of popular online directories. Some of these directories will even let you take some control over your business presence in their directory. You can often enter customized information, such as specialization, certifications, awards, etc.</p><p class='mb-4 leading-relaxed'>To get you started, here are a few of the most popular directories you should consider:</p><ul class='list-disc'><li class='mb-4 ml-6 leading-6'><strong><a href='https://maps.google.com' target='_blank'>Google Maps</a></strong> - if you can't be found on Google Maps, you can't be found</li><li class='mb-4 ml-6 leading-6'><strong><a href='https://www.yelp.com' target='_blank'>Yelp</a></strong> - not just for restaurants, people use it to find everything</li><li class='mb-4 ml-6 leading-6'><strong><a href='https://www.yellowpages.com' target='_blank'>Yellow Pages</a></strong> - more modern and more useful than the traditional phone book</li></ul><p class='mb-4 leading-relaxed'>The takeway: <strong>submit your business and your website to popular directories</strong> or else no one will ever know about them.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Get reviewed</h2><p class='mb-4 leading-relaxed'>You <strong>need</strong> to encourage clients to write positive online reviews.</p><p class='mb-4 leading-relaxed'>You should have your own website and your own online presence. But you also need to make sure it is a <strong>good</strong> online presence.</p><p class='mb-4 leading-relaxed'>Poeple pay attention to which businesses have 5-star reviews and which businesses have 1-star reviews. It should be obvious which one you want to be.</p><p class='mb-4 leading-relaxed'>Quality of service is essential to getting good reviews. No one will want to tell the world about how great your service is if they don't like it very much.</p><p class='mb-4 leading-relaxed'>But you can do more. Don't leave it up to chance. Instead, try these things:</p><ul class='list-disc'><li class='mb-4 ml-6 leading-6'>Encourage your most satisfied recurring clients to post an online review</li><li class='mb-4 ml-6 leading-6'>Attach a small business card with a request for an online review to every invoice</li><li class='mb-4 ml-6 leading-6'>Send a follow-up e-mail after each appointment with a link to provide an online review of your service</li></ul><p class='mb-4 leading-relaxed'>Just don't leave your online reviews to chance. <strong>Encourage clients to write positive online reviews.</strong></p>",
        postDate: new Date("2022/03/07"),
        postCategory: "Marketing",
        postOrigin: "https://www.designforchiropractors.com/blog/3-simple-ways-to-grow-your-chiropractor-business-online/"
      },
      {
        id: 3,
        authorName: "Cody Eklov",
        authorTitle: "Chief Operating Manager",
        authorCompany: "Design for Chiropractors LLC",
        authorImage: "cody-eklov.webp",
        postLink: "why-netlify-the-simple-fast-and-secure-platform-for-developers",
        postTitle: "Why Netlify: The Simple, Fast, and Secure Platform for Developers",
        postImage: "netlify-logo.svg",
        postImageUrl: "",
        postImageAlt: "Netlify logo",
        postSnippet: "The Netlify platform empowers experienced developers and novice web designers alike to focus on doing what they love without all the extra overhead.",
        postContents: "<p class='mb-4 leading-relaxed'>The Netlify platform seeks to '<a href='https://www.netlify.com/' target='_blank'>build the future of the web</a>' by providing what they call 'an entire ecosystem of modern tools and services into a single, simlpe workflow for building high performance sites and apps.' <strong>This is great news for software developers and web site designers</strong>.</p><p class='mb-4 leading-relaxed'>The beauty of the Netlify platform is that it truly provides the developer's dream. Essentially, it allows developers to <a href='https://www.netlify.com/products/' target='_blank'>'just write code</a>.' Here are a number of ways that the Netlify platform does this and makes their platform a great choice for building, deploying, and more.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Used by major companies</h2><p class='mb-4 leading-relaxed'>The simple fact is: you don't have to take my word for it.</p><p class='mb-4 leading-relaxed'>A number of major companies have integrated the Netlify platform into their operations. <a href='https://www.netlify.com/customers' target='_blank'>Netlify's Customer Stories</a> page details a number of customer testimonials that include high praise of the platform.</p><p class='mb-4 leading-relaxed'>Netlify's customers include major companies such as <strong>Verizon</strong>, <strong>Nike</strong>, and <strong>Peloton</strong>. And its many testimonials discuss benefits such as <strong>blazing fast speed, significant cost-reduction, and more.</strong></p><p class='mb-4 leading-relaxed'>In other words, a lot of companies have chosen and love Netlify. Not just me.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Great for Single Page Applications (SPAs)</h2><p class='mb-4 leading-relaxed'>Netlify is designed to work with <a href='https://www.netlify.com/jamstack/' target='_blank'>Jamstack architecture</a> -- in other words, the JavaScript, APIs, and Markup technology stack. This architecture means building, deploying, and maintaining beautiful and high-performing <a href='https://en.wikipedia.org/wiki/Single-page_application' target='_blank'>Single Page Applications</a> is <strong>incredibly easy</strong>.</p><p class='mb-4 leading-relaxed'>I personally prefer using the Vue.js front-end framework for designing websites. Fortunately, <a href='https://www.netlify.com/with/vue/' target='_blank'>Netlify makes working with Vue.js extremely easy.</a> But Netlify also works with a number of other technologies and frameworks. So if you prefer, <a href='https://www.netlify.com/with/wordpress/' target='_blank'>Netlify can integrate with WordPress</a> too.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Automated building via GitHub</h2><p class='mb-4 leading-relaxed'>One of my favorite features of the Netlify platform is the ability to connect your Netlify-hosted app to any repository in your GitHub account. Netlify's tagline '<a href='https://www.netlify.com/products/build/' target='_blank'>Push to Git, and that's it</a>' is no exaggeration.</p><p class='mb-4 leading-relaxed'>All you have to do is connect your Netlify deployment process with your Git repository. After you run your 'git push' command, Netlify automatically recognizes the updates and begins its deployment process to make your work go live.</p><p class='mb-4 leading-relaxed'>It can be as simple as that. You can also <strong>customize your deployment process</strong> as your project's needs dictate. Build commands, publish directories, deployment scripts, and more can be customized however you wish.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Speed and Performance</h2><p class='mb-4 leading-relaxed'><a href='https://www.netlify.com/customers' target='_blank'>Netlify's Customer Stories</a> and testimonials represent an accurate depiction of the speed and performance that the platform offers.</p><p class='mb-4 leading-relaxed'>One reason that Netlify-hosted applications are so fast is because of <a href='https://www.netlify.com/products/edge/' blank='_blank'>Netlify Edge.</a> It represents a global network of prerendered projects that renders having <strong>your own Content Delivery Network (CDN) totally unnecessary.</strong></p><p class='mb-4 leading-relaxed'>Another reason Netlify has such great speed and performance is because of the technologies it supports and integrates with. The <a href='https://jamstack.org/' target='_blank'>Jamstack architecture</a> that Netlify enables is <strong>literally built for speed</strong>.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Integration with forms</h2><p class='mb-4 leading-relaxed'>Another of my favorite features of the Netlify platform is the ability to <strong>seamlessly integrate with website forms</strong>.</p><p class='mb-4 leading-relaxed'>For example, you can <strong>quickly and easily set up a contact form</strong> for your website without all the extra overhead of server-side code, JavaScript, or a database. <a href='https://www.netlify.com/products/forms/' target='_blank'>Netlify forms</a> take care of everything behind the scenes.</p><p class='mb-4 leading-relaxed'><a href='https://www.netlify.com/products/forms/' target='_blank'>Netlify forms</a> also automatically include a number of features such as <a href='https://docs.netlify.com/forms/spam-filters/#extra-spam-prevention' target='_blank'>spam prevention</a> and protection against bots. And, you can even add <a href='https://docs.netlify.com/forms/spam-filters/#recaptcha-2-challenge' target='_blank'>reCAPTCHA 2 challenges</a> to your forms.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Security</h2><p class='mb-4 leading-relaxed'>Online security is a major concern in an age when cyber attacks are all too common. That's why <a href='https://www.netlify.com/security/' target='_blank'>Netlify security</a> is so handy. You can <strong>literally do nothing extra</strong> beyond deploying your project on Netlify and rest assured that you are getting boosted security.</p><p class='mb-4 leading-relaxed'>Among the many benefits of <a href='https://www.netlify.com/security/' target='_blank'>Netlify security</a> are: active Distributed Denial of Service (DDos) mitigation, encryption of all network traffic over Transport Layer Security (TLS) protocol -- meaning <strong>everything is HTTPS</strong> -- and regular penetration testing performed on the platform's network infrastructure.</p><p class='mb-4 leading-relaxed'>And, you can do even more to secure your application, including <strong>user authentication</strong> with <a href='https://docs.netlify.com/visitor-access/identity/' target='_blank'>Netlify Identity.</a></p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Pricing</h2><p class='mb-4 leading-relaxed'>Yet another of my favorite features of the Netlify platform is its pricing structure.</p><p class='mb-4 leading-relaxed'><a href='https://www.netlify.com/pricing/' target='_blank'>Netlify pricing</a> includes three clearly defined and priced tiers, in addition to a customized Enterprise tier for the largest of operations. Why do I love their pricing so much? Because Netlify has a <strong>free Starter tier</strong> that is <em>actually free</em>.</p><p class='mb-4 leading-relaxed'>I have been able to deploy a number of high-quality, fast, and secure applications through Netlify's platform without paying a dime. And in the case that I need more, the Pro tier is a wonderfully low-priced <strong>$19.99 / month</strong>.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>Documentation</h2><p class='mb-4 leading-relaxed'>As a software developer and website designer, I know the frustrations of having to deal with platforms and APIs that are not well-documented. That is why I love <a href='https://docs.netlify.com/' target='_blank'>Netlify's documentation</a> so much.</p><p class='mb-4 leading-relaxed'>I have been able to find official <a href='https://docs.netlify.com/' target='_blank'>Netlify documentation</a> that <strong>covers every feature or issue</strong> I have had questions about in enough, but not too much, detail.</p><p class='mb-4 leading-relaxed'>Furthermore, because <strong>Netlify is widely utilized</strong>, finding even more environment- and project-specific support is incredibly easy using search engines like Google.</p><h2 class='text-xl lg:text-2xl mt-12 mb-4 text-gray-600'>All the extras</h2><p class='mb-4 leading-relaxed'>Netlify has <strong>so many other features and integrations</strong> on its platform that it is impossible to capture them adequately in this one post. But, just to name a few others that you might be interested in, Netlify also offers:</p><ul class='list-disc'><li class='mb-4 ml-6 leading-6'><a href='https://zapier.com/apps/mailchimp/integrations/netlify' target='_blank'>easy integration with Mailchimp via Zapier</a></li><li class='mb-4 ml-6 leading-6'>analytics data via <a href='https://www.netlify.com/products/analytics/' target='_blank'>Netlify Analytics</a></li><li class='mb-4 ml-6 leading-6'><a href='https://www.netlify.com/for/ecommerce/' target='_blank'>support for e-commerce</a>, including integration with Stripe payments</li><li class='mb-4 ml-6 leading-6'>serverless functions via <a href='https://www.netlify.com/products/functions/' target='_blank'>Netlify functions</a></li><li class='mb-4 ml-6 leading-6'>integrations with Content Management Systems (CMS)</li></ul><p class='mb-4 leading-relaxed'>For all those reasons and more, I believe <strong>the Netlify platform is a simple, fast, and secure platform for developers</strong> of all experience levels.</p>",
        postDate: new Date("2022/03/23"),
        postCategory: "Web Hosting",
        postOrigin: "https://www.designforchiropractors.com/blog/why-netlify-the-simple-fast-and-secure-platform-for-developers/"
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
