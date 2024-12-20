import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeImg = document.getElementById("themeImg");
  const forecastP = document.querySelector("#weather");
  if (document.body.classList.contains("light")) {
    themeImg.src = "/sun.png";
    themeImg.style.filter = "none";
    forecastP.innerText =
      "change of theme!";
  } else {
    themeImg.src = "/moon.png";
    themeImg.style.filter = "invert(70%)";
    forecastP.innerText =
      "change of theme";
  }
};

export const getDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
 
  
};

export const Navbar = () => `
<nav>
  <div class="top-nav">
    <div class="title">
      <p id="dateP"></p>
      <h1>abel fernández (belum)</h1>
      <p id="position">Full Stack Developer</p>
    </div>
    <div class="forecast">
      <p>Change of theme</p>
      <div class="forecast-information">
        
        <button id="themeBtn">
          <img src="/sun.png" alt="Moon " id="themeImg">
        </button>
      </div>
    </div>
  </div>
  <ul>
    <li>
        <a href="#home" id="homelink">Home</a>
    </li>
    <li>
        <a href="#projects" id="projectslink">Projects</a>
    </li>
  </ul>
</nav>
`;