import NavGroupLink from './NavGroupLink';
import Link from 'next/link';

const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link href="/">
              <a className="navbar-brand">
                <img src="static/images/logo.svg" height="35px" />
              </a>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="groupDropdown" data-toggle="dropdown">
                                            Groups
                                        </a>
                    <div className="dropdown-menu">
                      <NavGroupLink title="AIDS/LifeCycle" />
                      <NavGroupLink title="Count" />
                      <NavGroupLink title="Emergency Operations" />
                      <NavGroupLink title="Lost and Found" />
                      <NavGroupLink title="Medical" />
                      <NavGroupLink title="Participant Support" />
                      <NavGroupLink title="Route" />
                      <NavGroupLink title="Special Events" />
                      <NavGroupLink title="Staff" />
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
        );
};

export default Navbar;