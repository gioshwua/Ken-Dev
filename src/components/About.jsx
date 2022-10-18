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

        <h1 data-aos="fade-up">
          Hey! Its nice<span> Meeting you</span> !<img></img>{" "}
        </h1>
        <p data-aos="fade-left">
          {" "}
          Hello world, I am Kenneth. A freelancer based in Batangas City,
          Philippines. 2 years experience in strategy, experience design, and
          web development. Eh paano kung hindi Hindi ka nakilala Siguro
          nakakulong pa din Sa nakaraan 'di makalaya Ang sarili dinadaya, yeah
          Naglalasing-lasing hindi pala kaya, yeah Ayokong magising nang 'di ka
          kasama Kung nandito ka sa tabi mas masaya sana.{" "}
        </p>
      </div>
    </section>
  );
}
