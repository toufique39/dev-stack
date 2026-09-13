import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <span className="footer-logo-icon">DS</span>
            <span className="footer-logo-text">Dev Stack</span>
          </a>

          <p className="footer-description">
            Build a better development stack with modern technologies
            and tools for your next project.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h3>Product</h3>

          <a href="#technologies">Technologies</a>
          <a href="#home">Features</a>
          <a href="#projects">Projects</a>
          <a href="#home">Pricing</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#home">Careers</a>
          <a href="#home">Blog</a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>Legal</h3>

          <a href="#home">Privacy</a>
          <a href="#home">Terms</a>
          <a href="#home">Security</a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;