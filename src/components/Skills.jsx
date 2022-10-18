import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Skills">
      <div className="Describe" data-aos="fade-right">
        MY <span>SKILLS</span>
      </div>
      <div className="Skillsko" data-aos="fade-left">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          data-aos="fade-left"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          data-aos="fade-up"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
          data-aos="fade-right"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          data-aos="fade-left"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          data-aos="fade-up"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          data-aos="fade-up"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          data-aos="fade-right"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          data-aos="fade-left"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original-wordmark.svg"
          data-aos="fade-up"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          data-aos="fade-right"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          data-aos="fade-left"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"
          data-aos="fade-up"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
          data-aos="fade-right"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          data-aos="fade-left"
        />

        <img src="./src/assets/vite.png" data-aos="fade-up" />
      </div>
    </div>
  );
}
