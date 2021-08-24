import React from "react";

function Footer() {
  const year = new Date();

  return (
    <div>
      <footer className="page-footer font-small blue fixed-bottom">
        <div className="footer-copyright text-center py-3">
          © {year.getFullYear()} Copyright:{" "}
          <a
            href="https://cristian-zuluaga-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Datacris
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
