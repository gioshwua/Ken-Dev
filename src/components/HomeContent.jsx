import React from "react";
import Typed from "react-typed";

export default function HomeContent() {
  return (
    <section className="HomeContent">
      <p>HOLA! I AM</p>
      <Typed
        className="type"
        strings={["Kenneth Joshua O Reano", "Aspiring FrontEnd Developer"]}
        typeSpeed={100}
        backSpeed={50}
        loop
      />

      <p className="describe">
        I am a <span>frontend developer</span> with a particular interest in
        making things simple and automating daily tasks. I try to keep up with
        security and best practices, and am always looking for new things to
        learn.
      </p>
    </section>
  );
}
