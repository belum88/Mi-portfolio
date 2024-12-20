import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
      <article>
        <h2>Tech times: meet the person behind the code</h2>
        <div class="body-article">
          <img src="/computer.png" alt="Computer drawing">
          <div class="personal-information">
            <h3>I'm Abel</h3>
            
            <p>Python developer , web application development student.</p>
          </div>
        </div>
      </article>
    </section>`;
};