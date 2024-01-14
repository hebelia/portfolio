"use client";
import { useEffect, useState } from "react";
import style from "./Nav.css";


const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <span className="openMenu" onClick={() => setMenuVisible(true)}>
        <i className="fa-solid fa-bars-staggered"></i>
      </span>
      <div className={`header ${menuVisible ? 'visible' : ''}`}>
        <span className="closeMenu" onClick={() => setMenuVisible(false)}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <ul className="menu">
          {['home', 'Projects-Exp', 'skills', 'Certificates', 'contact'].map((item, index) => (
            <a
              href={`#${item}`}
              className={`a scroll ${activeIndex === index ? 'active' : ''}`}
              key={item}
              onClick={() => setActiveIndex(index)}
            >
              <li>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
            </a>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;