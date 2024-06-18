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
    link: 'https://pokedexfd-jeandv.vercel.app'
  },
  {
    id: '12',
    title: 'React Markdown Editor',
    des: 'Markdown editor, Practice and enhance using markdown',
    category: 'javascript - react',
    repo: 'https://github.com/gioshwua/React-Markdown-Editor',
    link: 'https://open-jifdfra-jeandv.vercel.app'
  },
  {
    id: '13',
    title: 'Intrusion Detection in WSNs using Linear Regression',
    des: 'Using the regression dataset from UCI , I built a transformer model that predicts the number of Barriers in  Intrusion detection in WSNs using simple Linear Regression ',
    category:
      'python - jupyther notebook - machine learning - linear regression',
    repo: 'https://github.com/gioshwua/Linear-Regression-',
    link: 'https://mercdsddolibre-des4.vercel.app'
  },
  {
    id: '14',
    title: 'Ecoli Dataset prediction using  Random Forest Classifier',
    des: 'Used the dataset Ecoli from UCI and used Random Forest Classifier which is an ensemble Learning to predict the Ecoli Class',
    category: 'python - jupyther notebook - machine learning - random forest',
    repo: 'https://github.com/gioshwua/EColi-Random-Forest-Prediction',
    link: 'https://www.youtubefdf.com/watch?v=ysIM5sAkdAY'
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
