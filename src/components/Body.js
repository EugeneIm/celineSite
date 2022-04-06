import React from "react";
import "../Styling/Home.css";

function Body() {
  return (
    <div>
      <div className="social-images">
        <a href="https://www.twitch.tv/starsmitten">
          <img
            className="twitch"
            src="https://www.freepnglogos.com/uploads/purple-twitch-logo-png-18.png"
          />
        </a>
        <a href="https://www.instagram.com/starsmitten_/?hl=en">
          <img
            className="instagram"
            src="https://www.pinclipart.com/picdir/big/1-13590_instagram-logo-insta-logo-png-transparent-background-clipart.png"
          />
        </a>
        <a href="https://twitter.com/starsmitten_">
          <img
            className="twitter"
            src="https://pnggrid.com/wp-content/uploads/2021/07/Twitter-Logo-Square.png"
          />
        </a>
        <a href="https://www.youtube.com/c/starsmitten">
          <img
            className="youtube"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
          />
        </a>
      </div>
      <div className="about-me">
        <p>
          About Me: <br />
          Hi, I'm Celine, am 27 (according to bio), <br />
          streamer for Dignitas. <br />
          "I can't go back to yesterday because I was a different person then" -
          Favorite quote c:
        </p>
        <p>
          Favorite Games So Far: <br />
          - Kirby Crystal Shards <br />
          - Digimon World <br />
          - Spyro <br />
          - Klonoa (?) <br />
          - Pokemon <br />- MHW{" "}
          <img
            className="lets-go"
            src="https://cdn.betterttv.net/emote/6072c12539b5010444cfd137/3x"
          />{" "}
          <br />- Lost Ark{" "}
          <img
            className="lost-ark"
            src="https://cdn.betterttv.net/emote/60e7e5878ed8b373e421fd8e/3x"
          />
          <br />
          - LoL (which is actually pain pepeW) <br />
          - Apex go brr <br />
          - Valorant <br />
          - Slay The Spire (Sorry Derryn) <br />
        </p>
        <p>
          Me like money 💰 <br />
          No favor doe, <br />
          refund = NOPERS, <br />
          remember that
          <img
            className="smart"
            src="https://cdn.betterttv.net/emote/5a311dd16405a95e4b0d4967/3x"
          />
        </p>
        <p>
          If you wonder who did my aesthetics: <br />
          - Panels: By the wonderful LilyPichu <br />
          - Emotes: Joyo, Joyce, Rob, and Chiika <br />
          - Animated Emotes (Pog): Vii <br />
          - Alerts: Rupes <br />- Vtuber Art (even though I don't use it
          much/anymore Sadge): Jeshiki <br />
          - Vtuber Rigging: Yua <br />
        </p>
      </div>
      <div className="panels"></div>
    </div>
  );
}

export default Body;
