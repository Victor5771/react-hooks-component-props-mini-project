import React from "react";
import blogData from "../data/blog";

console.log(blogData);
const headingStyle = {
  color: "pink", // Set the text color to pink
};
function App() {
  return (
    <div className="App">
    <div>
        <h1 style={headingStyle}>Overreacted</h1>
        <p>Dan Abramov</p>
        <p>Personal blog by Dan Abramov. I explain with words and code.</p>
      </div>

      <div>
        <h2 style={headingStyle}>npm audit: Broken by Design</h2>
        <p>July 7, 2021 • ☕️☕️☕️ 14 min read</p>
        <p>Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)</p>
      </div>

      <div>
        <h2 style={headingStyle}>Before You memo()</h2>
        <p>February 23, 2021 • ☕️ 5 min read</p>
        <p>Rendering optimizations that come naturally.</p>
      </div>

      <div>
        <h2 style={headingStyle}>The WET Codebase</h2>
        <p>July 13, 2020 • ☕️ 1 min read</p>
        <p>Come waste your time with me.</p>
      </div>

      <div>
        <h2 style={headingStyle}>Goodbye, Clean Code</h2>
        <p>January 11, 2020 • ☕️ 5 min read</p>
        <p>Let clean code guide you. Then let it go.</p>
      </div>

    </div>
  );
}

export default App;
