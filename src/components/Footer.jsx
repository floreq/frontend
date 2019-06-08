import React from "react";

function Footer() {
  const copyrightDate = new Date();
  return (
    <React.Fragment>
      <hr className="footer-hr" />
      <footer>
        <span>{`© ${copyrightDate.getFullYear()}`}</span>
        <ul>
          <li>Pomoc</li>
          <li>Kontakt</li>
          <li>Twórcy</li>
        </ul>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
