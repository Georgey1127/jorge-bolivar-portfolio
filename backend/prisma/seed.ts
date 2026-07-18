import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const connectionString = process.env['DATABASE_URL'];

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined.');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.contactMessage.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.skillCategory.deleteMany();
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        id: 'stock-market-candlestick-app',
        title: 'Stock Market Candlestick Chart Application',
        shortDescription:
          'C#/.NET application that processes CSV stock data and generates candlestick charts.',
        description:
          'A data processing and visualization application built in Visual Studio using C# and .NET. The app reads CSV stock market data, validates records, performs calculations, and generates candlestick charts for stock trend analysis.',
        technologies: [
          'C#',
          '.NET',
          'Visual Studio',
          'CSV Processing',
          'Data Visualization',
        ],
        githubUrl: '',
        liveUrl: '',
        highlights: [
          'Implemented CSV parsing, validation, and calculation logic.',
          'Generated candlestick charts for historical stock analysis.',
          'Applied object oriented programming, debugging, testing, and documentation.',
        ],
        sortOrder: 1,
      },
      {
        id: 'incollege-networking-app',
        title: 'InCollege Professional Networking App',
        shortDescription:
          'LinkedIn style professional networking application for college students.',
        description:
          'A team based academic project developed at USF using COBOL, Git, GitHub, VS Code, and Docker containers. The team followed Scrum practices and rotated roles across Scrum Master, Developer, and Tester.',
        technologies: ['COBOL', 'Git', 'GitHub', 'Docker', 'Scrum'],
        githubUrl: '',
        liveUrl: '',
        highlights: [
          'Developed professional networking features for college students.',
          'Worked through sprint planning, user stories, demos, and testing.',
          'Collaborated across development, testing, documentation, and team communication.',
        ],
        sortOrder: 2,
      },
    ],
  });

  await prisma.skillCategory.createMany({
    data: [
      {
        title: 'Programming Languages',
        skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C#', 'C', 'COBOL'],
        sortOrder: 1,
      },
      {
        title: 'Frontend Development',
        skills: [
          'Angular',
          'React',
          'HTML',
          'CSS',
          'SCSS',
          'TailwindCSS',
          'Responsive UI',
        ],
        sortOrder: 2,
      },
      {
        title: 'Backend and APIs',
        skills: [
          'REST APIs',
          'API Integration',
          'Backend Integration',
          'MySQL',
          'Data Flow',
        ],
        sortOrder: 3,
      },
      {
        title: 'AI and Automation',
        skills: [
          'OpenAI APIs',
          'LLM Applications',
          'Prompt Engineering',
          'Workflow Automation',
        ],
        sortOrder: 4,
      },
      {
        title: 'Tools',
        skills: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Jira', 'Docker'],
        sortOrder: 5,
      },
    ],
  });

  await prisma.experience.createMany({
    data: [
      {
        company: 'Icubo Solutions',
        role: 'AI & Automation Developer',
        location: 'Remote',
        startDate: 'June 2025',
        endDate: 'Present',
        bullets: [
          'Developed and deployed AI applications for customer support and debt collection workflows using OpenAI APIs, prompt engineering, REST API integrations, and backend connected services.',
          'Built, tested, and improved chatbot and voicebot automation flows by reviewing conversation behavior, debugging workflow logic, adjusting prompts, and validating AI responses against expected outcomes.',
          'Documented technical workflows, integration behavior, and automation improvements while optimizing systems that reduced manual task time by 40% and improved operational efficiency by 30%.',
        ],
        sortOrder: 1,
      },
      {
        company: 'Olympus / Artemisa',
        role: 'Frontend Developer',
        location: 'Remote',
        startDate: 'July 2024',
        endDate: 'January 2025',
        bullets: [
          'Developed responsive web application interfaces using Angular, TypeScript, HTML, CSS, and TailwindCSS for dashboards, analytics views, reporting workflows, and internal platform features.',
          'Integrated frontend components with REST APIs and backend systems, improving data access, application functionality, user workflows, and communication between the interface and server side services.',
          'Collaborated with UI/UX, data, and technical teams to translate product requirements into functional pages and reusable components while improving usability, performance, and visual consistency.',
        ],
        sortOrder: 2,
      },
      {
        company: 'Consware',
        role: 'Frontend Developer Intern',
        location: 'Onsite',
        startDate: 'June 2024',
        endDate: 'July 2024',
        bullets: [
          'Developed frontend components for logistics and transportation management applications using Angular, HTML, CSS, TypeScript, and modern web development practices.',
          'Supported API connected interface features by testing UI behavior, validating displayed data, debugging frontend issues, and improving user workflows across operational screens.',
          'Collaborated with senior developers and technical team members to review requirements, implement assigned features, document changes, and improve application usability, reliability, and performance.',
        ],
        sortOrder: 3,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('Database seeded successfully.');
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });