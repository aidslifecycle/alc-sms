import NavGroupLink from './NavGroupLink';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
        <img src="static/images/logo.svg" height="35px" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <Link href="/">
                <a className="nav-link">Home</a>
                </Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="groupDropdown" data-toggle="dropdown">
                    Groups
                </a>
                <div className="dropdown-menu">
                    <NavGroupLink title="AIDS/LifeCycle" />
                    <NavGroupLink title="Count" />
                    <NavGroupLink title="Emergency Operations" />
                    <NavGroupLink title="Lost &amp; Found"/>
                    <NavGroupLink title="Medical" />
                    <NavGroupLink title="Participant Support" />
                    <NavGroupLink title="Route" />
                    <NavGroupLink title="Special Events"/>
                    <NavGroupLink title="Staff" />
                </div>
            </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search groups" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
	);
};

export default Navbar;