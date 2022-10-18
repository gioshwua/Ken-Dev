import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function White() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="Filler">
      FOLLOW ME ON:
      <div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" />
      </div>
    </section>
  );
}
