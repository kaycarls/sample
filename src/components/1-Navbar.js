import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <span className="brand-name">AK SYAFIQ</span>
            </a>
            <button className="navbar-toggler" type="button" onClick={toggleExpanded}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse justify-content-center${expanded ? ' show' : ''}`} id="navbarNav">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="hero"
                            smooth={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="projects"
                            smooth={true}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="contact"
                            smooth={true}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
