import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="About">
      <div data-aos="fade-down">
        <img />

        <h1 data-aos="fade-up">
          Hey! Its nice<span> Meeting you</span> !<img></img>{" "}
        </h1>
        <p data-aos="fade-down">
          {" "}
          Hello world, I am Kenneth. A freelancer based in Batangas City,
          Philippines. 2 years experience in strategy, experience design, and
          web development. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Repellat voluptas reiciends aspernatur, recusandae incidunt vel
          necessitatibus nam rem est sapiente in quod, quisquam qui tempora
          perferendis voluptatibus? Necessitatibus, quo ipsum.{" "}
        </p>
      </div>
    </section>
  );
}
