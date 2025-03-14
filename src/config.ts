import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Jatan Rathod',
  subtitle: 'Data Engineer & Business Intelligence Analyst',
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
        name: 'Dashboard',
        url: '/dashboard',
        external: false
      },
      {
        name: 'Blog',
        url: '/blog',
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
    bio: 'Business Intelligence Analyst with expertise in Data Engineering, ETL Pipelines, and Data Visualization',
    location: 'Dallas, TX',
    company: 'Optimal Solutions Group, LLC',
    contact: {
      email: 'jatan.h.rathod@gmail.com',
      phone: '(682)-230-8370'
    },
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/jatanrathod13',
        icon: 'i-simple-icons-github',
        color: 'text-gray-700 dark:text-gray-200'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/jatanrathod',
        icon: 'i-simple-icons-linkedin',
        color: 'text-blue-500 dark:text-blue-400'
      }
    ],
    skills: [
      {
        category: 'Programming Languages',
        items: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'D3.js', 'PowerShell', 'Bash']
      },
      {
        category: 'Databases & Big Data',
        items: ['SQL Server', 'PostgreSQL', 'ElasticSearch', 'Cassandra', 'Hadoop', 'Spark', 'Hive', 'Kafka']
      },
      {
        category: 'Visualization Tools',
        items: ['Tableau', 'PowerBI', 'AWS QuickSight', 'Looker']
      },
      {
        category: 'Cloud & AWS',
        items: ['S3', 'EMR', 'Lambda', 'CloudWatch', 'DynamoDB']
      },
      {
        category: 'ETL & Workflow',
        items: ['Luigi', 'Airflow', 'RedShift']
      },
      {
        category: 'DevOps & Tools',
        items: ['Git', 'Bitbucket', 'JIRA']
      }
    ],
    experience: [
      {
        title: 'Business Intelligence Analyst',
        company: 'Optimal Solutions Group, LLC',
        location: 'College Park, MD',
        period: 'June 2020 - Present',
        description: 'Working on data warehouse and ETL solutions for Centre for Medicare and Medicaid services\' (CMS) Website Governance Project.',
        achievements: [
          'Outlined a new Data Warehouse and ETL to meet business requirements for CMS Website Governance Project',
          'Built and maintained data pipelines ingesting transactional data from 6 primary data sources using Spark, RedShift, S3 and Python',
          'Automated ETL jobs using Luigi to process millions of records of crawled websites and its accessibility data reducing manual workload by 30%',
          'Optimized the Data Warehouse and data pipelines for real-time Embedded Analytics by writing Python scripts and Stored Procedures to pre-calculate the metrics improving the loading time of the Tableau Dashboards by 25%'
        ]
      },
      {
        title: 'Business Intelligence Analyst - Intern',
        company: 'Optimal Solutions Group, LLC',
        location: 'College Park, MD',
        period: 'June 2020 - May 2021',
        description: 'Worked with US Department of Small Business Administration on data analysis and visualization projects.',
        achievements: [
          'Performed quantitative analysis on 10 years of Federal Procurement data to classify industries where Woman Owned Small Businesses are least represented in US',
          'Built Economic impact input-output models to measure gross economic impact for all the Small Businesses in the United States across 1200 industries using Python',
          'Presented results to Top federal officials using Power BI',
          'Analyzed survey results for SBA\'s Microloan Program and built dynamic visualizations to compare small business performance'
        ]
      },
      {
        title: 'Application Development Analyst',
        company: 'Accenture',
        location: 'Mumbai, India',
        period: 'July 2016 - September 2018',
        description: 'Delivered critical business solutions for a Fortune 500 client through data analysis and visualization.',
        achievements: [
          'Delivered critical business solutions for a Fortune 500 client through quantitative evaluation of historical data',
          'Developed complex SQL queries to extract large scale data to analyze customer segmentation, vertical, area, and forecast ROI for different Ads marketing channel',
          'Conducted pre-launch A/B Testing for new marketing campaigns to measure effectiveness of targeting strategies, leading to insights which enhanced existing CRM engagement and revenue growth by 15%',
          'Extracted and automated 1000+ vendor\'s data ETL pipeline using SQL and Python to perform large-scale data analysis and generate actionable business insights by building interactive dashboards'
        ]
      }
    ],
    education: [
      {
        degree: 'Master of Science in Information Technology & Management',
        school: 'The University of Texas at Dallas',
        location: 'Dallas, TX',
        period: 'July 2019 - June 2021'
      },
      {
        degree: 'Bachelor of Engineering in Electronics & Communication',
        school: 'Gujarat Technological University',
        location: 'Ahmedabad, India',
        period: 'June 2012 - June 2016'
      }
    ],
    certifications: [
      {
        name: 'AWS Data Analytics',
        issuer: 'Amazon Web Services',
        date: '2022'
      },
      {
        name: 'Tableau Desktop Certified Associate',
        issuer: 'Tableau',
        date: '2021'
      }
    ],
    awards: [
      {
        name: 'Accenture Outperforming Award',
        issuer: 'Accenture',
        year: '2017-18',
        description: 'Recognized for Best Autonomous Data practices in the Resources Industry'
      }
    ],
    leadership: [
      {
        role: 'Vice President - Marketing',
        organization: 'UT-Dallas Student Leadership Council',
        period: '2020-2021'
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
