const Navbar = (props) => {
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
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="groupDropdown" data-toggle="dropdown">
                    Groups
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">AIDS/LifeCycle</a>
                    <a className="dropdown-item" href="#">Count</a>
                    <a className="dropdown-item" href="#">Emergency Operations</a>
                    <a className="dropdown-item" href="#">Count</a>
                    <a className="dropdown-item" href="#">Lost & Found</a>
                    <a className="dropdown-item" href="#">Medical</a>
                    <a className="dropdown-item" href="#">Participant Support</a>
                    <a className="dropdown-item" href="#">Route</a>
                    <a className="dropdown-item" href="#">Special Events</a>
                    <a className="dropdown-item" href="#">Staff</a>

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