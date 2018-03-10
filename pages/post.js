import Layout from '../components/Layout';

const Post = (props) => {
	console.log("PROPS.URL", props.url);
	return (<Layout>
           <h1>{ props.url.query.title }</h1>
           <p>This is the blog content</p>
         </Layout>)
};

export default Post;