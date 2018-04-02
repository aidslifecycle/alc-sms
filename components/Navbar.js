import NavGroupLink from './NavGroupLink';
import Link from 'next/link';

const Navbar = () => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link href="/">
            <a className="navbar-brand">
              <img src="/static/images/logo.svg" height="35px" />
            </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="groupDropdown" data-toggle="dropdown">Groups</a>
                  <div className="dropdown-menu">
                    <NavGroupLink title="AIDS/LifeCycle" id="alc" />
                    <NavGroupLink title="Count" id="count" />
                    <NavGroupLink title="Emergency Operations" id="emergency-operations" />
                    <NavGroupLink title="Lost and Found" id="lost-and-found" />
                    <NavGroupLink title="Medical" id="medical" />
                    <NavGroupLink title="Participant Support" id="participant-support" />
                    <NavGroupLink title="Route" id="the-route" />
                    <NavGroupLink title="Special Events" id="special-events" />
                    <NavGroupLink title="Staff" id="staff" />
                    <a href="/login" className="dropdown-item">Log Out</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>);
};

export default Navbar;