export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  github_org_name: string;
  country: string;
  social: {
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    dev: string;
    hashnode: string;
    discord: string;
    github_organisation: string;
    daily_dev: {
      username: string;
      card: string;
    };
    holopin: string;
  };
  other: {
    hacktoberfest: string;
    codsoft: string;
    github_snake: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://mmo4.fun',
  domain: 'mmo4.fun',
  author: 'Vuong Nguyen',
  author_surname: 'Nguyen',
  titlePrefix: 'Vuong Nguyen',
  github_org_name: 'vuong8',
  country: 'VietNam',
  profile_image:
    'https://avatars.githubusercontent.com/u/75434191?s=400&u=0aa88e4ae941c44425b2be4595cf92b68f578f8a&v=4',
  form_id: 'https://formspree.io/f/myzynpbr',
  social: {
    kofi: 'https://ko-fi.com/muhammadfiaz',
    sponsor: 'https://github.com/sponsors/vuong8',
    email: 'vuongnguyen3009@gmail.com',
    twitter: '@muhammadfiaz_',
    github: 'vuong8',
    linkedin: 'https://www.linkedin.com/in/vuong8-/',
    blog: 'https://articles.mmo4.fun',
    medium: 'https://vuong8.medium.com',
    dev: 'https://dev.to/muhammadfiaz',
    hashnode: 'https://muhammadfiaz.hashnode.dev',
    discord: 'https://discord.gg/mXMhy2EX',
    github_organisation: 'https://github.com/FiazTechnologies',
    daily_dev: {
      username: 'muhammadfiaz',
      card: 'https://api.daily.dev/devcards/v2/JVyK3ICBzKPdM0rcDj1o4.png?type=wide&r=vde'
    },
    holopin: 'muhammadfiaz'
  },
  metadata: {
    description: `Hi! I'm Vuong Nguyen, a DevOps engineer passionate about building apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
    keywords:
      'Vuong Nguyen, DevOps engineer, Vuong Nguyen portfolio, Vuong Nguyen GitHub, Web Development, Mobile Applications, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },
  other: {
    hacktoberfest: 'https://hacktoberfest.com/',
    codsoft: 'https://www.codsoft.in/',
    github_snake:
      'https://raw.githubusercontent.com/vuong8/vuong8/output/github-contribution-grid-snake.svg'
  }
};
