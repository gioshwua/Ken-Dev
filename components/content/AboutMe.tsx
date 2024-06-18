import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        With a passion for continuous learning and growth, I am constantly
        expanding my skillset beyond traditional software development. Alongside
        my expertise in languages like JavaScript, TypeScript, HTML, CSS, Java,
        Python, and C++, as well as proficiency in frameworks such as React
        JS/TS, Angular JS, and Ionic, I am actively exploring the field of
        DevOps. I am dedicated to mastering tools and practices such as Linux,
        AWS, CI/CD, and Docker with the goal of delivering cost-optimized,
        reliable, and secure software solutions from development to deployment
        and maintenance. This commitment to staying ahead of the curve and
        embracing new technologies will enable me to contribute to the entire
        software delivery lifecycle.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
