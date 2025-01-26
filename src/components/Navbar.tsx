import React from 'react';
import Link from "next/link";
import '../support/navbar.css';
const Navbar = () => {
  return (
    <header className="main-nav__container">
      <div></div>
      <div className='main-nav__section'>
        <div className='main-nav__link'>
          <Link
              href={`/courses`}
              >
             Courses
          </Link>
        </div>
        <div className='main-nav__link'>Find a Doctor</div>
        <div className='main-nav__link'>For Employers</div>
        <div className='main-nav__link'>Sign In</div>
        <div className='course-mobile-only'>
        <Link
            href={`/courses`}
            >
          Courses
        </Link>
      </div>
        <div className="main-nav__link__image_search">
            <Link
              href={`/search`}
              >
              <img src="/search.svg" alt="Search" />
          </Link>
        </div>
        <div  className="main-nav__link__image"><img src="/menu.svg" alt="Menu" /></div>
      </div>
    </header>
  );
};

export default Navbar;
