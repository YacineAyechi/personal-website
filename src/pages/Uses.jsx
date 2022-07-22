import React from "react";
import "./css/Uses.css";

function Uses() {
  return (
    <div className="uses-container">
      <h1>Uses</h1>
      <p>
        Here's a list of tools I use for my day to day work. I'll try to always
        update this list.
      </p>
      <img src="./uses-img.jpg" alt="" className="uses-img" />
      <div className="uses-s">
        <div className="uses-1">
          <h2>Editor & Terminal ⌨️</h2>
          <ul className="ul-uses">
            <li>
              Editor -{" "}
              <a
                href="https://code.visualstudio.com/"
                className="lnk"
                target="_blank"
              >
                {" "}
                VSCode
              </a>{" "}
              By Microsoft.
            </li>
            <li>
              Color Theme - I was using{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple"
                className="lnk"
                target="_blank"
              >
                Shades Of Purple
              </a>{" "}
              by Ahmad Awais and I just switched to{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode"
                className="lnk"
                target="_blank"
              >
                {" "}
                SynthWave '84
              </a>{" "}
              by Robb Owen.
            </li>
            <li>
              Coding Font -{" "}
              <a
                href="https://github.com/microsoft/cascadia-code"
                className="lnk"
                target="_blank"
              >
                Cascadia Code
              </a>{" "}
              by Microsoft.
            </li>
          </ul>
        </div>

        <div className="uses-2">
          <h2>Desktop & Web Apps 🖥️</h2>
          <ul className="ul-uses">
            <li>Adobe XD - Creating UI/UX Designs.</li>
            <li>Slack - for communication.</li>
            <li>Discord - engaging with the dev community on Discord.</li>
            <li>Notion - for taking notes.</li>
            <li>Trello - project managment tool.</li>
          </ul>
        </div>

        <div className="uses-3">
          <h2>Desk Setup 💻</h2>
          <ul className="ul-uses">
            <li>Asus TUF GAMING FX505DT 16GB RAM</li>
            <li>RIG Headset 500 PRO GEN 2</li>
            <li>CASTOR K631 65% Wired RGB Gaming Keyboard</li>
            <li>COBRA-FPS M711-FPS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Uses;
