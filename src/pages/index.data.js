export const nav = {
  logo: {
    image: '/images/cr-logo-horo.svg',
    alt: 'CRW',
    url: '#intro',
  },
  links: [
    {
      title: 'Home',
      url: '#intro',
      image: '/images/icon-home.svg',
      active: true,
    },
    { title: 'Resume', url: '#resume', image: '/images/icon-resume.svg' },
    {
      title: 'Portfolio',
      url: '#portfolio',
      image: '/images/icon-portfolio.svg',
    },
    { title: 'Contact', url: '#contact', image: '/images/icon-contact.svg' },
  ],
}

export const intro = {
  id: 'intro',
  subTitle: 'Senior UI Developer | Boston, MA',
  title: 'Chris Roberts',
  description:
    "I'm Chris Roberts, an experienced UI developer in the Greater Boston area. With 15+ years of industry experience I work with a wide variety of technologies such as HTML, CSS/SASS, JavaScript, Vue.js, React, PHP, and WordPress. I enjoy bridging the gap between design and code to create superior interactive experiences.",
  video: '/video/intro-web.mp4',
}

export const resume = {
  id: 'resume',
  resume: {
    title: 'Resume',
    items: [
      {
        year: 2024,
        company: 'RainFocus',
        location: 'Remote',
        logo: '/images/jobs/rainfocus.jpg',
        jobTitle: 'Senior UI Developer',
        details: [
          'Engineered bespoke web experiences for enterprise clients, seamlessly integrating their brand identities and utilizing their APIs within the application',
          'Translated complex design specifications from Figma into polished, functional UI components, serving as the key bridge between design and development',
          "Accelerated the company's Next.js website, building high-speed, accessible web experiences that drive engagement and convert users in lockstep with the marketing team",
          'Spearheaded the architectural design and implementation of a centralized web component library in Storybook, standardizing development and scaling the use of React and Svelte across projects',
          'Cultivated a strong team of junior developers, leveraging one-on-one mentorship, structured code reviews, and monthly training sessions to accelerate skill growth and project ownership',
        ],
      },
      {
        year: 2023,
        company: 'Wild Alaskan Company',
        location: 'Remote',
        logo: '/images/jobs/wild-alaskan.svg',
        jobTitle: 'Senior Front End Engineer',
        details: [
          'Created and maintained responsive, accessible and performant web pages for the company Vue.js e-commerce web application that receives 1.2 million monthly visitors, increasing site traffic by 12% and conversion rate by 10%',
          'Improved the performance, usability, and accessibility of web applications by applying best practices and standards for HTML, CSS, JavaScript, TypeScript, Vuex, Vue Router, and Tailwind CSS',
          'Ensured the quality and reliability of the code by using Git, Webpack, Jest, Cypress, and other tools for version control, bundling, testing, and debugging',
          'Collaborated with other developers and stakeholders in an agile environment, using Scrum, Kanban, and Jira methodologies and tools',
          'Demonstrated strong communication, problem-solving, and leadership skills throughout the development process',
        ],
      },
      {
        year: 2018,
        company: '829 Studios',
        location: 'Boston, MA',
        logo: '/images/jobs/829.svg',
        jobTitle: 'Senior Front End Developer',
        details: [
          'Develop custom WordPress websites for large scale and enterprise clients, consistently improving site performance, accessibility (WCAG), and increasing overall site traffic',
          'Build custom REST API endpoints with WordPress to pull data into Vue.js, and React front end UIs',
          'Deeply customize and extend WordPress’ CMS capabilities using Advanced Custom Fields (ACF), and develop custom plugins',
          'Spearheaded development of our internal framework incorporating modern build tools (Parcel.JS, Browsersync, linting) greatly shortening project development time and increasing department profitability',
          'Collaborate with project managers and stakeholders to assess and document project guidelines and timelines',
          'Mentor, assist, and review code for a team of eight developers',
        ],
      },
      {
        year: 2015,
        company: 'Firefield',
        location: 'Remote',
        logo: '/images/jobs/firefield.svg',
        jobTitle: 'Front End Developer',
        details: [
          'Worked on client side of web applications developing components with Vue.js, and React, also incorporating Bootstrap, Vuex and Redux for state management',
          'Developed and maintained our style guide to ensure high graphic standards and design consistency across our applications',
          'Refactored our codebase, incorporating SASS mixins, CSS custom properties, and improving build processes',
          'Worked as part of a distributed team, collaborating across the globe with our back end developers',
        ],
      },
      {
        year: 2013,
        company: 'Brick Marketing',
        location: 'Boston, MA',
        logo: '/images/jobs/brick-marketing.svg',
        jobTitle: 'Web Designer & Developer',
        details: [
          'Created bespoke websites for various B2B and enterprise customers using WordPress, custom post types, and Advanced Custom Fields (ACF)',
          'Worked with marketing and SEO colleagues to apply SEO, design custom landing pages, and forms with high conversion rates consistently',
          'Enhanced client website performance by compressing images, minifying code, caching content, migrating to CDNs, and optimizing databases',
        ],
      },
      {
        year: 2007,
        company: 'Onpoint Media',
        location: 'Beverly, MA',
        logo: '/images/jobs/brick-marketing.svg',
        jobTitle: 'Web Designer & Developer',
        details: [
          'Created and maintained web solutions using WordPress, HTML, CSS, PHP, and JavaScript / jQuery, ensuring cross-browser compatibility and responsiveness',
          'Delivered projects on time and within budget, exceeding customer expectations',
          'Managed the entire web design workflow from sketches to code, following best practices and client specifications',
          'Provided guidance and feedback to our intern developers on their code quality, style, and performance, using code reviews and pair programming',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    items: [
      { title: 'HTML', year: 2001, logo: '/images/icon-html.svg' },
      { title: 'CSS', year: 2005, logo: '/images/icon-css.svg' },
      { title: 'PHP', year: 2006, logo: '/images/icon-php.svg' },
      {
        title: 'JavaScript',
        year: 2009,
        logo: '/images/icon-javascript.svg',
      },
      {
        title: 'Vue.js',
        year: 2017,
        logo: '/images/icon-vuejs.svg',
      },
      { title: 'React', year: 2018, logo: '/images/icon-react.svg' },
      {
        title: 'Svelte',
        year: 2024,
        logo: '/images/icon-svelte.svg',
      },
      {
        title: 'Photoshop',
        year: 2002,
        logo: '/images/icon-photoshop.svg',
      },
      {
        title: 'Illustrator',
        year: 2002,
        logo: '/images/icon-illustrator.svg',
      },
      { title: 'Figma', year: 2016, logo: '/images/icon-figma.svg' },
    ],
  },
}

export const portfolio = {
  id: 'portfolio',
  title: 'Portfolio',
  items: [
    {
      type: 'Vue',
      title: 'Tv Guide',
      description:
        'An interactive TV guide powered by Vue.js and rest API from <a href="https://www.tvmaze.com/" target="_blank">TVmaze</a>',
      image: 'https://via.placeholder.com/370x230',
      url: 'https://tv-guide.chrisrobertsweb.dev/',
    },
    {
      type: 'Vue',
      title: 'Andrew Swaine Photography',
      description:
        'Custom WordPress photo gallery theme built with Vue.js and the WordPress Rest API',
      image: 'https://via.placeholder.com/370x230',
      url: 'https://andrewswaine.chrisrobertsweb.dev/',
    },
    {
      type: 'Vue',
      title: 'Jeopardy!',
      description:
        'A Vue.js application (powered by WP Rest API) that allows you to be the host of local multiplayer matches of Jeopardy with friends',
      image: 'https://via.placeholder.com/370x230',
      url: 'https://jeopardy.chrisrobertsweb.dev/',
    },
    {
      type: 'Vue',
      title: 'Latin Rogue Cleaning',
      description:
        'A single page, custom responsive WordPress theme, featured on <a href="http://onepagelove.com/">One Page Love</a>',
      image: 'https://via.placeholder.com/370x230',
      url: 'http://lrc.chrisrobertsweb.dev/',
    },
  ],
}

export const contact = {
  id: 'contact',
  title: 'Contact',
  items: [
    {
      title: 'GitHub',
      logo: 'https://via.placeholder.com/44x44',
      url: 'https://github.com/therstyle',
    },
    {
      title: 'LinkedIn',
      logo: 'https://via.placeholder.com/44x44',
      url: 'https://www.linkedin.com/in/xchrisroberts/',
    },
  ],
}
