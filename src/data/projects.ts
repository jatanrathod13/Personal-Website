export const projects = [
  {
    id: 'cms-data-warehouse',
    title: 'CMS Website Governance Data Warehouse',
    description:
      "Designed and implemented a comprehensive data warehouse for the Centre for Medicare and Medicaid services' (CMS) Website Governance Project, enabling efficient analysis of website accessibility and compliance data.",
    image: '/images/data-warehouse.jpg',
    technologies: ['Spark', 'RedShift', 'S3', 'Python', 'SQL', 'Tableau'],
    category: 'Data Engineering',
    featured: true,
    details: {
      challenge:
        'CMS needed a centralized data warehouse to store and analyze data from 6 primary sources, including website crawl data, accessibility metrics, and compliance information.',
      solution:
        'Designed a scalable data warehouse architecture and implemented ETL pipelines to ingest, transform, and load data from multiple sources.',
      results: [
        'Reduced data processing time by 30%',
        'Improved dashboard loading time by 25%',
        'Enabled real-time embedded analytics',
      ],
      implementation:
        'Used Spark for data processing, RedShift for data warehousing, S3 for storage, and Python for ETL scripts. Implemented Luigi for workflow automation.',
    },
  },
  {
    id: 'luigi-etl-automation',
    title: 'Automated ETL Pipeline with Luigi',
    description:
      'Developed an automated ETL pipeline using Luigi to process millions of records of crawled websites and accessibility data, significantly reducing manual workload.',
    image: '/images/etl-pipeline.jpg',
    technologies: ['Python', 'Luigi', 'AWS S3', 'RedShift', 'SQL'],
    category: 'Data Engineering',
    featured: true,
    details: {
      challenge:
        'Processing millions of records of crawled websites and accessibility data manually was time-consuming and error-prone.',
      solution:
        'Implemented Luigi, a Python-based workflow automation tool, to create a robust ETL pipeline that automatically processes data from multiple sources.',
      results: [
        'Reduced manual workload by 30%',
        'Increased data processing reliability',
        'Enabled scheduled data updates',
      ],
      implementation:
        'Created modular Luigi tasks for each step of the ETL process, with dependencies and error handling. Integrated with AWS S3 for storage and RedShift for data warehousing.',
    },
  },
  {
    id: 'economic-impact-model',
    title: 'Small Business Economic Impact Model',
    description:
      'Built economic impact input-output models to measure gross economic impact for small businesses across 1200 industries in the United States.',
    image: '/images/economic-model.jpg',
    technologies: [
      'Python',
      'Power BI',
      'Statistical Analysis',
      'Data Modeling',
    ],
    category: 'Data Analysis',
    featured: false,
    details: {
      challenge:
        'The US Department of Small Business Administration needed to quantify the economic impact of small businesses across different industries.',
      solution:
        'Developed input-output economic models using Python to analyze the impact of small businesses across 1200 industries.',
      results: [
        'Presented findings to top federal officials',
        'Provided data-driven insights for policy decisions',
        'Created interactive Power BI dashboards for analysis',
      ],
      implementation:
        'Used Python for data processing and statistical analysis, and Power BI for visualization and reporting.',
    },
  },
  {
    id: 'wosb-analysis',
    title: 'Woman-Owned Small Business Analysis',
    description:
      'Performed quantitative analysis on 10 years of Federal Procurement data to identify industries where Woman-Owned Small Businesses are underrepresented.',
    image: '/images/data-analysis.jpg',
    technologies: [
      'Python',
      'Statistical Methods',
      'Data Analysis',
      'Visualization',
    ],
    category: 'Data Analysis',
    featured: false,
    details: {
      challenge:
        'The SBA needed to identify industries where Woman-Owned Small Businesses (WOSBs) are least represented to inform policy decisions.',
      solution:
        'Analyzed 10 years of Federal Procurement data using statistical methods to classify industries by WOSB representation.',
      results: [
        'Identified key industries for WOSB program focus',
        'Provided actionable insights to SBA',
        'Supported evidence-based policy making',
      ],
      implementation:
        'Used Python for data cleaning, analysis, and statistical modeling. Created visualizations to communicate findings effectively.',
    },
  },
  {
    id: 'marketing-analytics',
    title: 'Marketing Campaign Analytics Platform',
    description:
      'Developed a marketing analytics platform for a Fortune 500 client to analyze customer segmentation and forecast ROI for different marketing channels.',
    image: '/images/marketing-analytics.jpg',
    technologies: ['SQL', 'Python', 'A/B Testing', 'Dashboard Development'],
    category: 'Business Intelligence',
    featured: false,
    details: {
      challenge:
        'A Fortune 500 client needed to optimize marketing campaigns and improve ROI across different channels.',
      solution:
        'Built a comprehensive analytics platform to analyze customer segmentation, evaluate marketing channels, and conduct A/B testing.',
      results: [
        'Enhanced CRM engagement by 15%',
        'Improved marketing ROI',
        'Enabled data-driven campaign decisions',
      ],
      implementation:
        'Developed complex SQL queries for data extraction, used Python for analysis, and implemented A/B testing methodologies to measure campaign effectiveness.',
    },
  },
  {
    id: 'vendor-etl-pipeline',
    title: 'Vendor Data ETL Pipeline',
    description:
      'Created an automated ETL pipeline to process data from over 1000 vendors, enabling large-scale data analysis and interactive dashboard reporting.',
    image: '/images/vendor-etl.jpg',
    technologies: ['SQL', 'Python', 'ETL', 'Dashboard Development'],
    category: 'Data Engineering',
    featured: false,
    details: {
      challenge:
        'Managing and analyzing data from over 1000 vendors was manual and inefficient.',
      solution:
        'Developed an automated ETL pipeline to extract, transform, and load vendor data for analysis and reporting.',
      results: [
        'Streamlined data processing workflow',
        'Generated actionable business insights',
        'Created interactive dashboards for stakeholders',
      ],
      implementation:
        'Used SQL for data extraction, Python for transformation logic, and built interactive dashboards for data visualization and analysis.',
    },
  },
]
