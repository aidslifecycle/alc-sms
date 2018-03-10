import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = (props) => {
  return (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const Index = () => {
	return (<Layout>
           <ul>
             <PostLink id="hello-nextjs" title="Hello Next.js" />
             <PostLink id="learn-nextjs" title="Learn Next.js" />
             <PostLink id="deploy-nextjs" title="Deploy or something" />
           </ul>
         </Layout>);
};

export default Index;