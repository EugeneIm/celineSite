import React from "react";
import Nav from "./Nav";
import "../Styling/Home.css";

function Header() {
  return (
    <header className="banner">
      <a href="/">
        <img
          className="jail"
          src="https://cdn.discordapp.com/emojis/897405775717228575.webp?size=240&quality=lossless"
        />
        <img
          className="dance"
          src="https://cdn.betterttv.net/emote/5f9102a86f583802e3896a1f/3x"
        />
        <img
          className="bork"
          src="https://cdn.betterttv.net/emote/5f2bb979713a6144748b056c/3x"
        />
      </a>
      <Nav />
    </header>
  );
}
export default Header;
