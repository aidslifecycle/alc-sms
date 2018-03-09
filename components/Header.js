import Link from 'next/Link';

const linkStyle = {
	marginRight: 15
}

const Header = () => {
	return (
		<div>
    <Link>
    <a href="/" style={ linkStyle }>Home</a>
    </Link>
    <Link>
    <a href="/about" style={ linkStyle }>About</a>
    </Link>
  </div>);
};

export default Header;