import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>STAY POINTS | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span> StayPoints.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/JANARTHANAN-M-ux"
        >
          JANARTHANAN M
        </a>
      </p>
    </footer>
  );
}
