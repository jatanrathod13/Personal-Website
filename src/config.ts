import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Jatan Rathod',
  subtitle: 'Data Engineer & AI Technologist',
  lang: 'en',
  themeColor: '#3b82f6',
  banner: {
    enable: true,
    text: 'Welcome to my personal website', 
    link: '/about'
  },
  toc: {
    enable: true,
    depth: 2
  },
  favicon: [
    {
      src: '/favicon/favicon-light-32.png',
      theme: 'light',
      sizes: '32x32',
    },
    {
      src: '/favicon/favicon-light-128.png',
      theme: 'light',
      sizes: '128x128',
    },
    {
      src: '/favicon/favicon-light-180.png',
      theme: 'light',
      sizes: '180x180',
    },
    {
      src: '/favicon/favicon-light-192.png',
      theme: 'light',
      sizes: '192x192',
    },
    {
      src: '/favicon/favicon-dark-32.png',
      theme: 'dark',
      sizes: '32x32',
    },
    {
      src: '/favicon/favicon-dark-128.png',
      theme: 'dark',
      sizes: '128x128',
    },
    {
      src: '/favicon/favicon-dark-180.png',
      theme: 'dark',
      sizes: '180x180',
    },
    {
      src: '/favicon/favicon-dark-192.png',
      theme: 'dark',
      sizes: '192x192',
    }
  ],
  navBar: {
    logo: {
      enable: true,
      compact: true,
      svg: true,
      width: 22,
      height: 22,
      alt: 'JR'
    },
    title: 'Jatan Rathod',
    links: [
      {
        name: 'Home',
        url: '/',
        external: false
      },
      {
        name: 'Projects',
        url: '/projects',
        external: false
      },
      {
        name: 'About',
        url: '/about',
        external: false
      },
      {
        name: 'Contact',
        url: '/contact',
        external: false
      }
    ]
  },
  profile: {
    avatar: '/profile.jpg',
    name: 'Jatan Rathod',
    bio: 'Senior Data Engineer with expertise in AI, Big Data, and Automation',
    location: 'United States',
    company: 'Fortune 500 Companies',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/jatanrathod',
        icon: 'i-simple-icons-github',
        color: 'text-gray-700 dark:text-gray-200'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/jatanrathod',
        icon: 'i-simple-icons-linkedin',
        color: 'text-blue-500 dark:text-blue-400'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/jatanrathod',
        icon: 'i-simple-icons-twitter',
        color: 'text-blue-400 dark:text-blue-300'
      }
    ],
    skills: [
      {
        category: 'Programming Languages',
        items: ['Python', 'Java', 'Scala', 'SQL']
      },
      {
        category: 'AI & ML',
        items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow']
      },
      {
        category: 'Big Data',
        items: ['Apache Spark', 'Apache Kafka', 'Apache Flink', 'Hadoop']
      },
      {
        category: 'Cloud Platforms',
        items: ['AWS', 'Azure', 'GCP', 'Snowflake']
      },
      {
        category: 'Databases',
        items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
      },
      {
        category: 'DevOps & Tools',
        items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform']
      }
    ],
    experience: [
      {
        title: 'Senior Data Engineer',
        company: 'Fortune 500 Company',
        period: '2021 - Present',
        description: 'Leading the development of AI-powered data pipelines processing petabytes of data daily. Implemented real-time analytics solutions using Apache Kafka and Flink.',
        achievements: [
          'Reduced data processing time by 60% through optimization',
          'Implemented automated data quality monitoring system',
          'Led team of 5 engineers in successful project delivery'
        ]
      },
      {
        title: 'Data Engineer',
        company: 'Government Agency',
        period: '2018 - 2021',
        description: 'Built and maintained large-scale data processing systems. Developed machine learning models for predictive analytics.',
        achievements: [
          'Designed and implemented data lake architecture',
          'Developed automated ETL pipelines',
          'Created real-time monitoring dashboards'
        ]
      }
    ],
    education: [
      {
        degree: 'Master of Science in Computer Science',
        school: 'University of Technology',
        period: '2016 - 2018',
        specialization: 'Machine Learning & Big Data'
      },
      {
        degree: 'Bachelor of Engineering in Computer Science',
        school: 'Engineering College',
        period: '2012 - 2016'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: '2023'
      },
      {
        name: 'Google Cloud Professional Data Engineer',
        issuer: 'Google',
        date: '2022'
      },
      {
        name: 'Apache Spark Certified Developer',
        issuer: 'Databricks',
        date: '2021'
      }
    ]
  },
  license: {
    enable: true,
    name: 'MIT',
    url: 'https://opensource.org/licenses/MIT'
  }
}

export const navBarConfig: NavBarConfig = siteConfig.navBar
export const profileConfig: ProfileConfig = siteConfig.profile
export const licenseConfig: LicenseConfig = siteConfig.license
