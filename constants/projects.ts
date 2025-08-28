const projects = [
    {
      id: 1,
      title: 'Handsdown Academies',
      category: 'Martial Arts Gym',
      description:
        'Complete redesign and modernization of a group of martial arts gyms with CMS migration from WordPress to Strapi for better content management.',
      services: [
        'Website Redesign',
        'Hosting Migration',
        'WordPress to Strapi CMS',
        'Content Migration',
        'Performance Optimization',
      ],
      technologies: ['React', 'Strapi CMS', 'Modern Hosting'],
      review: {
        text: 'Chris transformed our outdated website into a modern, professional platform. The migration from WordPress to Strapi has made content management so much easier for our team. The new design perfectly represents our brand and the performance improvements are remarkable.',
        author: 'Kalon Page',
        position: 'Director, Handsdown Academies',
        rating: 5,
      },
      image: {
        src: '/handsdown-site-screenshot.webp',
        fallback: '/handsdown-site-screenshot.png',
        alt: 'Handsdown Academies website preview',
      },
      link: 'https://handsdownacademies.co.uk',
    },
    {
      id: 2,
      title: 'The Collar Crew',
      category: 'Local Business',
      description:
        'Complete business transformation for a dog walking service, moving from GoDaddy/WordPress to a modern static site with significant SEO improvements.',
      services: [
        'Platform Migration',
        'Static Site Development',
        'SEO Optimization',
        'Website Redesign',
        'Local Business Optimization',
      ],
      technologies: ['Static Site', 'SEO Tools', 'Modern Framework'],
      review: {
        text: 'The difference Chris made to our online presence is incredible. Moving away from our old GoDaddy setup to this new website has brought us so many new customers. The SEO improvements alone have tripled our online inquiries!',
        author: 'Tom Livermore',
        position: 'Owner, The Collar Crew',
        rating: 5,
      },
      image: {
        src: '/collar-crew-screenshot.webp',
        fallback: '/collar-crew-screenshot.png',
        alt: 'The Collar Crew website preview',
      },
      link: 'https://thecollarcrew.co.uk',
    },
  ]

  export const getProjects = () => projects