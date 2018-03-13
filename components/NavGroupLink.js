import Link from 'next/link';

const NavGroupLink = (props) => {
	return (
           <Link href={ `/post?title=${props.title}` }>
           <a className="dropdown-item">
             { props.title }
           </a>
           </Link>
		);
};

export default NavGroupLink;