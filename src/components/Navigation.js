import React from "react";

function Nav({ currentPage, handlePageChange }) {

    return (
        <nav>
            <ul className="header-ul">
                <li className="header-li">
                    <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'header-a-active' : 'header-a'}>About Me</a>
                </li>
                <li className="header-li">
                    <a  href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'header-a-active' : 'header-a'}>Portfolio</a>
                </li>
                <li className="header-li">
                    <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'header-a-active' : 'header-a'}>Contact</a>
                </li>
                <li className="header-li">
                    <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'header-a-active' : 'header-a'}>Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;