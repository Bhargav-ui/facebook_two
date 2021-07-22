import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {

    const [navDataClass, setNavDataClass] = useState("collapse navbar-collapse");
    const [ToggleNavStatus, setToggleNavStatus] = useState(false);

    const toggleMenu = () => {
        if (ToggleNavStatus == false) {
            setNavDataClass("collapse navbar-collapse show");
            setToggleNavStatus(true);
        }
        else {
            setNavDataClass("collapse navbar-collapse");
            setToggleNavStatus(false);
        }
    };
    return (
        <>
            <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
                {/*Logo*/}
                <a hreaf="#" className="navbar-brand">
                    Facebook
                </a>
                {/*navbar tag icon */}
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={navDataClass} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/home">
                                <FontAwesomeIcon icon={faHome} />
                                Home
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link active" to="/friends">
                                <FontAwesomeIcon icon={faTwitter} />
                                Friends
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/Groups">
                                Groups
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">
                                Profile
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/addresses">
                                Addresses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/files">
                                Files
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/data">
                                data
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/twindata">
                                TwinData
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/datatwo">
                                datatwo
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Nav;