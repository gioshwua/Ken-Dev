'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'Intelligent Recognition and Integrated Surveillance',
    des: 'Integrated Recognition Intelligent Surveillance (IRIS) AI technology for object detection, with a primary focus on monitoring equipment states (On/Off). By analyzing the frequency and duration of equipment usage, IRIS assists Lab Supervisors with automated data gathering and real-time monitoring capabilities',
    category: 'javascript - react - python- yolo',
    repo: 'https://github.com/Project-Iris-CV/.github/tree/main/profile'
  },
  {
    id: '2',
    title: 'BSU Alumni App Mobile',
    des: 'Alumni App Mobile is the mobile version of  web application that displays the credentials and accomplishments of Batangas State University graduates, it also keeps track of approaching News and Events that the university would be hosting. This application also includes a job section that gives graduates to potential employment prospects offered by Batangas State University.',
    category: 'angular-ionic',
    repo: 'https://github.com/gioshwua/AlmuniApp-Mobile'
  },
  {
    id: '3',
    title: 'Alumni App Project',
    des: "A simple alumni app project by  that can be used as a future reference for the university's alumni web-app. This alumni app includes the client side for the alumni and administrators that is made from bottom up.",
    category: 'vanilla javascript - php - python ',
    repo: 'https://github.com/hubymeme22/alumni-app-project'
  },
  {
    id: '5',
    title: 'React x Firebase CRUD',
    des: 'This project is a simple demonstration of how to use Firebase as a Backend-as-a-Service (BaaS) in a React application built with Vite. The primary goal is to showcase how Firebase can handle backend operations seamlessly. The application features a user creation form where you can input a name and age, and upon clicking the "Create User" button, the data is sent to Firebase.',
    category: 'javascript - react - firebase',
    repo: 'https://github.com/gioshwua/ReactFireB-CRUD-',
    link: 'https://dsds.vercel.app'
  },
  {
    id: '6',
    title: 'Batstate-U Tenants',
    des: 'Project Based Commission that Calculates electricity and water bill of the students staying at school dormitory',
    category: 'javascript - react - python',
    repo: 'https://github.com/hubymeme22/BatstateU-tenants',
    link: 'https://.vercel.app'
  },
  {
    id: '7',
    title: 'BSU OPCR Frontend',
    des: 'Office Performance Commitment and Review (OPCR) System, The Front end part of our project for Software Engineering subject',
    category: 'javascript - react ',
    repo: 'https://github.com/Sanjero20/bsu-opcr-frontend',
    link: 'https://mapbvsapp.vercel.app'
  },
  {
    id: '8',
    title: 'Campus Student Violation System',
    des: 'Developed a comprehensive repository system at BSU Alangilan Campus to track and record student violations of school regulations.',
    category: 'javascript - react - shell',
    repo: 'https://github.com/hubymeme22/Student-Violation-System',
    link: 'httdfduery/tree/main/02-react-query-issues-main'
  },
  {
    id: '9',
    title: 'LEVI-management-system',
    des: 'Reservation And Management System using Python',
    category: 'python',
    repo: 'https://github.com/gioshwua/LEVI-management-system',
    link: 'https://gidsdeandv/events-test-mern'
  },
  {
    id: '10',
    title: 'Simple Airbnb Clone',
    des: 'AirBnbClone side project using React (Course-Scrimba)',
    category: 'javascript - react',
    repo: 'https://github.com/jeandv/basement-challenge',
    link: 'https://basement-challenge-jeandv.vercel.app'
  },
  {
    id: '11',
    title: 'React Meme Generator ',
    des: 'React simple project in Scrimba course, generates random meme using the meme API',
    category: 'javascript - react',
    repo: 'https://github.com/jeandv/pokedex-next',
    link: 'https://pokedex-jeandv.vercel.app'
  },
  {
    id: '12',
    title: 'Open Jira',
    des: 'MERN project using TypeScript to learn how to do the main functionality of Jira.',
    category: 'next.js - node - express - mongodb',
    repo: 'https://github.com/jeandv/open-jira',
    link: 'https://open-jira-jeandv.vercel.app'
  },
  {
    id: '13',
    title: 'Clon Mercado Libre',
    des: 'This is one of the Angular challenges done in CADIF1 Academy.',
    category: 'typescript - angular - bootstrap',
    repo: 'https://github.com/jeandv/mercadolibre-des4',
    link: 'https://mercadolibre-des4.vercel.app'
  },
  {
    id: '14',
    title: 'Cadif1 App',
    des: 'This is one of the Ionic challenges done in CADIF1 Academy.',
    category: 'typescript - ionic - angular - scss',
    repo: 'https://github.com/jeandv/pract-ionic',
    link: 'https://www.youtube.com/watch?v=ysIM5sAkdAY'
  },
  {
    id: '15',
    title: 'Electron.js Projects',
    des: 'All my projects using Electron.',
    category: 'electron.js',
    repo: 'https://github.com/jeandv/pract-electronjs',
    link: 'https://github.com/jeandv/pract-electronjs'
  },
  {
    id: '16',
    title: 'Node Backend Projects',
    des: 'Terminal projects (console), rest servers, api rests, etc.',
    category: 'node - express - mongodb',
    repo: 'https://github.com/jeandv/pract-nodejs',
    link: 'https://github.com/jeandv/pract-nodejs'
  },
  {
    id: '17',
    title: 'JavaScript Algorithms',
    des: 'Practice, exercises and algorithmic challenges using JavaScript and TypeScript.',
    category: 'javascript - typescript',
    repo: 'https://github.com/jeandv/algorithms-js',
    link: 'https://github.com/jeandv/algorithms-js'
  },
  {
    id: '18',
    title: 'PHP Ecommerce',
    des: 'Freelancer Ecommerce Project using PHP and MySQL database.',
    category: 'php - mysql - bootstrap',
    repo: 'https://github.com/jeandv/shopphp-paypal',
    link: 'https://github.com/jeandv/shopphp-paypal'
  }
];

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) =>
    project.category.includes(projectSearch.toLowerCase())
  );

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch.map(({ id, title, des, category, repo, link }) => (
          <CardProject
            key={id}
            title={title}
            des={des}
            category={category}
            repo={repo}
            link={link}
          />
        ))}
      </article>
    </>
  );
};

export default SearchAllProjects;
