export const projects = [
  {
    id: 'iaccessible-platform',
    title: 'iAccessible - Federal Website Accessibility Platform',
    description:
      'Developed an enterprise-grade platform for automated end-to-end accessibility testing of federal agency websites to ensure Section 508 compliance, implemented across Department of Education and Centers for Medicare & Medicaid Services.',
    technologies: [
      'Python',
      'Microservices',
      'Prefect',
      'Data Pipelines',
      'SQL',
      'Visualization',
    ],
    category: 'Data Engineering',
    featured: true,
    details: {
      challenge:
        'Federal agencies needed to assess Section 508 compliance across thousands of web pages but lacked efficient tools to automate the testing process, identify issues, and prioritize remediation efforts.',
      solution:
        'Built a comprehensive platform with multi-threaded crawlers, microservice architecture, and workflow orchestration using Prefect to systematically assess accessibility compliance of federal websites.',
      results: [
        'Successfully implemented across the Department of Education and all 16 CMS jurisdictions',
        'Increased compliance detection rate by 87% compared to manual testing',
        'Reduced compliance assessment time from weeks to hours',
        'Enabled agencies to prioritize remediation efforts based on impact and severity',
      ],
      implementation:
        'Developed multi-threaded crawlers to efficiently scan websites, created microservices for individual accessibility checks, built data pipelines for results processing, and implemented dashboards for agency-wide compliance monitoring. Used Prefect for workflow orchestration to manage the end-to-end testing process.',
    },
  },
  {
    id: 'acquisitionai',
    title: 'AcquisitionAI - Federal Market Intelligence Platform',
    description:
      'Built a sophisticated AI-powered platform for federal procurement lifecycle optimization, helping government agencies conduct rapid market analyses and enabling vendors to find relevant procurement opportunities.',
    technologies: [
      'Python',
      'NLP',
      'RAG',
      'Semantic Search',
      'SQL',
      'Data Pipelines',
      'LLMs',
    ],
    category: 'AI/ML',
    featured: true,
    details: {
      challenge:
        'The federal procurement process was inefficient, with agencies spending extensive time on market research and vendors struggling to identify relevant opportunities among thousands of solicitations.',
      solution:
        'Developed AcquisitionAI (acquisitionai.org), a comprehensive platform with data pipelines collecting data from SAM, FPDS, DSBS, and other acquisition sources, integrated with advanced semantic search and a RAG-based chatbot.',
      results: [
        'Reduced market research time for agencies by 65%',
        'Improved vendor opportunity matching accuracy by 78%',
        'Streamlined contract and proposal writing with AI assistance',
        'Created a unified ecosystem for federal procurement intelligence',
      ],
      implementation:
        'Built backend systems for automated data collection from federal procurement sources, implemented NLP models for document processing, created a semantic search engine for matching vendors with opportunities, and developed a RAG-based chatbot for answering procurement questions. Integrated all components into a cohesive web application.',
    },
  },
  {
    id: 'hubzone-economic-impact',
    title: 'SBA HUBZone Economic Impact Study',
    description:
      "Conducted comprehensive economic impact analysis for the Small Business Administration's HUBZone program, developing input-output models to measure job creation, economic output, and community development in economically disadvantaged areas.",
    technologies: [
      'Python',
      'Statistical Analysis',
      'Economic Modeling',
      'Data Visualization',
      'Clustering',
    ],
    category: 'Data Analysis',
    featured: true,
    details: {
      challenge:
        'The SBA needed to quantify the economic impact of the HUBZone program across disadvantaged communities but lacked data-driven models to measure job creation, business growth, and economic output.',
      solution:
        'Developed comprehensive economic input-output models using the Herfindahl-Hirschman Index (HHI) and K-means clustering to analyze economic impact and identify opportunities in historically underutilized business zones.',
      results: [
        'Quantified job creation and economic output per dollar invested in HUBZone businesses',
        'Identified optimal industry sectors for maximum economic impact in disadvantaged communities',
        'Provided evidence-based recommendations that influenced policy decisions',
        'Presented findings to senior SBA officials that shaped program direction',
      ],
      implementation:
        'Applied economic input-output modeling to quantify multiplier effects, used K-means clustering to identify similar economic zones, implemented HHI for measuring market concentration, and created interactive dashboards to visualize economic impact across geographic regions.',
    },
  },
  {
    id: 'wosb-analysis',
    title: 'Woman-Owned Small Business Industry Analysis',
    description:
      "Led quantitative analysis on 10 years of Federal Procurement data to identify industries where Woman-Owned Small Businesses (WOSBs) are underrepresented, directly informing SBA's policy decisions for set-aside program eligibility.",
    technologies: [
      'Python',
      'Statistical Methods',
      'Data Mining',
      'Visualization',
      'SQL',
    ],
    category: 'Data Analysis',
    featured: false,
    details: {
      challenge:
        'The SBA needed to identify specific industries where Women-Owned Small Businesses were underrepresented to designate them as eligible for the WOSB Federal Contracting Program set-asides.',
      solution:
        'Analyzed 10 years of Federal Procurement data using advanced statistical methods to classify industries by WOSB representation, creating a data-driven approach to program eligibility.',
      results: [
        'Identified 92 NAICS codes where WOSBs were substantially underrepresented',
        'Provided actionable insights that directly informed federal set-aside policy',
        'Created a repeatable methodology for ongoing program evaluation',
        'Supported evidence-based policy making with comprehensive data analysis',
      ],
      implementation:
        'Extracted and cleaned procurement data from federal databases, performed statistical comparisons of WOSB participation rates against industry benchmarks, applied significance testing to identify underrepresentation, and developed visualization tools to communicate findings to policymakers.',
    },
  },
  {
    id: 'naep-scorecard',
    title: 'NAEP Scorecard Report Booklet',
    description:
      "Designed and developed the statistical analysis system and reporting framework for the Department of Education's National Assessment of Educational Progress (NAEP) Scorecard, transforming complex educational data into accessible reports for stakeholders.",
    technologies: [
      'Statistical Analysis',
      'Data Visualization',
      'Reporting',
      'Python',
      'R',
    ],
    category: 'Data Analysis',
    featured: false,
    details: {
      challenge:
        'The Department of Education needed to transform complex NAEP assessment data into accessible, visually appealing reports for educators, policymakers, and the public.',
      solution:
        'Developed an end-to-end statistical analysis and reporting system that processed raw assessment data and generated comprehensive scorecard booklets with meaningful visualizations and insights.',
      results: [
        'Created standardized reporting framework adopted across multiple educational assessments',
        'Improved data accessibility for non-technical stakeholders',
        'Enabled data-driven decision making in educational policy',
        'Streamlined the reporting process, reducing production time by 40%',
      ],
      implementation:
        'Applied statistical methods to analyze educational performance metrics, developed automated data processing pipelines, created templates for consistent report generation, and implemented interactive visualizations to highlight key performance indicators and trends.',
    },
  },
  {
    id: 'covid-impact-education',
    title: 'Impact of COVID-19 on Schools Analysis',
    description:
      'Conducted comprehensive analysis on the impact of COVID-19 on educational institutions for the Department of Education, examining learning outcomes, resource allocation, and institutional adaptations to pandemic conditions.',
    technologies: [
      'Data Analysis',
      'Statistical Modeling',
      'Survey Analysis',
      'Visualization',
      'Python',
    ],
    category: 'Data Analysis',
    featured: false,
    details: {
      challenge:
        'The Department of Education needed to understand the multifaceted impact of COVID-19 on schools, including learning outcomes, digital divide issues, and effectiveness of remote learning implementations.',
      solution:
        'Designed and implemented a comprehensive research approach combining survey data analysis, statistical modeling, and qualitative assessment to measure pandemic effects across diverse educational settings.',
      results: [
        'Identified key factors affecting remote learning success',
        'Quantified digital divide impacts across socioeconomic groups',
        'Provided evidence-based recommendations for resource allocation',
        'Supported development of resilience strategies for future disruptions',
      ],
      implementation:
        'Collected and analyzed survey data from educational institutions, applied statistical methods to identify significant impact factors, developed predictive models for learning outcome changes, and created visualization dashboards to communicate findings to educational stakeholders.',
    },
  },
  {
    id: 'faa-comments-processing',
    title: 'FAA Comments Processing Tool',
    description:
      'Developed an AI-powered system for the Federal Aviation Administration to analyze and classify public comments and complaints regarding airport operations, streamlining the process from data collection to decision-making.',
    technologies: [
      'NLP',
      'Text Classification',
      'Clustering',
      'Python',
      'AI/ML',
    ],
    category: 'AI/ML',
    featured: false,
    details: {
      challenge:
        'The FAA received thousands of unstructured public comments and complaints about airport operations that required manual processing, leading to delays in identifying and addressing critical issues.',
      solution:
        'Created an automated comments processing tool using NLP and machine learning to classify, cluster, and analyze public feedback, providing actionable insights to decision-makers.',
      results: [
        'Reduced comment processing time by 85%',
        'Improved issue categorization accuracy to 92%',
        'Enabled real-time trend analysis of public concerns',
        'Streamlined the feedback-to-action process for airport improvements',
      ],
      implementation:
        'Implemented NLP techniques for text preprocessing, developed machine learning models for comment classification, created clustering algorithms to identify common themes, and built a dashboard for visualizing feedback trends and sentiment analysis.',
    },
  },
  {
    id: 'accenture-etl-reporting',
    title: 'Enterprise ERP Data Pipeline & Reporting System',
    description:
      'Led the development of a comprehensive ETL data pipeline and reporting solution for a Fortune 500 client at Accenture, transforming raw ERP data into actionable business intelligence through optimized SQL queries and automated report generation.',
    technologies: [
      'ETL',
      'SQL',
      'Data Modeling',
      'Reporting',
      'Business Intelligence',
    ],
    category: 'Data Engineering',
    featured: false,
    details: {
      challenge:
        'A Fortune 500 client needed to transform large volumes of raw ERP data into actionable insights but struggled with inefficient queries, siloed data sources, and manual reporting processes.',
      solution:
        'Designed and implemented an end-to-end ETL pipeline with optimized SQL queries, data transformation logic, and automated reporting to provide timely, accurate business intelligence.',
      results: [
        'Reduced report generation time from days to hours',
        'Improved data accuracy by implementing robust validation rules',
        'Increased system performance by optimizing SQL queries',
        'Enabled data-driven decision making across business units',
      ],
      implementation:
        'Situation: The client was experiencing delays in financial reporting due to inefficient data processing. Task: I was assigned to optimize their data pipeline and reporting system. Action: Analyzed existing queries and identified bottlenecks, redesigned the data model for better performance, implemented incremental loading patterns, and created automated validation checks. Result: The new system reduced processing time by 68% while improving data quality and expanding reporting capabilities.',
    },
  },
]
