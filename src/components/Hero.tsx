import "../css/hero.css";
import  "../asserts/hero.png";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-label">Build Your Developer Stack</p>

          <h1 className="hero-title">
            Build Your
            <span className="gradient-text"> Perfect Dev Stack</span>
          </h1>

          <p className="hero-description">
            Discover the best technologies for building modern,
            scalable, and powerful web applications.
          </p>

          <div className="hero-buttons">
            <button className="hero-primary-btn">
              Explore Technologies
            </button>

            <button className="hero-secondary-btn">
              Learn More
            </button>
          </div>
        </div>

      <div className="hero-image-wrapper">
          <img
            src="../asserts/hero.png"
            alt="Developer working with technology"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;