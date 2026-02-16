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
        logo: {
          image: '/images/jobs/rainfocus.jpg',
        },
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
        logo: {
          image: '/images/jobs/wild-alaskan.svg',
          dark: true,
        },
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
        logo: {
          image: '/images/jobs/829.svg',
        },
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
        logo: {
          image: '/images/jobs/firefield.svg',
        },
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
        logo: {
          image: '/images/jobs/brick-marketing.svg',
          dark: true,
        },
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
        logo: {
          image: '/images/jobs/onpoint.png',
        },
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
      image: '/images/portfolio/tv-guide_2x.jpg',
      url: 'https://tv-guide.chrisrobertsweb.dev/',
    },
    {
      type: 'Vue',
      title: 'Andrew Swaine Photography',
      description:
        'Custom WordPress photo gallery theme built with Vue.js and the WordPress Rest API',
      image: '/images/portfolio/swaine_2x.webp',
      url: 'https://andrewswaine.chrisrobertsweb.dev/',
    },
    {
      type: 'Vue',
      title: 'Jeopardy!',
      description:
        'A Vue.js application (powered by WP Rest API) that allows you to be the host of local multiplayer matches of Jeopardy with friends',
      image: '/images/portfolio/jeopardy_2x.webp',
      url: 'https://jeopardy.chrisrobertsweb.dev/',
    },
    {
      type: 'Vue',
      title: 'Latin Rogue Cleaning',
      description:
        'A single page, custom responsive WordPress theme, featured on <a href="http://onepagelove.com/">One Page Love</a>',
      image: '/images/portfolio/lrc_2x.jpg',
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
      logo: '/images/icon-github.svg',
      svgIcon: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C17.1375 18.1625 20 14.4125 20 10C20 4.475 15.525 0 10 0Z" fill="currentColor" />
`,
      url: 'https://github.com/therstyle',
    },
    {
      title: 'LinkedIn',
      logo: '/images/icon-linkedin.svg',
      svgIcon: `<path d="M20 12.1614V19.5555H15.7134V12.6566C15.7134 10.9235 15.0933 9.74078 13.5417 9.74078C12.3572 9.74078 11.6524 10.5379 11.3423 11.3089C11.2292 11.5846 11.2001 11.9682 11.2001 12.3541V19.5555H6.91198C6.91198 19.5555 6.96973 7.87101 6.91198 6.66041H11.1997V8.48824C11.191 8.50191 11.1797 8.51665 11.1715 8.5299H11.1997V8.48824C11.7693 7.61085 12.7867 6.35747 15.0638 6.35747C17.885 6.35743 20 8.2005 20 12.1614ZM2.42646 0.444336C0.959506 0.444336 0 1.40654 0 2.67187C0 3.90963 0.931746 4.90103 2.36954 4.90103H2.39818C3.89355 4.90103 4.82352 3.90981 4.82352 2.67187C4.79535 1.40654 3.89355 0.444336 2.42646 0.444336ZM0.254675 19.5555H4.54114V6.66041H0.254675V19.5555Z" fill="currentColor"/>
`,
      url: 'https://www.linkedin.com/in/xchrisroberts/',
    },
  ],
}
