import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Footer">
      <p>Developed using ReactJs</p>
      <p>Copyright © Kenneth 2022</p>
    </div>
  );
}
