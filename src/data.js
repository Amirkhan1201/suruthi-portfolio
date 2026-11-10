export const profile = {
  name: 'Suruthi S',
  role: 'SDET | QA Automation Engineer',
  location: 'Chennai, India',
  phone: '+91 99520 87238',
  phoneHref: 'tel:+919952087238',
  email: 'suruthi2817@gmail.com',
  linkedin: 'https://linkedin.com/in/suruthisaravanan',
  linkedinLabel: 'in/suruthisaravanan',
  photo: '/suruthi.jpg',
  resume: '/Suruthi_S_SDET_Resume.pdf',
  summary:
    'SDET with nearly 4 years of experience in test automation and quality engineering for prop-tech, banking and enterprise applications. I build automation frameworks from scratch in Python, own end-to-end testing of microservices from planning to release sign-off, mentor junior engineers, and am prototyping AI-assisted test automation.',
}

export const roles = ['SDET', 'QA Automation Engineer', 'Playwright + Python', 'API & BDD Testing']

export const stats = [
  { value: 800, suffix: '+', label: 'Automated test cases', code: 'expect(tests).toBeGreaterThan(800)' },
  { value: 55, suffix: '', label: 'REST APIs automated', code: 'expect(apis).toBe(55)' },
  { value: 1500, suffix: '+', label: 'Test cases designed', code: 'expect(cases).toBeGreaterThan(1500)' },
  { value: 4, suffix: '', label: 'Junior QAs mentored', code: 'expect(mentees).toBe(4)' },
]

export const experience = [
  {
    company: 'Property Automate',
    title: 'Software Test Engineer',
    period: 'Dec 2024 — Present',
    current: true,
    points: [
      'Architected UI and API automation frameworks using Playwright and Requests for PropGoto, a prop-tech rental and listing platform, growing coverage to 800+ automated test cases with reusable page objects.',
      'Automated 55 REST APIs across PropGoto Gateway services and micro applications, pairing Playwright UI flows with API checks on status codes, payloads and business rules.',
      'Implemented BDD suites with Behave (Gherkin feature files and step definitions) and Selenium WebDriver for Gateway business workflows.',
      'Validated backend data integrity in PostgreSQL with SQL queries, confirming UI actions and API responses persist correctly.',
      'Configured Jenkins CI/CD pipelines to run regression suites on builds, cutting regression time from 2 days to 4.5 hours, with Allure reporting and Git/GitHub.',
      'Led functional, integration and regression testing, driving defects through root-cause analysis and retesting to release sign-off for 2 production releases per month.',
      'Prototyping an AI-assisted test automation POC with Playwright MCP and Claude API, exploring LLM-driven browser interaction and AI-generated scenarios.',
      'Mentored 4 junior QA engineers in API testing, Playwright and Selenium automation, and defect reporting.',
    ],
    tags: ['Playwright', 'Requests', 'Behave BDD', 'PostgreSQL', 'Jenkins', 'Allure'],
  },
  {
    company: 'Xerago',
    title: 'Quality Analyst',
    period: 'Dec 2023 — Dec 2024',
    points: [
      'Automated functional flows for the Acquigo web application using Selenium WebDriver and Behave BDD in Python; wrote Python scripts validating GraphQL APIs and RPA workflows.',
      'Validated REST APIs with Postman and automated API checks for the Ujjivan Digital Account and Ujjivan Diksha banking projects.',
      'Managed QA for EDM campaigns, redirections, vanity URLs and staging releases on the Citibank account.',
      'Executed manual and automated regression for the LMS project.',
    ],
    tags: ['Selenium', 'Behave BDD', 'GraphQL', 'Postman'],
  },
  {
    company: 'Ramco Systems',
    title: 'Associate QA / Programmer Analyst',
    period: 'Jul 2022 — Jun 2023',
    points: [
      'Designed 1,500+ test cases for the ORICA project and automated key scenarios using Selenium WebDriver and Behave BDD.',
      'Automated validation of Malaysia Statutory modules and customer ticket handling.',
      'Conducted mobile QA of the Ramco Unify app using Appium; validated Employee Induction and HR Setup modules.',
    ],
    tags: ['Selenium', 'Appium', 'Behave BDD'],
  },
]

export const skills = [
  { group: 'Programming', items: ['Python', 'SQL', 'Data Structures & Algorithms'] },
  { group: 'UI Automation', items: ['Playwright (Python)', 'Selenium WebDriver', 'Appium (Mobile)'] },
  { group: 'BDD & Frameworks', items: ['Behave BDD', 'Gherkin', 'Page Object Model', 'Data-Driven Testing'] },
  { group: 'API Testing', items: ['REST API Automation', 'Python Requests', 'Postman', 'GraphQL'] },
  { group: 'Database', items: ['PostgreSQL', 'Database Validation'] },
  { group: 'CI/CD & Tools', items: ['Jenkins', 'CI/CD Pipelines', 'Git', 'GitHub', 'Allure Reports'] },
  { group: 'AI in QA', items: ['Playwright MCP', 'Claude API', 'AI-Assisted Automation (POC)'], highlight: true },
  { group: 'System Design', items: ['Fundamentals', 'HLD', 'LLD'] },
  {
    group: 'QA Practices',
    items: ['Functional', 'Regression', 'Integration', 'End-to-End', 'Release Validation', 'Defect Lifecycle', 'Root-Cause Analysis'],
  },
]

export const education = [
  { degree: 'Master of Science in Information Technology', school: "Women's Christian College, Chennai", period: '2020 — 2022' },
  { degree: 'Bachelor of Science in Mathematics', school: 'Madras Christian College, Chennai', period: '2017 — 2020' },
]
