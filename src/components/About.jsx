import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="About">
      <div data-aos="fade-left">
        <img />

        <h1>
          Hey! Its nice<span> Meeting you</span> !<img></img>{" "}
        </h1>
        <p>
          {" "}
          Hello world, I am Kenneth. A freelancer based in Batangas City,
          Philippines. 2 years experience in strategy, experience design, and
          web development. I'm a PHP & Ruby programmer who is capable in
          building Wordpress, Drupal, Laravel, Silverstripe, Salesforce, Ruby On
          Rails, Spree and even custom applications for my clients.{" "}
        </p>
      </div>
    </section>
  );
}
