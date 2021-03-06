import Link from 'next/link';

const NavGroupLink = (props) => {
	return (
           <Link href={ `/channel?title=${props.title}`} as={`/channel/${props.id}` }>
           <a className="dropdown-item">
             { props.title }
           </a>
           </Link>
		);
};

export default NavGroupLink;