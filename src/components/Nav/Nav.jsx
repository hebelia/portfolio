"use client";
import { useEffect, useState } from "react";
import style from "./Nav.module.css";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const halfHeight = window.innerHeight / 2;
    let currentActiveIndex = 0;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - halfHeight;
      if (window.pageYOffset >= sectionTop) {
        currentActiveIndex = index;
      }
    });

    setActiveIndex(currentActiveIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <span className="openMenu" onClick={() => setMenuVisible(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm16 5H4v2h16z" />
        </svg>
      </span>
      <div className={`header ${menuVisible ? "visible" : ""}`}>
        <span className="closeMenu" onClick={() => setMenuVisible(false)}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <ul className="menu">
          {["home", "experience", "skills", "certificates", "contact"].map(
            (item, index) => (
              <a
                href={`#${item}`}
                className={`a scroll ${activeIndex === index ? "active" : ""}`}
                key={item}
                onClick={() => setActiveIndex(index)}
              >
                <li>
                  {item === "home" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 2 24 24"
                    >
                      {/* SVG path for "home" icon */}
                      <path
                        fill="currentColor"
                        d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4z"
                      />
                    </svg>
                  )}
                  {item === "experience" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 2 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M8 3h8v4h6v14H2V7h6zm2 4h4V5h-4zM4 9v10h16V9zm4 2v6H6v-6zm10 0v6h-2v-6z"
                      />
                    </svg>
                  )}
                  {item === "skills" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 2 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 2h10v2H6zM4 6V4h2v2zm0 12H2V6h2zm2 2H4v-2h2zm12 0H6v2h12zm2-2v2h-2v-2zm0 0h2V8h-2zM12 6H8v2H6v8h2v2h8v-2h2v-4h-2v4H8V8h4zm2 8v-4h2V8h2V6h4V4h-2V2h-2v4h-2v2h-2v2h-4v4z"
                      />
                    </svg>
                  )}
                  {item === "certificates" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 2 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M2 3h22v11h-2V5H2v14h12v2H0V3zm8 4H6v4h4zm-6 6h8v4H4zm16-6h-6v2h6zm-6 4h6v2h-6zm3 4h-3v2h3zm4 6v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                      />
                    </svg>
                  )}
                  {item === "contact" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 1 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M22 4H2v16h20zM4 18V6h16v12zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8z"
                      />
                    </svg>
                  )}

                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              </a>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
