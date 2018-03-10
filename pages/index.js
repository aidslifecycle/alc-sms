import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = (props) => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
}

const Index = () => {
	return (<Layout>
           <ul>
             <PostLink title="Hello Next.js" />
             <PostLink title="Learn Next.js" />
             <PostLink title="Depoly or something" />
           </ul>
         </Layout>);
}

export default Index;