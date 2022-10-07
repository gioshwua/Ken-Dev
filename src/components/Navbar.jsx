import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="logo"><img src = "./assets/logo.png"/> </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About </a>
        </li>
        <li>
          <a href="">Skills </a>
        </li>
        <li>
          <a href="">Portfolio </a>
        </li>
        <li>
          <a href="">Contact </a>
        </li>
      </ul>
    </nav>
  );
}
