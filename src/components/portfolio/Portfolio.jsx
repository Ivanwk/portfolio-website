import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Recent Work</span>

      <div className="project__container container grid">
        <div className="project__item grid">
          <img src={IMG1} alt="" className="project__img" />

          <div className="project__data">
            <h3 className="project__title">Mobile App</h3>
            <p className="project__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="project__link">
              <a
                href="https://github.com/ivanwk"
                className="project__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-github-alt"></i>
              </a>
              <a
                href="https://dribbble.com/Alien_pixels"
                className="project__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="project__item grid">
          <img src={IMG2} alt="" className="project__img" />

          <div className="project__data">
            <h3 className="project__title">Mobile App</h3>
            <p className="project__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="project__link">
              <a
                href="https://github.com/ivanwk"
                className="project__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-github-alt"></i>
              </a>
              <a
                href="https://dribbble.com/Alien_pixels"
                className="project__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="project__item grid">
          <img src={IMG3} alt="" className="project__img" />

          <div className="project__data">
            <h3 className="project__title">Mobile App</h3>
            <p className="project__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="project__link">
              <a
                href="https://github.com/ivanwk"
                className="project__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-github-alt"></i>
              </a>
              <a
                href="https://dribbble.com/Alien_pixels"
                className="project__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="uil uil-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
