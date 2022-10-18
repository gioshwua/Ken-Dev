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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />

        <img src="./src/assets/vite.png" />
      </div>
    </div>
  );
}
