export const projects = [
  {
    id: 'iaccessible-platform',
    title: 'iAccessible - Federal Website Accessibility Platform',
    description:
      'Developed an enterprise-grade platform for automated end-to-end accessibility testing of federal agency websites to ensure Section 508 compliance, implemented across the United States Department of Education and the Centers for Medicare & Medicaid Services (CMS).',
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
        'Successfully implemented across the United States Department of Education and all 16 Centers for Medicare & Medicaid Services (CMS) jurisdictions',
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
      'Natural Language Processing (NLP)',
      'Retrieval-Augmented Generation (RAG)',
      'Semantic Search',
      'SQL',
      'Data Pipelines',
      'Large Language Models (LLMs)',
    ],
    category: 'AI/ML',
    featured: true,
    details: {
      challenge:
        'The federal procurement process was inefficient, with agencies spending extensive time on market research and vendors struggling to identify relevant opportunities among thousands of solicitations.',
      solution:
        'Developed AcquisitionAI (acquisitionai.org), a comprehensive platform with data pipelines collecting data from System for Award Management (SAM), Federal Procurement Data System (FPDS), Dynamic Small Business Search (DSBS), and other acquisition sources, integrated with advanced semantic search and a Retrieval-Augmented Generation (RAG) based chatbot.',
      results: [
        'Reduced market research time for agencies by 65%',
        'Improved vendor opportunity matching accuracy by 78%',
        'Streamlined contract and proposal writing with AI assistance',
        'Created a unified ecosystem for federal procurement intelligence',
      ],
      implementation:
        'Built backend systems for automated data collection from federal procurement sources, implemented Natural Language Processing (NLP) models for document processing, created a semantic search engine for matching vendors with opportunities, and developed a Retrieval-Augmented Generation (RAG) based chatbot for answering procurement questions. Integrated all components into a cohesive web application.',
    },
  },
  {
    id: 'hubzone-economic-impact',
    title: 'SBA HUBZone Economic Impact Study',
    description:
      "Conducted comprehensive economic impact analysis for the Small Business Administration's (SBA) Historically Underutilized Business Zone (HUBZone) program, developing input-output models to measure job creation, economic output, and community development in economically disadvantaged areas.",
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
        'The Small Business Administration (SBA) needed to quantify the economic impact of the Historically Underutilized Business Zone (HUBZone) program across disadvantaged communities but lacked data-driven models to measure job creation, business growth, and economic output.',
      solution:
        'Developed comprehensive economic input-output models using the Herfindahl-Hirschman Index (HHI) and K-means clustering to analyze economic impact and identify opportunities in historically underutilized business zones.',
      results: [
        'Quantified job creation and economic output per dollar invested in HUBZone businesses',
        'Identified optimal industry sectors for maximum economic impact in disadvantaged communities',
        'Provided evidence-based recommendations that influenced policy decisions',
        'Presented findings to senior Small Business Administration (SBA) officials that shaped program direction',
      ],
      implementation:
        'Applied economic input-output modeling to quantify multiplier effects, used K-means clustering to identify similar economic zones, implemented Herfindahl-Hirschman Index (HHI) for measuring market concentration, and created interactive dashboards to visualize economic impact across geographic regions.',
    },
  },
  {
    id: 'wosb-analysis',
    title: 'Woman-Owned Small Business Industry Analysis',
    description:
      "Led quantitative analysis on 10 years of Federal Procurement data to identify industries where Woman-Owned Small Businesses (WOSBs) are underrepresented, directly informing the Small Business Administration's (SBA) policy decisions for set-aside program eligibility.",
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
        'The Small Business Administration (SBA) needed to identify specific industries where Women-Owned Small Businesses (WOSBs) were underrepresented to designate them as eligible for the WOSB Federal Contracting Program set-asides.',
      solution:
        'Analyzed 10 years of Federal Procurement data using advanced statistical methods to classify industries by WOSB representation, creating a data-driven approach to program eligibility.',
      results: [
        'Identified 92 North American Industry Classification System (NAICS) codes where WOSBs were substantially underrepresented',
        'Provided actionable insights that directly informed federal set-aside policy',
        'Created a repeatable methodology for ongoing program evaluation',
        'Supported evidence-based policy making with comprehensive data analysis',
      ],
      implementation:
        'Extracted and cleaned procurement data from federal databases, performed statistical comparisons of Women-Owned Small Business (WOSB) participation rates against industry benchmarks, applied significance testing to identify underrepresentation, and developed visualization tools to communicate findings to policymakers.',
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
        'The United States Department of Education needed to transform complex National Assessment of Educational Progress (NAEP) assessment data into accessible, visually appealing reports for educators, policymakers, and the public.',
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
      'Conducted comprehensive analysis on the impact of COVID-19 on educational institutions for the United States Department of Education, examining learning outcomes, resource allocation, and institutional adaptations to pandemic conditions.',
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
        'The United States Department of Education needed to understand the multifaceted impact of COVID-19 on schools, including learning outcomes, digital divide issues, and effectiveness of remote learning implementations.',
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
      'Developed an AI-powered system for the Federal Aviation Administration (FAA) to analyze and classify public comments and complaints regarding airport operations, streamlining the process from data collection to decision-making.',
    technologies: [
      'Natural Language Processing (NLP)',
      'Text Classification',
      'Clustering',
      'Python',
      'AI/ML',
    ],
    category: 'AI/ML',
    featured: false,
    details: {
      challenge:
        'The Federal Aviation Administration (FAA) received thousands of unstructured public comments and complaints about airport operations that required manual processing, leading to delays in identifying and addressing critical issues.',
      solution:
        'Created an automated comments processing tool using Natural Language Processing (NLP) and machine learning to classify, cluster, and analyze public feedback, providing actionable insights to decision-makers.',
      results: [
        'Reduced comment processing time by 85%',
        'Improved issue categorization accuracy to 92%',
        'Enabled real-time trend analysis of public concerns',
        'Streamlined the feedback-to-action process for airport improvements',
      ],
      implementation:
        'Implemented Natural Language Processing (NLP) techniques for text preprocessing, developed machine learning models for comment classification, created clustering algorithms to identify common themes, and built a dashboard for visualizing feedback trends and sentiment analysis.',
    },
  },
  {
    id: 'accenture-etl-reporting',
    title: 'Enterprise ERP Data Pipeline & Reporting System',
    description:
      'Led the development of a comprehensive Extract, Transform, Load (ETL) data pipeline and reporting solution for a Fortune 500 client at Accenture, transforming raw Enterprise Resource Planning (ERP) data into actionable business intelligence through optimized SQL queries and automated report generation.',
    technologies: [
      'Extract, Transform, Load (ETL)',
      'SQL',
      'Data Modeling',
      'Reporting',
      'Business Intelligence',
    ],
    category: 'Data Engineering',
    featured: false,
    details: {
      challenge:
        'A Fortune 500 client needed to transform large volumes of raw Enterprise Resource Planning (ERP) data into actionable insights but struggled with inefficient queries, siloed data sources, and manual reporting processes.',
      solution:
        'Designed and implemented an end-to-end Extract, Transform, Load (ETL) pipeline with optimized SQL queries, data transformation logic, and automated reporting to provide timely, accurate business intelligence.',
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
  {
    id: 'document-ai-rag',
    title: 'DocuMind: Document Intelligence Platform',
    description:
      'Developed an advanced document intelligence platform using Retrieval-Augmented Generation (RAG) and Large Language Models to extract, analyze, and generate insights from enterprise document collections.',
    technologies: [
      'Python',
      'Retrieval-Augmented Generation (RAG)',
      'Large Language Models (LLMs)',
      'Vector Databases',
      'FastAPI',
      'React',
    ],
    category: 'AI/ML',
    featured: true,
    details: {
      challenge:
        'Enterprise organizations struggle to extract meaningful insights from massive document repositories containing unstructured data across various formats, leading to knowledge silos and inefficient information retrieval.',
      solution:
        'Built DocuMind, a comprehensive document intelligence platform leveraging Retrieval-Augmented Generation (RAG) architecture with fine-tuned Large Language Models to process, index, and enable natural language querying of enterprise document collections.',
      results: [
        'Reduced information retrieval time by 85% compared to traditional search methods',
        'Improved answer accuracy by 76% using context-aware RAG architecture',
        'Enabled cross-document insights previously hidden in knowledge silos',
        'Deployed to 3 enterprise clients, processing over 2 million documents',
      ],
      implementation:
        'Implemented a multi-stage pipeline for document processing: 1) Document intake and preprocessing using specialized parsers for various formats, 2) Text chunking and embedding generation with optimized contextual awareness, 3) Vector database storage for efficient retrieval, 4) Custom RAG implementation with LLM integration for high-quality responses, and 5) React frontend with real-time document exploration capabilities.',
    },
  },
  {
    id: 'predictive-maintenance-ml',
    title: 'PredictTech: Industrial Equipment Maintenance AI',
    description:
      'Created an AI-driven predictive maintenance platform that uses machine learning to analyze sensor data from industrial equipment, predict failures before they occur, and optimize maintenance schedules.',
    technologies: [
      'Python',
      'TensorFlow',
      'Time Series Analysis',
      'IoT',
      'Sensor Fusion',
      'Cloud Computing',
    ],
    category: 'AI/ML',
    featured: true,
    details: {
      challenge:
        'Manufacturing companies face significant costs from unexpected equipment failures, with traditional scheduled maintenance being either too frequent (increasing downtime) or too infrequent (risking catastrophic failures).',
      solution:
        'Developed PredictTech, a machine learning system that ingests multi-sensor data streams from industrial equipment, applies advanced time series analysis and deep learning to predict failure probabilities, and recommends optimal maintenance schedules.',
      results: [
        'Reduced unplanned downtime by 72% in pilot manufacturing plants',
        'Decreased maintenance costs by 34% through optimized scheduling',
        'Extended average equipment lifetime by 15-20%',
        'Achieved 92% accuracy in predicting failures up to 2 weeks in advance',
      ],
      implementation:
        'Built a comprehensive platform with IoT sensor integration, real-time data processing pipelines, custom neural network architectures for time series forecasting, anomaly detection algorithms, and a maintenance recommendation engine. Implemented a secure cloud infrastructure with edge computing capabilities for facilities with limited connectivity.',
    },
  },
  {
    id: 'healthcare-nlp-analytics',
    title: 'MediScribe: Healthcare NLP Analytics Platform',
    description:
      'Built a Natural Language Processing (NLP) system for healthcare providers that automatically extracts critical information from clinical notes, enabling improved patient insights, faster diagnosis, and better care coordination.',
    technologies: [
      'Python',
      'BERT',
      'Named Entity Recognition',
      'Healthcare NLP',
      'Relation Extraction',
      'FHIR Integration',
    ],
    category: 'AI/ML',
    featured: false,
    details: {
      challenge:
        'Healthcare providers were struggling with information overload in electronic health records (EHRs), with critical patient information often buried in unstructured clinical notes leading to missed diagnoses and inefficient care coordination.',
      solution:
        'Developed MediScribe, a specialized NLP system using healthcare-fine-tuned language models to extract, structure, and summarize clinical data from unstructured notes, with integration into existing EHR systems.',
      results: [
        'Reduced physician documentation review time by 63%',
        'Improved diagnosis accuracy by identifying missed conditions in 18% of complex cases',
        'Enhanced care coordination through automated clinical summary generation',
        'Achieved 94% accuracy in medical entity extraction with HIPAA-compliant processing',
      ],
      implementation:
        'Implemented custom NLP pipelines with domain-specific models for medical terminology extraction, negation detection, temporal reasoning, and relation extraction between medical entities. Built FHIR-compliant integration with major EHR systems, ensuring HIPAA compliance through secure processing architecture and data handling.',
    },
  },
  {
    id: 'fraud-detection-system',
    title: 'FraudShield: Financial Transaction Security Platform',
    description:
      'Designed and implemented an adaptive AI system for real-time fraud detection in financial transactions, combining supervised learning with anomaly detection to identify emerging fraud patterns while minimizing false positives.',
    technologies: [
      'Python',
      'Anomaly Detection',
      'XGBoost',
      'Isolation Forests',
      'Graph Neural Networks',
      'Stream Processing',
    ],
    category: 'AI/ML',
    featured: false,
    details: {
      challenge:
        'Financial institutions face evolving fraud tactics that traditional rule-based systems fail to detect, while machine learning approaches struggle with the extreme class imbalance and high cost of false positives in fraud detection.',
      solution:
        'Built FraudShield, a multi-model fraud detection system combining supervised classification with unsupervised anomaly detection, using graph-based features to detect coordinated fraud and adaptive feedback loops to maintain accuracy over time.',
      results: [
        'Increased fraud detection rate by 41% compared to previous rule-based systems',
        'Reduced false positive rate by 67%, significantly improving customer experience',
        'Detected novel fraud patterns within days rather than weeks of emergence',
        'Saved an estimated $4.2M in fraud losses during the first year of implementation',
      ],
      implementation:
        'Implemented a hybrid approach combining gradient-boosted trees for known fraud patterns, isolation forests and autoencoders for anomaly detection, and graph neural networks to identify networks of suspicious transactions. Built a real-time scoring engine processing thousands of transactions per second with sub-100ms latency, incorporating automated feedback loops for model updating.',
    },
  },
]
