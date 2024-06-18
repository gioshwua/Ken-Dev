import CurrentTimeLineExp, {
  calculateDuration
} from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            I am Kenneth Joshua O. Reaño, a Junior Software Developer with a
            passion for creating user-friendly and efficient software solutions.
            With a strong academic background, having earned a Bachelor of
            Science in Computer Science from Batangas State University (Cum
            Laude, 1.53 GWA), I possess a solid foundation in areas such as Data
            Structure and Algorithm, Object-Oriented Programming, Software
            Engineering, Machine Learning, and Information Management.
          </p>

          <p className="text-base text-gray-400">
            I recently gained valuable experience as a Junior Software Developer
            at CP Health Innovations, where I developed user-friendly frontend
            interfaces for a collaborative health program management system. I
            integrated advanced data analytics tools to monitor and evaluate
            program outcomes, providing actionable insights for continuous
            improvement. Throughout this role, I conducted extensive user
            testing, gathered feedback to refine the user experience, and
            optimized the web application's loading speed and performance.
          </p>

          <p className="text-base text-gray-400">
            Beyond my technical proficiencies, which include expertise in
            languages like JavaScript, TypeScript, HTML, CSS, Java, Python, and
            C++, as well as frameworks such as React JS/TS, Angular JS, and
            Ionic, I am a collaborative team player. At CP Health Innovations, I
            worked closely with UX/UI designers, backend developers, and project
            managers to deliver cohesive and efficient solutions. My strong
            communication skills, attention to detail, and commitment to
            continuous improvement make me a valuable asset to any software
            development team.
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, libraries, and tools I've
            worked with, I started programming about +
            {calculateDuration('2020-01-01', false)} ago. I have tried a few
            programming languages and technology stack, both Backend and
            Frontend.
          </p>

          <p className="text-base text-gray-400">
            Event though the scope of web development is wide, I was very
            interested and focused on Frontend development.
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>

        <ProcessWork />

        {/* <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Interests & Goals</h2>

          <p className='text-base text-gray-400'>
            I am interested in learning Backend with other language like Java, Go or with Python. I also want to know how to make a video game with Unity or other and I am very interested in being a content creator whether programming or something else.
          </p>

          <p className='text-base text-gray-400'>
            For now I'm learning how to make applications with real time communication such as a chat using Socket.IO, I'm also starting to learn the way to be Devops using Docker, Kubernetes, AWS or others.
          </p>

          <p className='text-base text-gray-400'>
            I am also interested in learning other things besides programming such as 3D design with Blender and video editing with Davinci Resolve (these last two I would take as a hobby).
          </p>

        </AnimationContainer> */}
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
