import React from "react";
import Body from "../components/Body";
import "../Styling/Home.css";

function HomePage() {
  return (
    <section>
      <div className="bg-image">
        <img
          className="background"
          alt="background banner"
          src="https://i.pinimg.com/736x/52/44/a4/5244a4d9f88baf981a4e54afd36757c3.jpg"
        />
      </div>
      <Body />
    </section>
  );
}

export default HomePage;
